import { useEffect, useState } from "react";
import UploadImage from "../components/UploadImage";
import { saveData, subscribeData } from "../data/firebaseStorage";

export default function ManageTeams() {
  const [teams, setTeams] = useState([]);
  const [form, setForm] = useState({ name: "", city: "", year: "", logo: "", titles: "" });

  useEffect(() => {
    const unsubscribe = subscribeData("teams", setTeams);
    return () => unsubscribe();
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function saveTeam(e) {
    e.preventDefault();

    if (!form.name.trim()) {
      alert("Digite o nome do time.");
      return;
    }

    const newTeam = {
      id: crypto.randomUUID(),
      name: form.name.trim(),
      city: form.city.trim(),
      year: form.year.trim(),
      logo: form.logo,
      titles: Number(form.titles || 0),
      status: "Cadastrado",
    };

    await saveData("teams", [...teams, newTeam]);
    setForm({ name: "", city: "", year: "", logo: "", titles: "" });
    alert("Time cadastrado com sucesso!");
  }

  async function deleteTeam(id) {
    await saveData("teams", teams.filter((team) => team.id !== id));
  }

  return (
    <section className="admin-card premium-form-card">
      <h2>Gerenciar Times</h2>
      <p className="form-description">Cadastre escudo, nome, bairro e dados do time. Ele aparecerá automaticamente no site.</p>

      <form onSubmit={saveTeam} className="premium-form">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Nome do time" />
        <input name="city" value={form.city} onChange={handleChange} placeholder="Bairro/Cidade" />
        <input name="year" value={form.year} onChange={handleChange} placeholder="Ano de fundação" />
        <input name="titles" value={form.titles} onChange={handleChange} type="number" placeholder="Títulos" />

        <UploadImage label="Escudo do time" value={form.logo} onChange={(url) => setForm({ ...form, logo: url })} />

        <button type="submit">Salvar time</button>
      </form>

      <div className="registered-list">
        <h3>Times cadastrados</h3>

        {teams.length === 0 ? (
          <p className="empty-text">Nenhum time cadastrado ainda.</p>
        ) : (
          teams.map((team) => (
            <div className="registered-item" key={team.id}>
              {team.logo && <img src={team.logo} alt={team.name} className="registered-logo" />}
              <div>
                <strong>{team.name}</strong>
                <span>{team.city || "Sem bairro"} • Desde {team.year || "----"}</span>
              </div>
              <button type="button" onClick={() => deleteTeam(team.id)}>Remover</button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
