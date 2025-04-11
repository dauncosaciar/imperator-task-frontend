import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ChakraProvider } from "@/components/chakra-ui/provider";
import Router from "./router";
import "./styles/main.scss";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>
);
