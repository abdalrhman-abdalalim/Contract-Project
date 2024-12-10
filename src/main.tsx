import { createRoot } from "react-dom/client";
import { defaultSystem } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
defaultOptions: {
  queries: {
    refetchOnWindowFocus: false,
  },
},
});
createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    </QueryClientProvider>
);
