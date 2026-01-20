import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/features/NavBar";

const Layout = () => {
  const location = useLocation();

  console.log(location);

  const pathName = location.pathname.endsWith("/")
    ? "My Applications"
    : location.pathname.slice(1).charAt(0).toUpperCase() +
      location.pathname.slice(2);

  return (
    <div className="font-inter min-h-dvh w-full flex flex-col md:flex-row">
      <NavBar title={pathName} />
      <Outlet />
    </div>
  );
};

export default Layout;
