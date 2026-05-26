import ManageTeams from "../admin/ManageTeams";
import ManagePlayers from "../admin/ManagePlayers";
import ManageMatches from "../admin/ManageMatches";
import ManageScorers from "../admin/ManageScorers";
import ManageReferees from "../admin/ManageReferees";
import ManageSponsors from "../admin/ManageSponsors";

export default function AdminDashboard() {
  return (
    <main className="admin-page">
      <aside>
        <h2>Painel Admin</h2>
        <p>Controle tudo que aparece no site.</p>
      </aside>

      <section className="admin-content">
        <ManageTeams />
        <ManagePlayers />
        <ManageMatches />
        <ManageScorers />
        <ManageReferees />
        <ManageSponsors />
      </section>
    </main>
  );
}
