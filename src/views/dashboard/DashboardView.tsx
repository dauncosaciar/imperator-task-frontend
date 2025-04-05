import { Link } from "react-router-dom";
import { FolderPlus } from "lucide-react";

export default function DashboardView() {
  return (
    <div className="dashboard-view">
      <h1 className="dashboard-view__heading">Mis Proyectos</h1>
      <p className="dashboard-view__text">Crea proyectos y adminístralos.</p>

      <nav className="dashboard-view__nav">
        <Link className="dashboard-view__nav-link" to="/projects/create">
          <FolderPlus />
          Nuevo Proyecto
        </Link>
      </nav>
    </div>
  );
}
