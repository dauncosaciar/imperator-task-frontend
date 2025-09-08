import { Trash } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Project, TeamMember } from "@/types";
import UserInitials from "../ui/UserInitials";
import Tooltip from "../ui/Tooltip";
import { removeUserFromProject } from "@/api/TeamApi";

type MembersListProps = {
  projectId: Project["_id"];
  team: TeamMember[];
};

export default function MembersList({ projectId, team }: MembersListProps) {
  const { mutate } = useMutation({
    mutationFn: removeUserFromProject,
    onError: error => {
      toast.error(error.message);
    },
    onSuccess: data => {
      toast.success(data);
    }
  });

  return (
    <div className="members-list">
      <h2 className="members-list__heading">Miembros Actuales</h2>

      <div className="members-list__frame">
        {team.map(member => (
          <div key={member._id} className="member">
            <div className="member__content">
              <UserInitials user={member} />
              <div className="member__data">
                <h4 className="member__name">
                  {member.name}, {member.lastName}
                </h4>
                <p className="member__email">{member.email}</p>
              </div>
            </div>

            <div className="member__options">
              <Tooltip tooltipText="Eliminar Colaborador">
                <button
                  type="button"
                  className="member__option member__option--delete"
                  onClick={() => mutate({ projectId, userId: member._id })}
                >
                  <Trash />
                </button>
              </Tooltip>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
