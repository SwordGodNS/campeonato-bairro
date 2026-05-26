export default function MatchCard({ match, home, away }) {
  return (
    <div className="card match-card">
      <small>{match.stage}</small>
      <h2>{home?.name || "Time A"} <span>VS</span> {away?.name || "Time B"}</h2>
      <p>{match.date} • {match.time} • {match.place}</p>
    </div>
  );
}
