export default function AdminDashboard() {
  return (
    <main className="admin">
      <aside>
        <h2>Painel Admin</h2>
        <p>Times</p><p>Jogadores</p><p>Jogos</p><p>Artilharia</p><p>Árbitros</p><p>Patrocinadores</p>
      </aside>
      <section>
        <h1>Controle do Campeonato</h1>
        <div className="admin-grid">
          <div>➕ Cadastrar time</div>
          <div>👤 Cadastrar jogador</div>
          <div>⚽ Criar jogo</div>
          <div>🏆 Atualizar artilharia</div>
        </div>
        <p className="note">Na próxima parte colocamos Firebase para salvar tudo de verdade.</p>
      </section>
    </main>
  );
}
