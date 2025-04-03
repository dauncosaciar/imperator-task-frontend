import { Dispatch, SetStateAction } from "react";
import { Box, Drawer, Portal } from "@chakra-ui/react";
import Nav from "./Nav";
import Logo from "./Logo";

type SidebarProps = {
  isMobile: boolean;
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
};

export default function Sidebar({
  isMobile,
  openDrawer,
  setOpenDrawer
}: SidebarProps) {
  return (
    <div className="sidebar">
      {isMobile ? (
        <Drawer.Root
          placement="start"
          size="sm"
          open={openDrawer}
          onOpenChange={e => setOpenDrawer(e.open)}
        >
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.Header>
                  <Logo />
                </Drawer.Header>
                <Drawer.Body>
                  <Nav />
                </Drawer.Body>
                <Drawer.CloseTrigger asChild>
                  <button type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-x-icon lucide-x"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      ) : (
        <Box
          className="sidebar__box"
          position="fixed"
          left="0"
          top="0"
          h="100vh"
          w="25rem"
          bg="white"
          p={8}
        >
          <Logo />
          <Nav />
        </Box>
      )}
    </div>
  );
}
