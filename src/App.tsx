import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import Columns from "./components/features/Columns";
import Header from "./components/features/Header";
import NavBar from "./components/features/NavBar";
import NotFound from "./components/features/NotFound";

export interface Data {
  id: string;
  company: string;
  position: string;
  date: string;
  label: string;
  notes?: string;
}

interface DataType {
  data: Data[];
  setData: Dispatch<SetStateAction<Data[]>>;
}

export const DataCtx = createContext<DataType | null>(null);

function App() {
  const [data, setData] = useState<Data[]>(() => {
    const storedData: string | null = localStorage.getItem("jobData");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [selectedValue, setSelectedValue] = useState<string>("all");

  localStorage.setItem("jobData", JSON.stringify(data));

  return (
    <DataCtx.Provider value={{ data, setData }}>
      <div className="font-inter min-h-dvh w-full flex flex-col md:flex-row">
        <NavBar title="My Applications " />
        <main className="flex flex-col flex-1 ">
          <Header value={selectedValue} setValue={setSelectedValue} />
          <section className="flex-1 bg-primary pt-12">
            {data.length <= 0 ? (
              <NotFound
                heading="No applications yet"
                subtext="et started by adding your first job application"
                type="main"
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 px-4 gap-y-4 pb-25 md:pb-0 ">
                {selectedValue === "applied" || selectedValue === "all" ? (
                  <Columns title="Applied" color="bg-applied" data={data} />
                ) : null}
                {selectedValue === "interview" || selectedValue === "all" ? (
                  <Columns title="Interview" color="bg-interview" data={data} />
                ) : null}
                {selectedValue === "offer" || selectedValue === "all" ? (
                  <Columns title="Offer" color="bg-offer" data={data} />
                ) : null}
                {selectedValue === "rejected" || selectedValue === "all" ? (
                  <Columns title="Rejected" color="bg-rejected" data={data} />
                ) : null}
              </div>
            )}
          </section>
        </main>
      </div>
    </DataCtx.Provider>
  );
}

export default App;
