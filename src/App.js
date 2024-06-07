import Footer from "./homePageComponents/Footer";
import Miss from "./homePageComponents/Miss";
import Header from "./homePageComponents/Header";
import Locations from "./homePageComponents/Locations";
import NeedHelp from "./homePageComponents/NeedHelp";
import PreviousEngagements from "./homePageComponents/PreviousEngagements";
import Professions from "./homePageComponents/Professions";
import Searches from "./homePageComponents/Searches";
import Services from "./homePageComponents/Services";
import Campaigns from "./homePageComponents/Campaigns";
import LatestBlogs from "./homePageComponents/LatestBlogs";

function App() {
  return (
    <div className="appContainer box-border w-screen xl1:w-[1440px] mx-auto">
      <Header />
      <Services />
      <Professions />
      <Campaigns />
      <PreviousEngagements />
      {/*<Searches />*/}
      <Locations />
      <LatestBlogs />
      <NeedHelp />
      <Miss />
      <Footer />
    </div>
  );
}

export default App;
