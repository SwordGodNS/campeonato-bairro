import { Trophy, Medal, Shield, TrendingUp, Crown } from "lucide-react";

const classification = [
  { position: 1, team: "Real Norte", logo: "/img/real-norte.png", points: 15, games: 6, wins: 5, draws: 0, losses: 1, balance: 9, status: "classificado" },
  { position: 2, team: "União FC", logo: "/img/uniao-fc.png", points: 13, games: 6, wins: 4, draws: 1, losses: 1, balance: 6, status: "classificado" },
  { position: 3, team: "Atlético Vila", logo: "", points: 10, games: 6, wins: 3, draws: 1, losses: 2, balance: 2, status: "disputa" },
  { position: 4, team: "Morro City", logo: "", points: 7, games: 6, wins: 2, draws: 1, losses: 3, balance: -3, status: "disputa" },
  { position: 5, team: "Nova União", logo: "", points: 4, games: 6, wins: 1, draws: 1, losses: 4, balance: -8, status: "eliminado" },
];

export default function ClassificationPage() {
  return (
    <main className="classification-page">
      <div className="page-bg"></div>

      <section className="page-hero">
        <span className="badge"><Trophy size={18} /> Copa do Bairro 2026</span>
        <h1>Classificação</h1>
        <p>Tabela geral com pontuação e desempenho dos times.</p>
      </section>

      <section className="classification-cards">
        <div className="classification-card leader"><Crown /><span>Líder</span><strong>Real Norte</strong></div>
        <div className="classification-card"><Medal /><span>Classificados</span><strong>2 Times</strong></div>
        <div className="classification-card"><TrendingUp /><span>Melhor ataque</span><strong>14 Gols</strong></div>
      </section>

      <section className="mobile-table-list">
        <h2>Tabela geral</h2>
        {classification.map((item) => (
          <article key={item.position} className={`standing-card ${item.status}`}>
            <div className="standing-main">
              <strong>{item.position}º</strong>
              {item.logo ? <img src={item.logo} alt={item.team} /> : <Shield size={30} />}
              <h3>{item.team}</h3>
              <b>{item.points}</b>
            </div>
            <div className="standing-stats">
              <span>J {item.games}</span><span>V {item.wins}</span><span>E {item.draws}</span><span>D {item.losses}</span><span>SG {item.balance}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
