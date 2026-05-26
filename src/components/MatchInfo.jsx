import { Calendar, Clock, MapPin } from "lucide-react";

export default function MatchInfo({ date = "18 DE MAIO", time = "20:00", place = "CAMPO DO MORRO" }) {
  return (
    <section className="match-info-pro">
      <div><Calendar size={19} /><strong>{date}</strong></div>
      <div><Clock size={19} /><strong>{time}</strong></div>
      <div><MapPin size={19} /><strong>{place}</strong></div>
    </section>
  );
}
