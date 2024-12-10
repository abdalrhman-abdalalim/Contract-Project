import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../pages";
import RootLayout from "../pages/RootLayout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
    </>
  )
);

export default router;
