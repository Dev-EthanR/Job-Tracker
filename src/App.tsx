import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/features/NavBar";
import type Data from "./Entities/Data";
import Applications from "./pages/Applications";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import Page404 from "./pages/Page404";

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

  useEffect(() => {
    localStorage.setItem("jobData", JSON.stringify(data));
  }, [data]);

  return (
    <BrowserRouter>
      <DataCtx.Provider value={{ data, setData }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Applications />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </DataCtx.Provider>
    </BrowserRouter>
  );
}

export default App;
