import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "@/api/ProjectApi";
import Spinner from "@/components/ui/Spinner";
import { changeDocumentTitle } from "@/utils";

export default function EditProjectView() {
  const params = useParams();
  const projectId = params.projectId!;

  const { data, isFetching, isError } = useQuery({
    queryKey: ["editProject", projectId],
    queryFn: () => getProjectById(projectId),
    refetchOnWindowFocus: false,
    retry: false
  });

  console.log("data:", data);
  console.log("isFetching:", isFetching);
  console.log("isError:", isError);

  useEffect(() => {
    if (data) {
      const documentTitle = `Editar Proyecto: ${data.projectName}`;
      changeDocumentTitle(documentTitle);
    }
  }, [data]);

  if (isFetching) return <Spinner />;

  return <div>EditProjectView</div>;
}
