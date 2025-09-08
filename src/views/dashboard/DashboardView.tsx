import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FolderPlus, TextSelect } from "lucide-react";
import { getProjects } from "@/api/ProjectApi";
import BasicMessage from "@/components/ui/BasicMessage";
import Spinner from "@/components/ui/Spinner";
import ProjectsList from "@/components/projects/ProjectsList";
import { changeDocumentTitle } from "@/utils";

export default function DashboardView() {
  const { data, isFetching } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    refetchOnWindowFocus: false
  });

  useEffect(() => {
    changeDocumentTitle("Mis Proyectos");
  }, []);

  if (isFetching) return <Spinner spinnerText="Recuperando tus proyectos" />;

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
          <BasicMessage
            messageIcon={TextSelect}
            messageTitle="No tienes Proyectos cargados"
            messageDescription="Crea los tuyos o pide a un Mánager que te agregue como Colaborador de los suyos para que los veas listados aquí."
          />
        )}
      </div>
    );
}
