import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useBreakpointValue } from "@chakra-ui/react";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";

export default function AppLayout() {
  const isMobile = useBreakpointValue({ base: true, md: false })!;
  const [openDrawer, setOpenDrawer] = useState(false);

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
    </div>
  );
}
