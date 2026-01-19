import { useEffect, useState, type ChangeEvent } from "react";
import LabelOptions from "../Form/LabelOptions";
import Container from "./Container";

const DefaultLabel = () => {
  const [selectedValue, setSelectedValue] = useState<string>(
    localStorage.getItem("defaultLabel") || "",
  );

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("defaultLabel", selectedValue);
  }, [selectedValue]);

  return (
    <Container title="Set Default Label:">
      <select
        id="label"
        className="block w-full border-gray-300 border rounded-md mt-1 mb-3 h-10 px-4 mr-4 focus:outline-gray-400"
        onChange={handleSelectChange}
        value={selectedValue}
        aria-label="Set Default Label"
      >
        <option defaultValue="" value="">
          None
        </option>
        <LabelOptions />
      </select>
    </Container>
  );
};

export default DefaultLabel;
