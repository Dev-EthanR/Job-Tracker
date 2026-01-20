import { NavLink } from "react-router-dom";
import menuClose from "../../assets/icons/menu-close.svg";
import menuOpen from "../../assets/icons/menu-open.svg";
import { useState, type JSX } from "react";
import useTheme from "../../hooks/useTheme";

interface Props {
  title: string;
}

const NavBar = ({ title }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const { theme } = useTheme();

  const navigations = (): JSX.Element => {
    return (
      <nav className={`flex gap-2 flex-col`}>
        <NavLink to="." end>
          My Applications
        </NavLink>
        <NavLink to="settings">Settings</NavLink>
        <NavLink to="analytics">Analytics</NavLink>
      </nav>
    );
  };

  return (
    <>
      <header
        className={`${theme === "dark" ? "bg-dark-secondary text-dark-text" : "bg-secondary"} w-full md:hidden`}
      >
        <div className="flex justify-between p-2 items-center ">
          <h1 className="text-2xl font-bold">{title}</h1>
          <button onClick={() => setOpen((prev) => !prev)}>
            <img
              className={`w-12 ${theme === "dark" && "invert"}`}
              src={open ? menuClose : menuOpen}
            />
          </button>
        </div>
        {open && <div className="text-center">{navigations()}</div>}
      </header>
      <div
        className={`${theme === "dark" ? "bg-dark-secondary text-dark-text" : "bg-secondary"}  w-40 h-screen sticky top-0 p-2 z-10 hidden md:block`}
      >
        {navigations()}
      </div>
    </>
  );
};

export default NavBar;
