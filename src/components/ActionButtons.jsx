import { Users, BarChart3, Share2, Trophy } from "lucide-react";
import confetti from "canvas-confetti";
import { Link } from "react-router-dom";

export default function ActionButtons() {
  const startConfetti = () => {
    confetti({ particleCount: 180, spread: 90, origin: { y: 0.7 } });
  };

  return (
    <div className="action-buttons-pro">
      <Link to="/times"><Users size={19} /> Escalações</Link>
      <Link to="/classificacao"><BarChart3 size={19} /> Classificação</Link>
      <button type="button"><Share2 size={19} /> Compartilhar</button>
      <Link to="/artilharia" onClick={startConfetti}><Trophy size={19} /> Artilharia</Link>
    </div>
  );
}
