import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./homePageComponents/HomePage";
import DekstopLogin from "./desktopLoginPage/DekstopLogin";
import DesktopSignup from "./desktopSignupPage/DesktopSignup";
import Header from "./homePageComponents/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dekstopLogin" element={<DekstopLogin />} />
        <Route path="/dekstopSignup" element={<DesktopSignup />} />
        <Route path="/abc" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
