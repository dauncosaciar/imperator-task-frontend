import { TeamMember } from "@/types";
import UserInitials from "../ui/UserInitials";

type MembersListProps = {
  team: TeamMember[];
};

export default function MembersList({ team }: MembersListProps) {
  console.log("team:", team);

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
          </div>
        ))}
      </div>
    </div>
  );
}
