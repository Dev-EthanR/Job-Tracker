import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import type Data from "./Entities/Data";
import Applications from "./pages/Applications";
import Layout from "./pages/Layout";
import Page404 from "./pages/Page404";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";
import { mockApplications } from "./data";

interface DataType {
  data: Data[];
  setData: Dispatch<SetStateAction<Data[]>>;
}

interface ThemeType {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const DataCtx = createContext<DataType | null>(null);
export const ThemeCtx = createContext<ThemeType | null>(null);

function App() {
  const [data, setData] = useState<Data[]>(() => {
    const storedData: string | null = localStorage.getItem("jobData");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"),
  );
  useEffect(() => {
    localStorage.setItem("jobData", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeCtx.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <DataCtx.Provider value={{ data, setData }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Applications />} />
              <Route path="settings" element={<Settings />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="*" element={<Page404 />} />
            </Route>
          </Routes>
        </DataCtx.Provider>
      </BrowserRouter>
    </ThemeCtx.Provider>
  );
}

export default App;
