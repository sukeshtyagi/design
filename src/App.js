import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./homePageComponents/HomePage";
import DekstopLogin from "./desktopLoginPage/DekstopLogin";
import DesktopSignup from "./desktopSignupPage/DesktopSignup";
import EnterOtp from "./desktopSignupPage/EnterOtp";
import UserDashboard from "./userDashboard/UserDashboard";
import Trial from "./commonComponents/Trial";
import DoctorLisiting from "./doctorPages/DoctorLisiting";
import Appointment from "./doctorPages/Appointment";
import DoctorDetail from "./doctorPages/DoctorDetail";
import TeacherListing from "./teacherPages/TeacherListing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage userDashboard="true" />} />
        <Route path="/login" element={<DekstopLogin />} />
        <Route path="/register" element={<DesktopSignup />} />
        <Route path="/enter-otp" element={<EnterOtp />} />
        <Route path="/profile" element={<UserDashboard />} />
        <Route path="/doctors" element={<DoctorLisiting />} />
        <Route path="/teachers" element={<TeacherListing />} />
        <Route path="/doctor-detail" element={<DoctorDetail />} />
        <Route path="/abc" element={<Trial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
