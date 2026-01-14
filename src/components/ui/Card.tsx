import useIsMobile from "../../hooks/useIsMobile";
import dropdown from "../../assets/icons/dropdown.svg";

type Status = {
  name: "Rejected" | "Applied" | "Interview" | "Offer";
  color: string;
};

interface Props {
  company: string;
  title: string;
  date: Date;
  status: Status;
}

const Card = ({ company, title, date, status }: Props) => {
  const isMobile: boolean = useIsMobile();

  return (
    <div className="rounded-sm shadow-md shadow-gray-300 p-4 h-fit">
      <div className="flex justify-between items-start w-60 mb-2 md:w-80">
        <div className="flex gap-1 flex-col md:flex-row md:items-center md:gap-4">
          <h3 className="tracking-tight text-accent text-xl font-bold md:text-2xl">
            {company}
          </h3>
          <h4 className="tracking-tight text-sm md:text-base font-medium">
            {title}
          </h4>
        </div>
        <button aria-label="further card options">
          <img
            className="w-7 hover:translate-y-1 transition-transform duration-300 cursor-pointer ease-out"
            src={dropdown}
            alt=""
          />
        </button>
      </div>
      <div className="flex items-center justify-between md:justify-start">
        <span
          className={`${status.color} px-2.5 py-0.5 text-sm font-semibold md:bg-transparent flex items-center gap-2 md:order-1`}
        >
          {!isMobile && (
            <div className={`h-2.5 w-2.5 ${status.color} rounded-full`}></div>
          )}
          {status.name}
        </span>
        <span className="font-medium">
          {date.toLocaleString("default", { month: "short" })} {date.getDate()}
        </span>
      </div>
    </div>
  );
};

export default Card;
