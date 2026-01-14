import useIsMobile from "../../hooks/useIsMobile";
import menuClose from "../../assets/icons/menu-close.svg";
import menuOpen from "../../assets/icons/menu-open.svg";
import { useState, type JSX } from "react";

interface Props {
  title: string;
}

const NavBar = ({ title }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const isMobile: boolean = useIsMobile();

  const navigations = (): JSX.Element => {
    return (
      <nav className={`flex gap-2 flex-col`}>
        <a href="#">My Applications</a>
        <a href="#">Settings</a>
      </nav>
    );
  };

  if (isMobile)
    return (
      <header className="bg-primary w-full">
        <div className="flex justify-between p-2 items-center ">
          <h1 className="text-2xl font-bold">{title}</h1>
          <button onClick={() => setOpen((prev) => !prev)}>
            <img className="w-12" src={open ? menuClose : menuOpen} />
          </button>
        </div>
        {open && <div className="text-center">{navigations()}</div>}
      </header>
    );
  return (
    <div className="bg-primary w-40 h-screen sticky top-0 p-2 z-10">
      {navigations()}
    </div>
  );
};

export default NavBar;
