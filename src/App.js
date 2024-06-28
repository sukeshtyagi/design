import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./homePageComponents/HomePage";
import DekstopLogin from "./desktopLoginPage/DekstopLogin";
import DesktopSignup from "./desktopSignupPage/DesktopSignup";
import EnterOtp from "./desktopSignupPage/EnterOtp";
import UserDashboard from "./userDashboard/UserDashboard";
import Trial from "./commonComponents/Trial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<DekstopLogin />} />
        <Route path="/register" element={<DesktopSignup />} />
        <Route path="/enter-otp" element={<EnterOtp />} />
        <Route path="/profile" element={<UserDashboard />} />
        <Route path="/abc" element={<Trial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
