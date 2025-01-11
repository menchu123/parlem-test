import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ParlemDirectory from "./parlemDirectory.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ParlemDirectory />
  </StrictMode>
);
