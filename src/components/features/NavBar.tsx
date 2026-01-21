import { useState, type JSX } from "react";
import { NavLink } from "react-router-dom";
import menuClose from "../../assets/icons/menu-close.svg";
import menuOpen from "../../assets/icons/menu-open.svg";
import useAnimateHeight from "../../hooks/useAnimateHeight";
import usePreventScroll from "../../hooks/usePreventScroll";
import useTheme from "../../hooks/useTheme";

interface Props {
  title: string;
}

const NavBar = ({ title }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const { height, contentRef } = useAnimateHeight(open);

  const { theme } = useTheme();

  usePreventScroll(open);

  const navigations = (): JSX.Element => {
    return (
      <nav className={`flex gap-5 flex-col pt-18 h-screen `} id="nav">
        <NavLink
          to="."
          end
          className={`${theme === "dark" ? "hover:text-dark-hover" : "hover:text-hover"}`}
        >
          My Applications
        </NavLink>
        <NavLink
          to="analytics"
          className={`${theme === "dark" ? "hover:text-dark-hover" : "hover:text-hover"}`}
        >
          Analytics
        </NavLink>
        <NavLink
          to="settings"
          className={`${theme === "dark" ? "hover:text-dark-hover" : "hover:text-hover"}`}
        >
          Settings
        </NavLink>
      </nav>
    );
  };

  return (
    <>
      <header
        className={`${theme === "dark" ? "bg-dark-secondary text-dark-text" : "bg-secondary"} w-full md:hidden  z-100`}
      >
        <div className="flex justify-between p-2 items-center ">
          <h1 className="text-2xl font-bold">{title}</h1>
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-controls="nav"
            aria-expanded={open}
          >
            <img
              className={`w-12 ${theme === "dark" && "invert"} select-none`}
              src={open ? menuClose : menuOpen}
            />
          </button>
        </div>
        <div
          ref={(node) => {
            contentRef.current = node;
          }}
          style={{ height }}
          className="text-center overflow-hidden transition-[height] duration-300 ease-in-out"
        >
          {navigations()}
        </div>
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
