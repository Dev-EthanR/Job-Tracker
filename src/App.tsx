import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import Header from "./components/features/Header";
import NavBar from "./components/features/NavBar";
import Card from "./components/ui/Card";
import notFoundImage from "./assets/images/not-found.png";

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

  return (
    <DataCtx.Provider value={{ data, setData }}>
      <div
        className="font-inter h-dvh w-full flex
          flex-col items-center md:flex-row md:items-start"
      >
        <NavBar title="My Applications" />
        <main className="grow ">
          <Header />
          {data.length <= 0 && (
            <div className="flex flex-col items-center w-full text-center justify-center mt-20 ">
              <img
                className="w-50 md:w-80"
                src={notFoundImage}
                alt="No applications found"
              />
              <h1 className="font-bold text-2xl mb-2 md:text-4xl">
                No applications yet
              </h1>
              <p className="text-gray-600 w-60 md:w-full md:text-lg">
                Get started by adding your first job application
              </p>
            </div>
          )}
          <div className="flex flex-col items-center md:items-start px-4 gap-3 ">
            {data.map((d) => (
              <>
                <Card
                  key={d.id}
                  id={d.id}
                  company={d.company}
                  title={d.position}
                  date={d.date}
                  status={{ name: "Offer", color: "bg-interview" }}
                />
              </>
            ))}
          </div>
        </main>
      </div>
    </DataCtx.Provider>
  );
}

export default App;
