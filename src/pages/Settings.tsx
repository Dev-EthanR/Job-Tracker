import ClearData from "../components/settings/ClearData";
import DefaultLabel from "../components/settings/DefaultLabel";
import DeleteConfirmation from "../components/settings/DeleteConfirmation";
import Theme from "../components/settings/Theme";
import useTheme from "../hooks/useTheme";

const Settings = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`p-4 h-dvh w-full ${theme === "dark" ? "bg-dark-primary text-dark-text" : "bg-white"}`}
    >
      <h1 className="text-4xl font-semibold">Settings</h1>
      <div className="border-b border-gray-300 w-full mb-4 pt-4"></div>
      <ClearData />
      <DefaultLabel />
      <DeleteConfirmation />
      <Theme />
    </div>
  );
};

export default Settings;
