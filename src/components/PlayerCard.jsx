export default function PlayerCard({ player = {}, team = {} }) {
  return (
    <article className="player-card-pro">
      <div className="player-photo">
        {player.photo ? <img src={player.photo} alt={player.name} /> : <span>👤</span>}
      </div>

      <div className="player-info">
        <h2>{player.name || "Jogador"}</h2>
        <p>{team?.name || "Time"}</p>
      </div>

      <div className="player-bottom">
        <strong>{player.position || "Posição"}</strong>
        <span>Nº {player.number || "--"}</span>
      </div>
    </article>
  );
}
