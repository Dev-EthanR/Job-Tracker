import NavBar from "./components/features/NavBar";
import Card from "./components/ui/Card";
import useIsMobile from "./hooks/useIsMobile";

function App() {
  const isMobile: boolean = useIsMobile();
  const date: Date = new Date();

  return (
    <div
      className={`font-inter h-dvh w-full flex ${
        isMobile && "flex-col items-center"
      } `}
    >
      <NavBar title="My Applications" />
      <h1>My App</h1>
      <Card
        company="Google"
        title="IT"
        date={date}
        status={{ name: "Rejected", color: "bg-reject" }}
      />
      <Card
        company="Microsoft"
        title="Accountant"
        date={date}
        status={{ name: "Offer", color: "bg-interview" }}
      />
    </div>
  );
}

export default App;
