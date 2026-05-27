import { useEffect, useState } from "react";
import UploadImage from "../components/UploadImage";
import { getData, saveData, subscribeData } from "../data/storage";

export default function ManageSponsors() {
  const [sponsors, setSponsors] = useState([]);
  const [form, setForm] = useState({ name: "", link: "", logo: "" });

  function load() {
    setSponsors(getData("sponsors"));
  }

  useEffect(() => {
    load();
    return subscribeData(load);
  }, []);

  function saveSponsor(e) {
    e.preventDefault();

    if (!form.name.trim()) {
      alert("Digite o nome do patrocinador.");
      return;
    }

    const updatedSponsors = [...sponsors, { id: crypto.randomUUID(), ...form }];
    setSponsors(updatedSponsors);
    saveData("sponsors", updatedSponsors);
    setForm({ name: "", link: "", logo: "" });

    alert("Patrocinador salvo!");
  }

  function deleteSponsor(id) {
    const updatedSponsors = sponsors.filter((item) => item.id !== id);
    setSponsors(updatedSponsors);
    saveData("sponsors", updatedSponsors);
  }

  return (
    <section className="admin-card premium-form-card">
      <h2>Gerenciar Patrocinadores</h2>

      <form onSubmit={saveSponsor} className="premium-form">
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Nome do patrocinador" />
        <input value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} placeholder="Link/Instagram/site" />

        <UploadImage label="Logo do patrocinador" value={form.logo} onChange={(url) => setForm({ ...form, logo: url })} />

        <button type="submit">Salvar patrocinador</button>
      </form>

      <div className="registered-list">
        <h3>Patrocinadores cadastrados</h3>

        {sponsors.length === 0 ? (
          <p className="empty-text">Nenhum patrocinador cadastrado.</p>
        ) : (
          sponsors.map((sponsor) => (
            <div className="registered-item" key={sponsor.id}>
              {sponsor.logo && <img src={sponsor.logo} alt={sponsor.name} className="registered-logo" />}

              <div>
                <strong>{sponsor.name}</strong>
                <span>{sponsor.link || "Sem link"}</span>
              </div>

              <button type="button" onClick={() => deleteSponsor(sponsor.id)}>Remover</button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
