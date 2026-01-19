import useTheme from "../../hooks/useTheme";
import Container from "./Container";

const Theme = () => {
  const { theme, setTheme } = useTheme();

  function switchTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <Container title="Theme:">
      <button
        className={`border-2 border-black rounded-4xl w-15 h-7.5 relative cursor-pointer transition-colors duration-500 ${theme === "dark" && "bg-dark-primary border-white"}`}
        onClick={switchTheme}
      >
        <span
          className={`bg-black rounded-[50%] w-5.5 h-5.5 absolute top-0.5 left-0.5 transition-all duration-500 ${theme === "dark" && "left-8 bg-white"}`}
        ></span>
      </button>
    </Container>
  );
};

export default Theme;
