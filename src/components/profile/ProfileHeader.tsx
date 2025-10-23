import UserInitials from "../ui/UserInitials";

export default function ProfileHeader() {
  // TODO: hardcoded user, replace with dynamic info later
  const user = {
    _id: "68869fa7a1192a9e62f1360c",
    email: "isa.dina@roma.com",
    lastName: "Dina",
    name: "Isa"
  };

  return (
    <div className="profile-header">
      <div className="profile-header__card">
        <div className="profile-header__card-image" />

        <div className="profile-header__card-info">
          <div className="profile-header__card-user">
            <UserInitials user={user} />

            <h4 className="profile-header__card-user-name">
              {user.name}, {user.lastName}
              <span className="profile-header__card-user-email">
                {user.email}
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
