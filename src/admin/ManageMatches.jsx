export default function ManageMatches() {
  return (
    <section className="admin-card">
      <h2>Gerenciar Jogos</h2>
      <form>
        <input placeholder="Fase. Ex: Semifinal" />
        <input placeholder="Time A" />
        <input placeholder="Time B" />
        <input placeholder="Data" />
        <input placeholder="Horário" />
        <input placeholder="Local" />
        <button type="button">Salvar jogo</button>
      </form>
    </section>
  );
}
