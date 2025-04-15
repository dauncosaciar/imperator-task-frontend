import { FolderInput, Pencil, Trash } from "lucide-react";
import { DashboardProject } from "@/types";

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
            <a href="#" className="project__option">
              <FolderInput />
            </a>
            <a href="#" className="project__option">
              <Pencil />
            </a>
            <a href="#" className="project__option project__option--delete">
              <Trash />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
