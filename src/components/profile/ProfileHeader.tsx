import { useAuth } from "@/hooks/useAuth";
import UserInitials from "../ui/UserInitials";
import Spinner from "../ui/Spinner";

export default function ProfileHeader() {
  const { data, isLoading } = useAuth();

  if (isLoading) return <Spinner />;

  if (data)
    return (
      <div className="profile-header">
        <div className="profile-header__card">
          <div className="profile-header__card-image" />

          <div className="profile-header__card-info">
            <div className="profile-header__card-user">
              <UserInitials user={data} />

              <h4 className="profile-header__card-user-name">
                {data.name}, {data.lastName}
                <span className="profile-header__card-user-email">
                  {data.email}
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
}
