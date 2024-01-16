import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as _ from "../pages";
import { Layout } from "./Layout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<_.Home />} path="/" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
