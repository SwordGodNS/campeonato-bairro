import { useEffect, useMemo, useState } from "react";
import { Handshake, Sparkles, Crown, Megaphone } from "lucide-react";
import { subscribeData } from "../data/firebaseStorage";

export default function SponsorsPage() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribeData("sponsors", (data) => {
      setSponsors(Array.isArray(data) ? data : []);
    });

    return () => unsubscribe && unsubscribe();
  }, []);

  const infiniteSponsors = useMemo(() => {
    if (!sponsors.length) return [];
    return Array(18).fill(sponsors).flat();
  }, [sponsors]);

  return (
    <main className="page sponsors-full-page">
      <div className="page-bg"></div>

      <section className="sponsors-premium-hero">
        <span className="sponsors-premium-badge">
          <Crown size={18} /> Apoio oficial da competição
        </span>

        <h1>Patrocinadores</h1>

        <p>
          Marcas que fortalecem a Copa do Bairro e ajudam a transformar o
          campeonato em um verdadeiro espetáculo.
        </p>
      </section>

      {sponsors.length === 0 ? (
        <section className="sponsors-empty-premium">
          <Handshake size={46} />
          <h2>Nenhum patrocinador cadastrado ainda</h2>
          <p>Cadastre os patrocinadores no painel para aparecerem aqui.</p>
        </section>
      ) : (
        <>
          <section className="sponsor-led-board premium-led">
            <div className="sponsor-led-title">
              <Megaphone size={18} />
              <span>Patrocinadores oficiais</span>
            </div>

            <div className="sponsor-led-window">
              <div className="sponsor-led-track">
                {infiniteSponsors.map((sponsor, index) => (
                  <article
                    className="sponsor-led-card"
                    key={`${sponsor.id || sponsor.name}-${index}`}
                  >
                    <div className="sponsor-led-logo">
                      {sponsor.logo ? (
                        <img src={sponsor.logo} alt={sponsor.name} />
                      ) : (
                        <Handshake size={30} />
                      )}
                    </div>

                    <strong>{sponsor.name}</strong>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="sponsors-showcase">
            <div className="sponsors-section-title">
              <Sparkles size={20} />
              <h2>Marcas em destaque</h2>
            </div>

            <div className="sponsors-premium-grid">
              {sponsors.map((sponsor) => (
                <article className="sponsor-premium-card" key={sponsor.id}>
                  <div className="sponsor-card-glow"></div>

                  <div className="sponsor-premium-logo">
                    {sponsor.logo ? (
                      <img src={sponsor.logo} alt={sponsor.name} />
                    ) : (
                      <Handshake size={42} />
                    )}
                  </div>

                  <h3>{sponsor.name}</h3>

                  {sponsor.link && (
                    <a href={sponsor.link} target="_blank" rel="noreferrer">
                      Visitar patrocinador
                    </a>
                  )}
                </article>
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
}