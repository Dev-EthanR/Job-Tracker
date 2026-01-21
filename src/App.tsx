import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import type Data from "./Entities/Data";
import Analytics from "./pages/Analytics";
import Applications from "./pages/Applications";
import Layout from "./pages/Layout";
import Page404 from "./pages/Page404";
import Settings from "./pages/Settings";
import CardDetails from "./pages/CardDetails";

interface DataType {
  data: Data[];
  setData: Dispatch<SetStateAction<Data[]>>;
}

interface ThemeType {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

interface Toast {
  open: boolean | null;
  message: string | null;
  color: "bg-green-600" | "bg-red-600" | null;
}

interface ToastType {
  toastOpen: Toast;
  setToastOpen: Dispatch<SetStateAction<Toast>>;
}

export const DataCtx = createContext<DataType | null>(null);
export const ThemeCtx = createContext<ThemeType | null>(null);
export const ToastCtx = createContext<ToastType | null>(null);

function App() {
  const [data, setData] = useState<Data[]>(() => {
    const storedData: string | null = localStorage.getItem("jobData");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [toastOpen, setToastOpen] = useState<Toast>({
    open: false,
    message: null,
    color: null,
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
          <ToastCtx.Provider value={{ toastOpen, setToastOpen }}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Applications />} />
                <Route path="settings" element={<Settings />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="application/:id" element={<CardDetails />} />
                <Route path="*" element={<Page404 />} />
              </Route>
            </Routes>
          </ToastCtx.Provider>
        </DataCtx.Provider>
      </BrowserRouter>
    </ThemeCtx.Provider>
  );
}

export default App;
