import { useParams } from "react-router-dom";

export default function TeamDetailsPage() {
  const { id } = useParams();

  return (
    <main className="page">
      <h1>Detalhes do Time #{id}</h1>
      <p>Aqui aparecerá escudo, elenco, jogos, estatísticas e fotos do time.</p>
    </main>
  );
}
