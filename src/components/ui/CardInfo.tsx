import type Data from "../../Entities/Data";
import useTheme from "../../hooks/useTheme";

interface Props {
  data: Data;
}

const CardInfo = ({ data }: Props) => {
  const { theme } = useTheme();
  const formattedDate: string = new Date(`${data.date}`).toLocaleString(
    "en-US",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    },
  );

  return (
    <div
      className={`w-100  ${theme === "dark" ? "bg-dark-primary shadow-gray-950" : "bg-primary shadow-gray-300"} rounded-lg shadow-md p-6`}
    >
      <h1 className="border-b border-gray-400 text-4xl font-semibold text-blue-400 pb-2 mb-4">
        {data.company}
      </h1>
      <h2
        className={`border-b border-gray-300 text-lg  pb-2 mb-4 font-semibold ${theme === "dark" ? "text-dark-text " : "text-text"} `}
      >
        Position:{" "}
        <span
          className={`ml-2 font-semibold ${theme === "dark" ? "text-white " : "text-black"}`}
        >
          {data.position}
        </span>
      </h2>
      <h2
        className={`border-b border-gray-300 text-lg  pb-2 mb-4 font-semibold ${theme === "dark" ? "text-dark-text " : "text-text"}`}
      >
        Date:{" "}
        <span
          className={`ml-2 font-semibold ${theme === "dark" ? "text-white " : "text-black"}`}
        >
          {formattedDate}
        </span>
      </h2>
      <div
        className={`border-b border-gray-300 text-md  pb-2 mb-4 font-semibold ${theme === "dark" ? "text-dark-text " : "text-text"}`}
      >
        Status:{" "}
        <span className="bg-orange-500 text-white rounded-full text-center w-fit px-4 py-1 font-semibold ml-4">
          {data.label}
        </span>
      </div>
      <p
        className={`0 text-md  pb-2 mb-4 font-semibold ${theme === "dark" ? "text-dark-text " : "text-text"}`}
      >
        Notes: <br />
        <span
          className={`font-semibold ${theme === "dark" ? "text-white " : "text-black"} `}
        >
          {data.notes || "No notes..."}
        </span>
      </p>
    </div>
  );
};

export default CardInfo;
