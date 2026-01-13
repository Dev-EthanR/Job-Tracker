import NavBar from "./components/features/NavBar";
import useIsMobile from "./hooks/useIsMobile";

function App() {
  const isMobile: boolean = useIsMobile();

  return (
    <div className={`font-inter h-dvh w-full flex ${isMobile && "flex-col"}`}>
      <NavBar title="My Applications" />
      <h1>My App</h1>
    </div>
  );
}

export default App;
