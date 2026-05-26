import { Link } from "react-router-dom";
import { Shield, MapPin, ArrowRight } from "lucide-react";

export default function TeamCard({ team = {} }) {
  return (
    <Link to={`/times/${team.id}`} className="team-card-pro">
      <div className="team-card-logo">
        {team.logo ? <img src={team.logo} alt={team.name} /> : <Shield size={46} />}
      </div>

      <div className="team-card-info">
        <h2>{team.name || "Nome do Time"}</h2>
        <p><MapPin size={15} /> {team.city || team.bairro || "Bairro/Cidade"}</p>
      </div>

      <span className="team-card-action">
        Ver detalhes <ArrowRight size={16} />
      </span>
    </Link>
  );
}
