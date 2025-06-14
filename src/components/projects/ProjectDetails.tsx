import { useLocation, useNavigate } from "react-router-dom";
import { ListFilterPlus } from "lucide-react";
import TasksList from "../tasks/TasksList";
import AddTaskModal from "../tasks/AddTaskModal";
import EditTaskData from "../tasks/EditTaskData";
import TaskDetailsModal from "../tasks/TaskDetailsModal";

export default function ProjectDetails({ data }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="project-details">
      <h1 className="project-details__heading">
        Proyecto: <span>{data.projectName}</span>
      </h1>
      <p className="project-details__description">{data.description}</p>

      <nav className="project-details__nav">
        <button
          type="button"
          className="project-details__nav-link"
          onClick={() => navigate(location.pathname + "?newTask=true")}
        >
          <ListFilterPlus /> Agregar Tarea
        </button>
      </nav>

      <TasksList tasks={data.tasks} />

      <AddTaskModal />
      <EditTaskData />
      <TaskDetailsModal />
    </div>
  );
}
