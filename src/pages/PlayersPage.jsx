import PlayerCard from "../components/PlayerCard";

const players = [
  { id: 1, name: "Jogador Exemplo", position: "Atacante", number: 9, photo: "" }
];

export default function PlayersPage() {
  return (
    <main className="page">
      <section className="page-hero">
        <h1>Jogadores</h1>
        <p>Lista de atletas cadastrados na competição.</p>
      </section>
      <div className="grid">
        {players.map(p => <PlayerCard key={p.id} player={p} team={{name:"Time da Casa"}} />)}
      </div>
    </main>
  );
}
