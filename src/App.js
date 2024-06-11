import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./homePageComponents/HomePage";
import DekstopLogin from "./desktopLoginPage/DekstopLogin";
import DesktopSignup from "./desktopSignupPage/DesktopSignup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dekstopLogin" element={<DekstopLogin />} />
        <Route path="/dekstopSignup" element={<DesktopSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
