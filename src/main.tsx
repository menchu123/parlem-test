import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ParlemDirectory from "./parlemDirectory.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ParlemDirectory />
    </QueryClientProvider>
  </StrictMode>
);
