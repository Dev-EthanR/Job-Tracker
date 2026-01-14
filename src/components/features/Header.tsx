import plus from "../../assets/icons/plus.svg";
import useIsMobile from "../../hooks/useIsMobile";

const Header = () => {
  const isMobile: boolean = useIsMobile();
  return (
    <header className="w-full flex justify-between items-start p-4 px-8">
      <div className="flex">
        <input type="text" placeholder="Search..." />
        <select>
          <option defaultValue="" selected hidden>
            Filters
          </option>
          <option>Offer</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>Rejected</option>
        </select>
      </div>
      <button
        className={`rounded-lg ${
          isMobile && "absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full"
        } flex items-center justify-center w-60 py-3 text-xl font-medium bg-accent text-white hover:brightness-115 cursor-pointer`}
      >
        <img className="w-8 filter brightness-0 invert" src={plus} alt="" />
        Add Appplication
      </button>
    </header>
  );
};

export default Header;
