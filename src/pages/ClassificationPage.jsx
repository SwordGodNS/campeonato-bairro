import { useEffect, useMemo, useState } from "react";
import { Trophy, Medal, Shield, TrendingUp, Crown } from "lucide-react";
import { subscribeData } from "../data/firebaseStorage";

export default function ClassificationPage() {
  const [teams, setTeams] = useState([]);
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    const unsubTeams = subscribeData("teams", setTeams);
    const unsubMatches = subscribeData("matches", setMatches);

    return () => {
      unsubTeams();
      unsubMatches();
    };
  }, []);

  const classification = useMemo(() => {
    const table = teams.map((team) => ({
      id: team.id,
      team: team.name,
      logo: team.logo,
      points: 0,
      games: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      balance: 0,
      goalsFor: 0,
      goalsAgainst: 0,
    }));

    matches.forEach((match) => {
      if (match.scoreA === "" || match.scoreB === "") return;

      const a = table.find((item) => String(item.id) === String(match.teamAId));
      const b = table.find((item) => String(item.id) === String(match.teamBId));
      if (!a || !b) return;

      const scoreA = Number(match.scoreA);
      const scoreB = Number(match.scoreB);

      a.games += 1;
      b.games += 1;
      a.goalsFor += scoreA;
      a.goalsAgainst += scoreB;
      b.goalsFor += scoreB;
      b.goalsAgainst += scoreA;
      a.balance = a.goalsFor - a.goalsAgainst;
      b.balance = b.goalsFor - b.goalsAgainst;

      if (scoreA > scoreB) {
        a.wins += 1; a.points += 3; b.losses += 1;
      } else if (scoreB > scoreA) {
        b.wins += 1; b.points += 3; a.losses += 1;
      } else {
        a.draws += 1; b.draws += 1; a.points += 1; b.points += 1;
      }
    });

    return table.sort((a, b) => b.points - a.points || b.balance - a.balance || b.goalsFor - a.goalsFor);
  }, [teams, matches]);

  const leader = classification[0];
  const bestAttack = [...classification].sort((a, b) => b.goalsFor - a.goalsFor)[0];

  return (
    <main className="classification-page">
      <div className="page-bg"></div>

      <section className="page-hero">
        <span className="badge"><Trophy size={18} /> Copa do Bairro 2026</span>
        <h1>Classificação</h1>
        <p>Tabela calculada automaticamente com base nos placares cadastrados.</p>
      </section>

      <section className="classification-cards">
        <div className="classification-card leader"><Crown /><span>Líder</span><strong>{leader?.team || "A definir"}</strong></div>
        <div className="classification-card"><Medal /><span>Times</span><strong>{classification.length}</strong></div>
        <div className="classification-card"><TrendingUp /><span>Melhor ataque</span><strong>{bestAttack?.goalsFor || 0} Gols</strong></div>
      </section>

      <section className="mobile-table-list">
        <h2>Tabela geral</h2>

        {classification.length === 0 ? (
          <p className="empty-text">Nenhum time cadastrado ainda.</p>
        ) : (
          classification.map((item, index) => (
            <article key={item.id} className={`standing-card ${index < 2 ? "classificado" : index < 4 ? "disputa" : "eliminado"}`}>
              <div className="standing-main">
                <strong>{index + 1}º</strong>
                {item.logo ? <img src={item.logo} alt={item.team} /> : <Shield size={30} />}
                <h3>{item.team}</h3>
                <b>{item.points}</b>
              </div>
              <div className="standing-stats">
                <span>J {item.games}</span><span>V {item.wins}</span><span>E {item.draws}</span><span>D {item.losses}</span><span>SG {item.balance}</span>
              </div>
            </article>
          ))
        )}
      </section>
    </main>
  );
}
