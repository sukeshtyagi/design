import Footer from "./Footer";
import Miss from "./Miss";
import Header from "./components/Header";
import NeedHelp from "./components/NeedHelp";
import Professions from "./components/Professions";
import Searches from "./components/Searches";
import Services from "./components/Services";

function App() {
  return (
    <div className="appContainer box-border w-screen xl1:w-[1440px] mx-auto">
      <Header />
      <Services />
      <Professions />
      {/*<Searches />*/}
      <NeedHelp />
      <Miss />
      <Footer />
      <h1 className="box-border w-full bg-appGreen py-[16px] h-[48px] text-center text-sm text-footerColor font-normal	">
        copyright 2008-24. All Rights Reserved.
      </h1>
    </div>
  );
}

export default App;
