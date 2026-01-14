import {
  createContext,
  useState,
  type SetStateAction,
  type Dispatch,
} from "react";
import plus from "../../assets/icons/plus.svg";
import useIsMobile from "../../hooks/useIsMobile";
import AddModal from "./AddModal";

interface modalContext {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const AddModalCtx = createContext<modalContext | null>(null);

const Header = () => {
  const isMobile: boolean = useIsMobile();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <AddModalCtx.Provider value={{ modalOpen, setModalOpen }}>
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
          className={` ${
            isMobile
              ? "absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full"
              : "rounded-lg"
          } flex items-center justify-center w-60 py-3 text-xl font-medium bg-accent text-white hover:brightness-115 cursor-pointer`}
          onClick={() => setModalOpen(true)}
        >
          <img className="w-8 filter brightness-0 invert" src={plus} alt="" />
          Add Appplication
        </button>
        <AddModal />
      </header>
    </AddModalCtx.Provider>
  );
};

export default Header;
