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
import Columns from "./components/features/Columns";

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
        <main className="grow pb-25 md:pb-0">
          <Header />
          {data.length <= 0 ? (
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
          ) : (
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 px-4 gap-y-4 ">
              <Columns title="Applied" color="bg-applied">
                {data.map((d) => (
                  <>
                    <Card
                      key={d.id}
                      id={d.id}
                      company={d.company}
                      title={d.position}
                      date={d.date}
                      status={{ name: "Applied", color: "bg-applied" }}
                    />
                  </>
                ))}
              </Columns>
              <Columns title="Interview" color="bg-interview">
                {data.map((d) => (
                  <>
                    <Card
                      key={d.id}
                      id={d.id}
                      company={d.company}
                      title={d.position}
                      date={d.date}
                      status={{ name: "Interview", color: "bg-interview" }}
                    />
                  </>
                ))}
              </Columns>
              <Columns title="Offer" color="bg-offer">
                {data.map((d) => (
                  <>
                    <Card
                      key={d.id}
                      id={d.id}
                      company={d.company}
                      title={d.position}
                      date={d.date}
                      status={{ name: "Offer", color: "bg-offer" }}
                    />
                  </>
                ))}
              </Columns>
              <Columns title="Rejected" color="bg-reject">
                {data.map((d) => (
                  <>
                    <Card
                      key={d.id}
                      id={d.id}
                      company={d.company}
                      title={d.position}
                      date={d.date}
                      status={{ name: "Rejected", color: "bg-reject" }}
                    />
                  </>
                ))}
              </Columns>
            </div>
          )}
        </main>
      </div>
    </DataCtx.Provider>
  );
}

export default App;
