import { Link, useNavigate, useParams } from "react-router-dom";
import { Undo2, UserRoundPlus } from "lucide-react";
import AddMemberModal from "@/components/team/AddMemberModal";

export default function ProjectTeamView() {
  const navigate = useNavigate();
  const params = useParams();
  const projectId = params.projectId!;

  return (
    <div className="project-team-view">
      <h1 className="project-team-view__heading">Administrar Equipo</h1>
      <p className="project-team-view__description">
        Gestiona el equipo de trabajo de este Proyecto.
      </p>

      <nav className="project-team-view__nav">
        <button
          type="button"
          className="project-team-view__nav-link"
          onClick={() => navigate(location.pathname + "?newMember=true")}
        >
          <UserRoundPlus /> Agregar Colaborador
        </button>

        <Link
          className="project-team-view__nav-link project-team-view__nav-link--secondary"
          to={`/projects/${projectId}`}
        >
          <Undo2 /> Volver al Proyecto
        </Link>
      </nav>

      <AddMemberModal />
    </div>
  );
}
