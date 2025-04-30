import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "@/api/ProjectApi";
import Spinner from "@/components/ui/Spinner";
import { changeDocumentTitle } from "@/utils";
import ProjectDetails from "@/components/projects/ProjectDetails";

export default function ProjectDetailsView() {
  const params = useParams();
  const projectId = params.projectId!;

  const { data, isFetching, isError } = useQuery({
    queryKey: ["editProject", projectId],
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

  if (isFetching) return <Spinner />;

  if (isError) return <Navigate to="/404" />;

  if (data) return <ProjectDetails data={data} />;
}
