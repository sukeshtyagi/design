import Footer from "./Footer";
import Miss from "./Miss";
import Header from "./components/Header";
import Locations from "./components/Locations";
import NeedHelp from "./components/NeedHelp";
import PreviousEngagements from "./components/PreviousEngagements";
import Professions from "./components/Professions";
import Searches from "./components/Searches";
import Services from "./components/Services";
import style from "./styles/Header.module.css";

function App() {
  return (
    <div className="appContainer box-border w-screen xl1:w-[1440px] mx-auto">
      <Header />
      <Services />
      <Professions />
      <PreviousEngagements />
      {/*<Searches />*/}
      <Locations />
      <NeedHelp />
      <Miss />
      <Footer />
     
    </div>
  );
}

export default App;
