export default function ManageScorers() {
  return (
    <section className="admin-card">
      <h2>Gerenciar Artilharia</h2>
      <form>
        <input placeholder="Nome do jogador" />
        <input placeholder="Time" />
        <input placeholder="Quantidade de gols" type="number" />
        <button type="button">Salvar artilheiro</button>
      </form>
    </section>
  );
}
