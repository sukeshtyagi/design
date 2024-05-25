import Header from "./components/Header";
import Professions from "./components/Professions";
import Searches from "./components/Searches";
import Services from "./components/Services";

function App() {
  return (
    <div className="appContainer box-border w-screen xl1:w-[1440px] mx-auto">
      <Header />
      <Services />
      <Professions />
      <Searches />
    </div>
  );
}

export default App;
