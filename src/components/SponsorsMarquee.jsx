import { useEffect, useState } from "react";
import { Handshake } from "lucide-react";
import { subscribeData } from "../data/firebaseStorage";

export default function SponsorsMarquee() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribeData("sponsors", setSponsors);
    return () => unsubscribe();
  }, []);

  if (sponsors.length === 0) return null;

  const duplicated = [...sponsors, ...sponsors];

  return (
    <section className="sponsors-marquee-section">
      <div className="sponsors-title">
        <Handshake size={18} />
        <span>Patrocinadores oficiais</span>
      </div>

      <div className="sponsors-marquee">
        <div className="sponsors-track">
          {duplicated.map((sponsor, index) => (
            <div className="sponsor-moving-card" key={`${sponsor.id}-${index}`}>
              <div className="sponsor-moving-logo">
                {sponsor.logo ? (
                  <img src={sponsor.logo} alt={sponsor.name} />
                ) : (
                  <Handshake size={28} />
                )}
              </div>
              <strong>{sponsor.name}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}