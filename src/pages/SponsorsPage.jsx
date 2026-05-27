import { useEffect, useState } from "react";
import { Handshake } from "lucide-react";
import { getData, subscribeData } from "../data/storage";

export default function SponsorsPage() {
  const [sponsors, setSponsors] = useState([]);

  function load() {
    setSponsors(getData("sponsors"));
  }

  useEffect(() => {
    load();
    return subscribeData(load);
  }, []);

  return (
    <main className="page">
      <div className="page-bg"></div>

      <section className="page-hero">
        <span className="badge"><Handshake size={18} /> Apoio oficial</span>
        <h1>Patrocinadores</h1>
        <p>Marcas que apoiam a Copa do Bairro.</p>
      </section>

      <section className="grid">
        {sponsors.length === 0 ? (
          <p className="empty-text">Nenhum patrocinador cadastrado ainda.</p>
        ) : (
          sponsors.map((sponsor) => (
            <article className="card sponsor-card" key={sponsor.id}>
              <div className="sponsor-logo">
                {sponsor.logo ? <img src={sponsor.logo} alt={sponsor.name} /> : "🤝"}
              </div>
              <h2>{sponsor.name}</h2>
              {sponsor.link && <p>{sponsor.link}</p>}
            </article>
          ))
        )}
      </section>
    </main>
  );
}
