import { FolderKanban } from "lucide-react";

export default function Nav() {
  return (
    <nav className="nav">
      <a className="nav__link" href="#">
        <FolderKanban size={20} />
        <span>Mis Proyectos</span>
      </a>
      {/* <a className="nav__link active" href="#">
        <FolderKanban size={20} />
        <span>Mis Proyectos</span>
      </a> */}
    </nav>
  );
}
