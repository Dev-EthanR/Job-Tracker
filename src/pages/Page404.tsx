import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import image from "../assets/images/not-found.png";

const Page404 = () => {
  const { theme } = useTheme();
  return (
    <main
      className={`flex justify-center items-center w-full flex-col ${theme === "dark" ? "bg-dark-primary text-dark-text" : "bg-white"} mt-12`}
    >
      <h1 className="text-accent font-extrabold text-4xl md:text-7xl mb-2">
        404
      </h1>
      <h2
        className={`${theme === "dark" ? "text-dark-text" : "text-text"} text-2xl md:text-4xl font-semibold mb-4`}
      >
        Page not found
      </h2>
      <p
        className={`${theme === "dark" ? "text-dark-subtext" : "text-subtext"} text-lg md:text-xl font-semibold mb-9`}
      >
        We cant find the page you're looking for.
      </p>
      <img className="w-40 md:w-60 mb-4" src={image} alt="" />
      <Link
        to="/"
        className="rounded-xl flex items-center justify-center w-45 md:w-60 py-3 text-xl font-medium bg-accent text-white hover:bg-hover transition-colors duration-200 cursor-pointer select-none"
      >
        Go Home
      </Link>
    </main>
  );
};

export default Page404;
