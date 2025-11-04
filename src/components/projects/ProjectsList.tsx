import { DashboardProject, User } from "@/types";
import { isManager } from "@/utils/policies";
import { FolderInput, Pencil, Trash } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Tooltip from "../ui/Tooltip";
import DeleteProjectModal from "./DeleteProjectModal";

type ProjectsListProps = {
  data: DashboardProject;
  user: User;
};

export default function ProjectsList({ data, user }: ProjectsListProps) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="projects-list">
      {data.map(project => (
        <div key={project._id} className="project">
          <div className="project__content">
            <div className="project__user-role">
              <span
                className={`project__user-role-text project__user-role-text--${
                  isManager(project.manager, user._id) ? "manager" : "member"
                }`}
              >
                {isManager(project.manager, user._id)
                  ? "Manager"
                  : "Colaborador"}
              </span>
            </div>
            <h4 className="project__heading">
              <Link to={`/projects/${project._id}`} className="project__link">
                {project.projectName}
              </Link>
            </h4>
            <p className="project__client">
              Cliente: <span>{project.clientName}</span>
            </p>
            <p className="project__description">{project.description}</p>
          </div>

          <div className="project__options">
            <Tooltip tooltipText="Ver Proyecto">
              <Link to={`/projects/${project._id}`} className="project__option">
                <FolderInput />
              </Link>
            </Tooltip>

            {isManager(project.manager, user._id) && (
              <>
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
                    onClick={() =>
                      navigate(
                        location.pathname + `?deleteProject=${project._id}`
                      )
                    }
                  >
                    <Trash />
                  </button>
                </Tooltip>
              </>
            )}
          </div>
        </div>
      ))}

      <DeleteProjectModal />
    </div>
  );
}
