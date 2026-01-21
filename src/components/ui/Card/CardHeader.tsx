import { Link } from "react-router-dom";
import useTheme from "../../../hooks/useTheme";
import type Data from "../../../Entities/Data";

interface Props {
  cardData: Data;
}

const CardHeader = ({ cardData }: Props) => {
  const { theme } = useTheme();

  return (
    <div className="flex gap-1 flex-col md:flex-row md:items-center md:gap-x-5 flex-wrap">
      <Link to={`application/${cardData.id}`} state={{ cardData }}>
        <h3
          className={`tracking-tight  ${theme === "dark" ? "text-blue-400" : "text-accent"} text-xl font-bold md:text-3xl hover:cursor-pointer`}
          onPointerDown={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
        >
          {cardData.company}
        </h3>
      </Link>
      <h4
        className={`tracking-tight text-sm md:text-base font-medium  ${theme === "dark" ? "text-gray-100" : "text-gray-600"}`}
      >
        {cardData.position}
      </h4>
    </div>
  );
};

export default CardHeader;
