import { Link, useLocation } from "react-router-dom";
import { FolderKanban } from "lucide-react";

export default function Nav() {
  const location = useLocation();
  const isActive = location.pathname === "/";

  return (
    <nav className="nav">
      <Link className={`nav__link${isActive ? " active" : ""}`} to="/">
        <FolderKanban size={20} />
        <span>Mis Proyectos</span>
      </Link>
    </nav>
  );
}
