import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import Header from "./components/features/Header";
import NavBar from "./components/features/NavBar";
import Card from "./components/ui/Card";
import useIsMobile from "./hooks/useIsMobile";

interface Data {
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
  const isMobile: boolean = useIsMobile();
  const date: Date = new Date();
  const [data, setData] = useState<Data[]>([]);

  return (
    <DataCtx.Provider value={{ data, setData }}>
      <div
        className={`font-inter h-dvh w-full flex ${
          isMobile && " flex-col items-center"
        } `}
      >
        <NavBar title="My Applications" />
        <main className="grow">
          <Header />
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
              key={d.company}
              company={d.company}
              title={d.position}
              date={date}
              status={{ name: "Offer", color: "bg-interview" }}
            />
          ))}
        </main>
      </div>
    </DataCtx.Provider>
  );
}

export default App;
