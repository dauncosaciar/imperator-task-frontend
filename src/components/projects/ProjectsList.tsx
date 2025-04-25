import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FolderInput, Pencil, Trash } from "lucide-react";
import { toast } from "sonner";
import { DashboardProject } from "@/types";
import { deleteProject } from "@/api/ProjectApi";
import Tooltip from "../ui/Tooltip";

type ProjectsListProps = {
  data: DashboardProject;
};

export default function ProjectsList({ data }: ProjectsListProps) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteProject,
    onError: error => {
      toast.error(error.message);
    },
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast.success(data);
    }
  });

  return (
    <div className="projects-list">
      {data.map(project => (
        <div key={project._id} className="project">
          <div className="project__content">
            <h4 className="project__heading">
              <a href="#" className="project__link">
                {project.projectName}
              </a>
            </h4>
            <p className="project__client">
              Cliente: <span>{project.clientName}</span>
            </p>
            <p className="project__description">{project.description}</p>
          </div>

          <div className="project__options">
            <Tooltip tooltipText="Ver Proyecto">
              <a href="#" className="project__option">
                <FolderInput />
              </a>
            </Tooltip>

            <Tooltip tooltipText="Editar Proyecto">
              <Link
                to={`/projects/${project._id}/edit`}
                className="project__option"
              >
                <Pencil />
              </Link>
            </Tooltip>

            <Tooltip tooltipText="Eliminar Proyecto">
              <button
                type="button"
                className="project__option project__option--delete"
                onClick={() => mutate(project._id)}
              >
                <Trash />
              </button>
            </Tooltip>
          </div>
        </div>
      ))}
    </div>
  );
}
