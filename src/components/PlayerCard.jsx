export default function PlayerCard({ player, team }) {
  return (
    <div className="card player-card">
      {player.photo ? <img src={player.photo} alt={player.name} /> : <div className="avatar">👤</div>}
      <h2>{player.name}</h2>
      <p>{team?.name}</p>
      <strong>{player.position} • Nº {player.number}</strong>
    </div>
  );
}
