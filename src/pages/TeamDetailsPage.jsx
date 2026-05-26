import { useParams } from "react-router-dom";
import { Shield, Users, Trophy, Calendar } from "lucide-react";

export default function TeamDetailsPage() {
  const { id } = useParams();

  return (
    <main className="page">
      <section className="simple-card">
        <Shield size={54} />
        <h1>Detalhes do Time #{id}</h1>
        <p>Aqui aparecerá escudo, elenco, jogos, estatísticas e fotos do time.</p>

        <div className="quick-stats">
          <div><Users /><strong>18</strong><span>Jogadores</span></div>
          <div><Trophy /><strong>2</strong><span>Títulos</span></div>
          <div><Calendar /><strong>2018</strong><span>Desde</span></div>
        </div>
      </section>
    </main>
  );
}
