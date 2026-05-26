import { Users, BarChart3, Share2, Trophy } from "lucide-react";
import confetti from "canvas-confetti";

export default function ActionButtons() {
  const startConfetti = () => {
    confetti({
      particleCount: 220,
      spread: 100,
      origin: { y: 0.65 },
    });
  };

  return (
    <div className="buttons">
      <button>
        <Users size={22} /> Ver escalações
      </button>

      <button>
        <BarChart3 size={22} /> Classificação
      </button>

      <button>
        <Share2 size={22} /> Compartilhar
      </button>

      <button onClick={startConfetti}>
        <Trophy size={22} /> Artilharia
      </button>
    </div>
  );
}