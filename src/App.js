import { CookiesProvider } from "react-cookie";
import Router from "./router/Router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <Router />
      </CookiesProvider>
    </QueryClientProvider>
  );
}

export default App;
