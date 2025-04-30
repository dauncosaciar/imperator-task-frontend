import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { Box, Drawer, Portal } from "@chakra-ui/react";
import { X } from "lucide-react";
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
                  <Link to="/">
                    <Logo />
                  </Link>
                </Drawer.Header>
                <Drawer.Body>
                  <Nav />
                </Drawer.Body>
                <Drawer.CloseTrigger asChild>
                  <button type="button">
                    <X />
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
          zIndex={2}
          left="0"
          top="0"
          h="100vh"
          w="25rem"
          bg="white"
          p={8}
        >
          <Link to="/">
            <Logo />
          </Link>
          <Nav />
        </Box>
      )}
    </div>
  );
}
