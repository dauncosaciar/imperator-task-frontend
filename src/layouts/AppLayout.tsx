import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useBreakpointValue } from "@chakra-ui/react";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";
import Notification from "@/components/ui/Notification";
import Spinner from "@/components/ui/Spinner";
import { useAuth } from "@/hooks/useAuth";

export default function AppLayout() {
  const { data, isError, isLoading } = useAuth();
  const isMobile = useBreakpointValue({ base: true, md: false })!;
  const [openDrawer, setOpenDrawer] = useState(false);

  if (isLoading) return <Spinner />;

  if (isError) return <Navigate to="/auth/login" />;

  return (
    <div className="app-layout">
      <Header isMobile={isMobile} onOpen={() => setOpenDrawer(true)} />

      <div className="app-layout__sections">
        <Sidebar
          isMobile={isMobile}
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
        />

        <div className="app-layout__frame">
          <div className="app-layout__content">
            <Outlet />
          </div>
        </div>
      </div>

      <Notification />
    </div>
  );
}
