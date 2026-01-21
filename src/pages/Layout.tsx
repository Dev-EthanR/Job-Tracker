import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/features/NavBar";

const Layout = () => {
  const location = useLocation();

  function getPathName(): string {
    if (location.pathname.endsWith("/")) return "My Applications";
    if (location.pathname.startsWith("/application/"))
      return "Application Details";
    return (
      location.pathname.slice(1).charAt(0).toUpperCase() +
      location.pathname.slice(2)
    );
  }

  return (
    <div className="font-inter min-h-dvh w-full flex flex-col md:flex-row">
      <NavBar title={getPathName()} />
      <Outlet />
    </div>
  );
};

export default Layout;
