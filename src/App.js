import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./homePageComponents/HomePage";
import DekstopLogin from "./desktopLoginPage/DekstopLogin";
import DesktopSignup from "./desktopSignupPage/DesktopSignup";
import EnterOtp from "./desktopSignupPage/EnterOtp";
import UserDashboard from "./userDashboard/UserDashboard";
import DoctorLisiting from "./doctorPages/DoctorLisiting";
import DoctorDetail from "./doctorPages/DoctorDetail";
import TeacherListing from "./teacherPages/TeacherListing";
import TeacherDetail from "./teacherPages/TeacherDetail";
import CaListing from "./caPages/CaListing";
import CaDetail from "./caPages/CaDetail";
import {SpecCards} from "./doctorPages/DocSpecCards";

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
        <Route path="/ca's" element={<CaListing />} />
        <Route path="/doctor-detail" element={<DoctorDetail />} />
        <Route path="/teacher-detail" element={<TeacherDetail />} />
        <Route path="/ca-detail" element={<CaDetail />} />
        <Route path="/abc" element={<SpecCards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
