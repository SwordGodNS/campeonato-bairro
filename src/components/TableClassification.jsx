import { Shield } from "lucide-react";

export default function TableClassification({ teams = [] }) {
  const sorted = [...teams].sort((a, b) => {
    const ptsA = (a.wins * 3) + a.draws;
    const ptsB = (b.wins * 3) + b.draws;
    const sgA = (a.goalsFor || 0) - (a.goalsAgainst || 0);
    const sgB = (b.goalsFor || 0) - (b.goalsAgainst || 0);
    return ptsB - ptsA || sgB - sgA;
  });

  return (
    <section className="classification-mobile-list">
      {sorted.map((team, index) => {
        const pts = (team.wins * 3) + team.draws;
        const sg = (team.goalsFor || 0) - (team.goalsAgainst || 0);

        return (
          <article key={team.id || team.name} className="standing-card">
            <div className="standing-main">
              <strong>{index + 1}º</strong>

              <div className="standing-logo">
                {team.logo ? <img src={team.logo} alt={team.name} /> : <Shield size={24} />}
              </div>

              <h3>{team.name}</h3>
              <b>{pts}</b>
            </div>

            <div className="standing-stats">
              <span>V {team.wins || 0}</span>
              <span>E {team.draws || 0}</span>
              <span>D {team.losses || 0}</span>
              <span>GP {team.goalsFor || 0}</span>
              <span>SG {sg}</span>
            </div>
          </article>
        );
      })}
    </section>
  );
}
