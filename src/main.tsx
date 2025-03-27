import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/app.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1 className="text-center">ImperatorTask</h1>
  </StrictMode>
);
