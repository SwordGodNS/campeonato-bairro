import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MatchPage from "./pages/MatchPage";
import TeamsPage from "./pages/TeamsPage";
import TeamDetailsPage from "./pages/TeamDetailsPage";
import PlayersPage from "./pages/PlayersPage";
import ClassificationPage from "./pages/ClassificationPage";
import TopScorersPage from "./pages/TopScorersPage";
import RefereesPage from "./pages/RefereesPage";
import SponsorsPage from "./pages/SponsorsPage";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/confronto" element={<MatchPage />} />
        <Route path="/times" element={<TeamsPage />} />
        <Route path="/times/:id" element={<TeamDetailsPage />} />
        <Route path="/jogadores" element={<PlayersPage />} />
        <Route path="/classificacao" element={<ClassificationPage />} />
        <Route path="/artilharia" element={<TopScorersPage />} />
        <Route path="/arbitros" element={<RefereesPage />} />
        <Route path="/patrocinadores" element={<SponsorsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}
