import { Target, Trophy, Medal, Crown, Flame, TrendingUp } from "lucide-react";

const scorers = [
  { id: 1, name: "Pedro Henrique", team: "Real Norte", goals: 12, number: 9, position: "Atacante", photo: "" },
  { id: 2, name: "Gabriel Santos", team: "União FC", goals: 9, number: 10, position: "Meia", photo: "" },
  { id: 3, name: "Lucas Silva", team: "Atlético Vila", goals: 7, number: 11, position: "Ponta", photo: "" },
  { id: 4, name: "Rafael Costa", team: "Morro City", goals: 6, number: 7, position: "Atacante", photo: "" },
];

export default function TopScorersPage() {
  return (
    <main className="scorers-page">
      <div className="page-bg"></div>

      <section className="page-hero">
        <span className="badge"><Target size={18} /> Ranking de gols</span>
        <h1>Artilharia</h1>
        <p>Jogadores que mais marcaram na competição.</p>
      </section>

      <section className="scorers-stats">
        <div><Trophy /><span>Artilheiro</span><strong>{scorers[0].name}</strong></div>
        <div><Flame /><span>Mais gols</span><strong>{scorers[0].goals} gols</strong></div>
        <div><TrendingUp /><span>Média</span><strong>2.0 por jogo</strong></div>
      </section>

      <section className="scorers-list-box">
        <h2>Ranking completo</h2>
        {scorers.map((player, index) => (
          <article key={player.id} className="scorer-row">
            <div className="scorer-position">{index === 0 ? <Crown size={18} /> : <Medal size={18} />}<strong>{index + 1}º</strong></div>
            <div className="scorer-player"><span>👤</span><div><h3>{player.name}</h3><p>{player.team} • {player.position}</p></div></div>
            <div className="scorer-goals"><strong>{player.goals}</strong><span>Gols</span></div>
          </article>
        ))}
      </section>
    </main>
  );
}
