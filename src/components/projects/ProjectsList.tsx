import { Link } from "react-router-dom";
import { FolderInput, Pencil, Trash } from "lucide-react";
import { DashboardProject } from "@/types";
import Tooltip from "../ui/Tooltip";

type ProjectsListProps = {
  data: DashboardProject;
};

export default function ProjectsList({ data }: ProjectsListProps) {
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
              <a href="#" className="project__option project__option--delete">
                <Trash />
              </a>
            </Tooltip>
          </div>
        </div>
      ))}
    </div>
  );
}
