import ClearData from "../components/settings/ClearData";
import DefaultLabel from "../components/settings/DefaultLabel";

const Settings = () => {
  return (
    <div className="p-4 w-full">
      <h1 className="text-4xl font-semibold">Settings</h1>
      <div className="border-b border-gray-300 w-full mb-4 pt-4"></div>
      <ClearData />
      <DefaultLabel />
    </div>
  );
};

export default Settings;
