import { createContext, useState, type ChangeEvent } from "react";
import plus from "../../assets/icons/plus.svg";
import AddModal from "./AddModal";
import useTheme from "../../hooks/useTheme";

interface modalContext {
  modalOpen: boolean;
  setModalOpen: (toggle: boolean) => void;
}

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const AddModalCtx = createContext<modalContext | null>(null);

const Header = ({ value, setValue }: Props) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { theme } = useTheme();

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setValue(event.target.value);
  };

  return (
    <AddModalCtx.Provider value={{ modalOpen, setModalOpen }}>
      <header
        className={`w-full flex justify-between items-start p-4 px-8 ${theme === "dark" ? "bg-[#2f3c54] text-dark-text" : "bg-[#e6e3e3] text-text"} `}
      >
        <div className="flex items-center gap-5 ">
          <h1 className="text-3xl font-bold invisible  md:visible">
            My Applications
          </h1>
          <div>
            <select
              onChange={handleSelectChange}
              value={value}
              aria-label="filter"
              className={`text-blue-500 `}
            >
              <option defaultValue="all" hidden>
                Filters
              </option>
              <option value="all">All</option>
              <option value="offer">Offer</option>
              <option value="applied">Applied</option>
              <option value="interview">Interview</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
        <button
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-10 rounded-full  md:static  md:translate-x-0 md:rounded-lg flex items-center justify-center w-60 py-3 text-xl font-medium bg-accent text-white hover:brightness-115 cursor-pointer select-none"
          onClick={() => setModalOpen(true)}
        >
          <img className="w-8 filter brightness-0 invert" src={plus} alt="" />
          Add Application
        </button>
        <AddModal />
      </header>
    </AddModalCtx.Provider>
  );
};

export default Header;
