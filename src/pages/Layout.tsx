import { Outlet } from "react-router-dom";
import NavBar from "../components/features/NavBar";

const Layout = () => {
  return (
    <div className="font-inter min-h-dvh w-full flex flex-col md:flex-row">
      <NavBar title="My Applications " />
      <Outlet />
    </div>
  );
};

export default Layout;
