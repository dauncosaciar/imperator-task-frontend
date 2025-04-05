import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/chakra-ui/provider";
import Router from "./router";
import "./styles/main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Router />
    </Provider>
  </StrictMode>
);
