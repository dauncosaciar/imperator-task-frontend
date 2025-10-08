import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "@/api/ProjectApi";
import Spinner from "@/components/ui/Spinner";
import { changeDocumentTitle } from "@/utils";
import ProjectDetails from "@/components/projects/ProjectDetails";
import { useAuth } from "@/hooks/useAuth";

export default function ProjectDetailsView() {
  const { data: user, isLoading: authLoading } = useAuth();
  const params = useParams();
  const projectId = params.projectId!;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => getProjectById(projectId),
    refetchOnWindowFocus: false,
    retry: false
  });

  useEffect(() => {
    if (data) {
      const documentTitle = `Detalles del Proyecto: ${data.projectName}`;
      changeDocumentTitle(documentTitle);
    }
  }, [data]);

  if (isLoading) return <Spinner spinnerText="Recuperando datos" />;

  if (isError) return <Navigate to="/404" />;

  if (data && user) return <ProjectDetails data={data} user={user} />;
}
