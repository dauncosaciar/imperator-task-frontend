import { useNavigate } from "react-router-dom";
import { ListFilterPlus } from "lucide-react";

export default function ProjectDetails({ data }) {
  const navigate = useNavigate();

  return (
    <div className="project-details">
      <h1 className="project-details__heading">
        Proyecto: <span>{data.projectName}</span>
      </h1>
      <p className="project-details__description">{data.description}</p>

      <nav className="project-details__nav">
        <button
          type="button"
          className="project-details__nav-link"
          onClick={() => navigate("?newTask=true")}
        >
          <ListFilterPlus /> Agregar Tarea
        </button>
      </nav>
    </div>
  );
}
