import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FolderPlus } from "lucide-react";
import { getProjects } from "@/api/ProjectApi";
import BasicMessage from "@/components/ui/BasicMessage";
import ProjectsList from "@/components/projects/ProjectsList";

export default function DashboardView() {
  const { data, isFetching } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    refetchOnWindowFocus: false
  });

  if (isFetching) return <p>Cargando...</p>;

  if (data)
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

        {data.length ? (
          <ProjectsList data={data} />
        ) : (
          <BasicMessage>
            Aún no tienes Proyectos cargados por aquí.
          </BasicMessage>
        )}
      </div>
    );
}
