import { Outlet } from "react-router-dom";
import ProfileHeader from "@/components/profile/ProfileHeader";

export default function ProfileLayout() {
  return (
    <div className="profile-layout">
      <h1 className="profile-layout__heading">Mi Perfil</h1>

      <div className="profile-layout__content">
        <ProfileHeader />
        <Outlet />
      </div>
    </div>
  );
}
