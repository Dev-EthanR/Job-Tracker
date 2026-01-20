import BarGraph from "../components/analytics/BarGraph";
import NumberStats from "../components/analytics/NumberStats";
import useTheme from "../hooks/useTheme";

const Analytics = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full px-4 py-5 ${theme === "dark" ? "bg-dark-primary text-dark-text" : "bg-white"}`}
    >
      <h1 className="text-3xl font-bold mb-8 hidden md:block">Analytics</h1>
      <main className="flex flex-col items-center gap-12">
        <NumberStats />
        <BarGraph />
      </main>
    </div>
  );
};

export default Analytics;
