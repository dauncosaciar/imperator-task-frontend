import { useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ListFilterPlus, Users } from "lucide-react";
import TasksList from "../tasks/TasksList";
import AddTaskModal from "../tasks/AddTaskModal";
import EditTaskData from "../tasks/EditTaskData";
import TaskDetailsModal from "../tasks/TaskDetailsModal";
import { TeamMember } from "@/types";
import { isManager } from "@/utils/policies";

type ProjectDetailsProps = {
  user: TeamMember;
};

export default function ProjectDetails({ data, user }: ProjectDetailsProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const canEdit = useMemo(() => data?.manager === user?._id, [data, user]);

  console.log("canEdit:", canEdit);

  return (
    <div className="project-details">
      <h1 className="project-details__heading">
        Proyecto: <span>{data.projectName}</span>
      </h1>
      <p className="project-details__description">{data.description}</p>

      {isManager(data.manager, user._id) && (
        <nav className="project-details__nav">
          <button
            type="button"
            className="project-details__nav-link"
            onClick={() => navigate(location.pathname + "?newTask=true")}
          >
            <ListFilterPlus /> Agregar Tarea
          </button>

          <Link
            className="project-details__nav-link project-details__nav-link--secondary"
            to="team"
          >
            <Users /> Colaboradores
          </Link>
        </nav>
      )}

      <TasksList tasks={data.tasks} canEdit={canEdit} />

      <AddTaskModal />
      <EditTaskData />
      <TaskDetailsModal />
    </div>
  );
}
