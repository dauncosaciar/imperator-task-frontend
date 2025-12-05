import { Link, useLocation } from "react-router-dom";
import { FolderKanban } from "lucide-react";

type NavProps = {
  onNavigate?: () => void;
};

export default function Nav({ onNavigate }: NavProps) {
  const location = useLocation();
  const isActive = location.pathname === "/";

  return (
    <nav className="nav">
      <Link
        className={`nav__link${isActive ? " active" : ""}`}
        to="/"
        onClick={onNavigate}
      >
        <FolderKanban size={20} />
        <span>Mis Proyectos</span>
      </Link>
    </nav>
  );
}
