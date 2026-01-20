import { Link, useLocation } from "react-router-dom";
import CardInfo from "../components/ui/CardInfo";
import useTheme from "../hooks/useTheme";

const CardDetails = () => {
  const location = useLocation();
  const { theme } = useTheme();
  return (
    <main
      className={`w-full ${theme === "dark" ? "bg-dark-primary text-dark-text" : "bg-white"}  overflow-hidden p-8`}
    >
      <Link
        to="/"
        className=" rounded-lg flex items-center justify-center w-30 py-3 text-xl font-medium bg-accent text-white hover:brightness-115 cursor-pointer select-none"
      >
        Go Back
      </Link>
      <div className="flex justify-center items-center h-full">
        <CardInfo data={location.state.cardData} />
      </div>
    </main>
  );
};

export default CardDetails;
