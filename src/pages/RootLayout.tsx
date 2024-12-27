import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";

const RootLayout = () => {
  return (
    <>
      <Nav />
      <div className="flex">
        <Outlet />
      </div>
    </>
  );
};
export default RootLayout;
