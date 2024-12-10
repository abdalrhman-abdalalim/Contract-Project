import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../pages";
import RootLayout from "../pages/RootLayout";
import OurServices from "../pages/OurServices";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/خدماتنا" element={<OurServices />} />
        <Route path="/من-نحن" element={<About />} />
        <Route path="/تواصل-معنا" element={<ContactUs />} />
        <Route path="article/:id" element={<ContactUs />} />
      </Route>
    </>
  )
);

export default router;
