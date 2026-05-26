import { CalendarDays, Clock, MapPin } from "lucide-react";

export default function MatchCard({ match = {}, home = {}, away = {} }) {
  return (
    <article className="match-card-pro">
      <span className="match-stage">{match.stage || "Próximo jogo"}</span>

      <div className="match-card-teams">
        <div>
          <strong>{home?.name || "Time A"}</strong>
          <small>Mandante</small>
        </div>

        <b>VS</b>

        <div>
          <strong>{away?.name || "Time B"}</strong>
          <small>Visitante</small>
        </div>
      </div>

      <div className="match-card-info">
        <span><CalendarDays size={16} /> {match.date || "Data"}</span>
        <span><Clock size={16} /> {match.time || "Horário"}</span>
        <span><MapPin size={16} /> {match.place || "Local"}</span>
      </div>
    </article>
  );
}
