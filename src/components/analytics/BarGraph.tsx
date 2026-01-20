import type { ChartOptions } from "chart.js";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import useData from "../../hooks/useData";
import useTheme from "../../hooks/useTheme";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BarGraph = () => {
  const { data } = useData();
  const { theme } = useTheme();

  function dataLength(label: string): number {
    return data.filter((d) => d.label === label).length;
  }
  const labels = [...new Set(data.map((d) => d.label))];
  const newData = [
    dataLength("Applied"),
    dataLength("Interview"),
    dataLength("Offer"),
    dataLength("Rejected"),
  ];
  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        align: "start",
        labels: {
          boxWidth: 0,
          boxHeight: 0,
          font: {
            family: "Inter, system-ui, sans-serif",
            size: 20,
            weight: "bolder",
          },
          color: theme === "dark" ? "#cad2de" : "#31394e",
        },
      },
      tooltip: {
        callbacks: {
          title: () => "",
          label: (item) => `${labels[item.dataIndex]}: ${item.parsed.y}`,
        },
      },
    },
    animation: {
      delay: (context: any) => {
        if (context.type === "data" && context.mode === "default") {
          return context.dataIndex * 150;
        }
        return 0;
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
          stepSize: 1,
          color: theme === "dark" ? "#cad2de" : "#31394e",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      x: {
        ticks: {
          color: theme === "dark" ? "#cad2de" : "#31394e",
          font: {
            size: 16,
            weight: "bold",
          },
        },
      },
    },
  };
  const graphData = {
    labels,
    datasets: [
      {
        label: "Applications by status",
        data: newData,
        backgroundColor: [
          "rgba(230, 230, 239, 1)",
          "rgba(220, 235, 238, 1)",
          "rgba(245, 236, 226, 1)",
          "rgba(240, 221, 228, 1)",
        ],
      },
    ],
  };
  return (
    <Bar
      className={`max-w-375 flex max-h-150 ${theme === "dark" ? "bg-dark-primary shadow-gray-950" : "bg-primary shadow-gray-300"} rounded-lg shadow-md  p-5`}
      options={options}
      data={graphData}
    />
  );
};

export default BarGraph;
