import { Outlet } from "react-router-dom";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileTabs from "@/components/profile/ProfileTabs";

export default function ProfileLayout() {
  return (
    <div className="profile-layout">
      <div className="profile-layout__content">
        <ProfileHeader />
        <ProfileTabs />
        <Outlet />
      </div>
    </div>
  );
}
