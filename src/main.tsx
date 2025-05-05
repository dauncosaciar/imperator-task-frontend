import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider as ChakraProvider } from "@/components/chakra-ui/provider";
import { LightMode } from "@/components/chakra-ui/color-mode";
import Router from "./router";
import "./styles/main.scss";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <LightMode>
          <Router />
          <ReactQueryDevtools />
        </LightMode>
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>
);
