import { useEffect, useState } from "react";
import UploadImage from "../components/UploadImage";
import { saveData, subscribeData } from "../data/firebaseStorage";

export default function ManageReferees() {
  const [referees, setReferees] = useState([]);
  const [form, setForm] = useState({ name: "", role: "", photo: "" });

  useEffect(() => {
    const unsubscribe = subscribeData("referees", setReferees);
    return () => unsubscribe();
  }, []);

  async function saveReferee(e) {
    e.preventDefault();

    if (!form.name.trim()) {
      alert("Digite o nome do árbitro.");
      return;
    }

    await saveData("referees", [...referees, { id: crypto.randomUUID(), ...form }]);
    setForm({ name: "", role: "", photo: "" });
    alert("Árbitro salvo!");
  }

  async function deleteReferee(id) {
    await saveData("referees", referees.filter((item) => item.id !== id));
  }

  return (
    <section className="admin-card premium-form-card">
      <h2>Gerenciar Árbitros</h2>

      <form onSubmit={saveReferee} className="premium-form">
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Nome do árbitro" />
        <input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} placeholder="Função. Ex: Principal, Auxiliar" />

        <UploadImage label="Foto do árbitro" value={form.photo} onChange={(url) => setForm({ ...form, photo: url })} />

        <button type="submit">Salvar árbitro</button>
      </form>

      <div className="registered-list">
        <h3>Árbitros cadastrados</h3>

        {referees.length === 0 ? (
          <p className="empty-text">Nenhum árbitro cadastrado.</p>
        ) : (
          referees.map((referee) => (
            <div className="registered-item" key={referee.id}>
              {referee.photo && <img src={referee.photo} alt={referee.name} className="registered-logo" />}
              <div>
                <strong>{referee.name}</strong>
                <span>{referee.role || "Sem função"}</span>
              </div>
              <button type="button" onClick={() => deleteReferee(referee.id)}>Remover</button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
