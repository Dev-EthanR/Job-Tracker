import { useEffect, useState } from "react";
import LabelOptions from "../Form/LabelOptions";

const DefaultLabel = () => {
  const [selectedValue, setSelectedValue] = useState<string>(
    localStorage.getItem("defaultLabel") || "",
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("defaultLabel", selectedValue);
  }, [selectedValue]);

  return (
    <>
      <label className="flex justify-between" htmlFor="label">
        <span>Set Default Label</span>
      </label>
      <select
        id="label"
        className="block w-full border-gray-300 border rounded-md mt-1 mb-3 h-10 px-4 mr-4 focus:outline-gray-400"
        onChange={handleSelectChange}
        value={selectedValue}
      >
        <option defaultValue="" value="">
          None
        </option>
        <LabelOptions />
      </select>
      <div>{selectedValue}</div>
    </>
  );
};

export default DefaultLabel;
