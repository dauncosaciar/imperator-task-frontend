import { Trash } from "lucide-react";
import { TeamMember } from "@/types";
import UserInitials from "../ui/UserInitials";
import Tooltip from "../ui/Tooltip";

type MembersListProps = {
  team: TeamMember[];
};

export default function MembersList({ team }: MembersListProps) {
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
