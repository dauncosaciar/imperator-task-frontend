import { Toaster } from "sonner";

export default function Notification() {
  return (
    <Toaster
      className="notification"
      position="bottom-center"
      richColors
      closeButton
      toastOptions={{
        style: {
          fontFamily: "Lato, sans-serif",
          fontSize: "1.6rem",
          borderWidth: "0.2rem"
        }
      }}
      duration={6000}
    />
  );
}
