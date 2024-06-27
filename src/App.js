import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./homePageComponents/HomePage";
import DekstopLogin from "./desktopLoginPage/DekstopLogin";
import DesktopSignup from "./desktopSignupPage/DesktopSignup";
import Header from "./homePageComponents/Header";
import Services from "./homePageComponents/Services";
import Trial from "./commonComponents/Trial";
import EnterOtp from "./desktopSignupPage/EnterOtp";
import UserDashboard from "./userDashboard/UserDashboard";
import PersonalInfo from "./userDashboard/PersonalInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<DekstopLogin />} />
        <Route path="/register" element={<DesktopSignup />} />
        <Route path="/enter-otp" element={<EnterOtp />} />
        <Route path="/profile" element={<UserDashboard />} />
        <Route path="/abc" element={<PersonalInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
