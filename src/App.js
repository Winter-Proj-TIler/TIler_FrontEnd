import { CookiesProvider } from "react-cookie";
import Router from "./router/Router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import useUser from "./hooks/useUser";
import { searchUser } from "./api/user";

const queryClient = new QueryClient();

function App() {
  const { add } = useUser();

  useEffect(() => {
    const userID = localStorage.getItem("userID");
    if (!!userID) {
      searchUser(userID).then((res) => {
        const { user } = res.data.data;
        add(user);
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <Router />
        <ToastContainer autoClose={1000} />
      </CookiesProvider>
    </QueryClientProvider>
  );
}

export default App;
