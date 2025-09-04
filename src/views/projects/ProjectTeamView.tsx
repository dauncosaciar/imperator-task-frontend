import { useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Undo2, UserRoundPlus } from "lucide-react";
import AddMemberModal from "@/components/team/AddMemberModal";
import MembersList from "@/components/team/MembersList";
import Spinner from "@/components/ui/Spinner";
import BasicMessage from "@/components/ui/BasicMessage";
import { getProjectTeam } from "@/api/TeamApi";
import { changeDocumentTitle } from "@/utils";

export default function ProjectTeamView() {
  const navigate = useNavigate();
  const params = useParams();
  const projectId = params.projectId!;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["projectTeam", projectId],
    queryFn: () => getProjectTeam(projectId),
    refetchOnWindowFocus: false,
    retry: false
  });

  useEffect(() => {
    if (data) {
      const documentTitle = `Colaboradores del Proyecto: ${data.projectName}`;
      changeDocumentTitle(documentTitle);
    }
  }, [data]);

  if (isLoading) return <Spinner spinnerText="Recuperando datos" />;

  if (isError) return <Navigate to="/404" />;

  if (data)
    return (
      <div className="project-team-view">
        <h1 className="project-team-view__heading">
          Colaboradores del Proyecto: <span>{data.projectName}</span>
        </h1>
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

        {data.team.length ? (
          <MembersList team={data.team} />
        ) : (
          <BasicMessage>Este Proyecto aún no tiene Colaboradores.</BasicMessage>
        )}

        <AddMemberModal />
      </div>
    );
}
