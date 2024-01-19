import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import * as _ from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<_.Home />} path="" />
        </Route>
        <Route element={<Layout back />} path="/">
          <Route element={<_.Search />} path="search" />
          <Route element={<_.Follow />} path="follow" />
          <Route element={<_.Settings />} path="settings" />
        </Route>
        <Route element={<_.Write />} path="write" />
      </Routes>
    </BrowserRouter>
  );
}
