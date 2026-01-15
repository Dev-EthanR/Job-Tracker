import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import Header from "./components/features/Header";
import NavBar from "./components/features/NavBar";
import Card from "./components/ui/Card";

interface Data {
  id: string;
  company: string;
  position: string;
  date: string;
  notes?: string;
}

interface DataType {
  data: Data[];
  setData: Dispatch<SetStateAction<Data[]>>;
}

export const DataCtx = createContext<DataType | null>(null);

function App() {
  const date: Date = new Date();
  const [data, setData] = useState<Data[]>(() => {
    const storedData: string | null = localStorage.getItem("jobData");
    return storedData ? JSON.parse(storedData) : [];
  });
  localStorage.setItem("jobData", JSON.stringify(data));

  console.log(data);
  return (
    <DataCtx.Provider value={{ data, setData }}>
      <div
        className="font-inter h-dvh w-full flex
          flex-col items-center md:flex-row md:items-start"
      >
        <NavBar title="My Applications" />
        <main className="grow">
          <Header />
          <div className="flex flex-col items-center md:items-start px-4 gap-3">
            <Card
              company="Google"
              title="IT"
              date={date}
              status={{ name: "Rejected", color: "bg-reject" }}
            />
            <Card
              company="Microsoft"
              title="Accountant"
              date={date}
              status={{ name: "Offer", color: "bg-interview" }}
            />
            {data.map((d) => (
              <Card
                key={d.id}
                company={d.company}
                title={d.position}
                date={date}
                status={{ name: "Offer", color: "bg-interview" }}
              />
            ))}
          </div>
        </main>
      </div>
    </DataCtx.Provider>
  );
}

export default App;
