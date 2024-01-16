import { CookiesProvider } from "react-cookie";
import Router from "./router/Router";

function App() {
  return (
    <CookiesProvider>
      <Router />
    </CookiesProvider>
  );
}

export default App;
