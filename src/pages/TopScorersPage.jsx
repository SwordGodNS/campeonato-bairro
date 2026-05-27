import { useEffect, useMemo, useState } from "react";
import { Target, Trophy, Medal, Crown, Flame, TrendingUp } from "lucide-react";
import { getData, subscribeData } from "../data/storage";

export default function TopScorersPage() {
  const [scorers, setScorers] = useState([]);

  function load() {
    setScorers(getData("scorers"));
  }

  useEffect(() => {
    load();
    return subscribeData(load);
  }, []);

  const ranking = useMemo(() => [...scorers].sort((a, b) => Number(b.goals) - Number(a.goals)), [scorers]);
  const leader = ranking[0];

  return (
    <main className="scorers-page">
      <div className="page-bg"></div>

      <section className="page-hero">
        <span className="badge"><Target size={18} /> Ranking de gols</span>
        <h1>Artilharia</h1>
        <p>Jogadores que mais marcaram na competição.</p>
      </section>

      <section className="scorers-stats">
        <div><Trophy /><span>Artilheiro</span><strong>{leader?.name || "A definir"}</strong></div>
        <div><Flame /><span>Mais gols</span><strong>{leader ? `${leader.goals} gols` : "0 gols"}</strong></div>
        <div><TrendingUp /><span>Atletas</span><strong>{ranking.length}</strong></div>
      </section>

      <section className="scorers-list-box">
        <h2>Ranking completo</h2>

        {ranking.length === 0 ? (
          <p className="empty-text">Nenhum artilheiro cadastrado ainda.</p>
        ) : (
          ranking.map((player, index) => (
            <article key={player.id} className="scorer-row">
              <div className="scorer-position">{index === 0 ? <Crown size={18} /> : <Medal size={18} />}<strong>{index + 1}º</strong></div>
              <div className="scorer-player">
                {player.photo ? <img src={player.photo} alt={player.name} /> : <span>👤</span>}
                <div><h3>{player.name}</h3><p>{player.teamName || player.team} • Artilheiro</p></div>
              </div>
              <div className="scorer-goals"><strong>{player.goals}</strong><span>Gols</span></div>
            </article>
          ))
        )}
      </section>
    </main>
  );
}
