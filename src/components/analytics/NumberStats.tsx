import StatBox from "./StatBox";
import notepad from "../../assets/images/notepad.png";
import interview from "../../assets/images/interview.png";
import offer from "../../assets/images/offer.png";
import rejected from "../../assets/images/rejected.webp";
import useData from "../../hooks/useData";

const NumberStats = () => {
  const { data } = useData();

  function dataLength(label: string): number {
    return data.filter((d) => d.label === label).length;
  }

  return (
    <div className="grid grid-cols-2  lg:grid-cols-4 gap-4 max-w-360 mx-auto">
      <StatBox
        count={data.length}
        description="Total Applications"
        logo={notepad}
      />
      <StatBox
        count={dataLength("Interview")}
        description="Interviews"
        logo={interview}
      />
      <StatBox count={dataLength("Offer")} description="Offers" logo={offer} />
      <StatBox
        count={dataLength("Rejected")}
        description="Rejected"
        logo={rejected}
      />
    </div>
  );
};

export default NumberStats;
