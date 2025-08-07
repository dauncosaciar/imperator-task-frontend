import { User } from "@/types";
import { getUserInitialsUppercase } from "@/utils";

type UserInitialsProps = {
  user: User;
};

export default function UserInitials({ user }: UserInitialsProps) {
  const userInitials = getUserInitialsUppercase(user.name, user.lastName);

  return (
    <div className="user-initials">
      <span className="user-initials__circle">{userInitials}</span>
    </div>
  );
}
