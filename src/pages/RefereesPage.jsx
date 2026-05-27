import { useEffect, useState } from "react";
import { UserCheck } from "lucide-react";
import { subscribeData } from "../data/firebaseStorage";

export default function RefereesPage() {
  const [referees, setReferees] = useState([]);
  useEffect(() => {
    const unsubscribe = subscribeData("referees", setReferees);
    return () => unsubscribe();
  }, []);

  return (
    <main className="page">
      <div className="page-bg"></div>

      <section className="page-hero">
        <span className="badge"><UserCheck size={18} /> Arbitragem</span>
        <h1>Árbitros</h1>
        <p>Equipe de arbitragem cadastrada pelo painel.</p>
      </section>

      <section className="grid">
        {referees.length === 0 ? (
          <p className="empty-text">Nenhum árbitro cadastrado ainda.</p>
        ) : (
          referees.map((referee) => (
            <article className="card" key={referee.id}>
              <div className="avatar image-avatar">
                {referee.photo ? <img src={referee.photo} alt={referee.name} /> : "🧑‍⚖️"}
              </div>
              <h2>{referee.name}</h2>
              <p>{referee.role || "Árbitro"}</p>
            </article>
          ))
        )}
      </section>
    </main>
  );
}
