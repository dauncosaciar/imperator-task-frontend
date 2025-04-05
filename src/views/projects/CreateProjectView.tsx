import { Link } from "react-router-dom";
import { Undo2 } from "lucide-react";

export default function CreateProjectView() {
  return (
    <div className="create-project-view">
      <h1 className="create-project-view__heading">Crear Proyecto</h1>
      <p className="create-project-view__text">
        Completa el formulario y crea uno nuevo.
      </p>

      <nav className="create-project-view__nav">
        <Link className="create-project-view__nav-link" to="/">
          <Undo2 />
          Volver a Mis Proyectos
        </Link>
      </nav>
    </div>
  );
}
