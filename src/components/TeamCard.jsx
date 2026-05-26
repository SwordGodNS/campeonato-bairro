import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

export default function TeamCard({ team }) {
  return (
    <Link to={`/times/${team.id}`} className="card team-card">
      {team.logo ? <img src={team.logo} alt={team.name} /> : <div className="empty"><Shield /> Sem escudo</div>}
      <h2>{team.name}</h2>
      <p>{team.city}</p>
    </Link>
  );
}
