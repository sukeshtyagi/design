import React from "react";
import HomePage from "../homePageComponents/HomePage";
import DoctorDashboard from "../AllDashboardPages/doctorDashboardPages/doctorDashboard/DoctorDashboard";
import TeacherDashboard from "../AllDashboardPages/teacherDashboardPages/teacherDashboard/TeacherDashboard";
import AdvocateDashboard from "../AllDashboardPages/advocateDashboardPages/advocateDashboard/AdvocateDashboard";

function DashboardProtection({
  doctorDashboardProp,
  teacherDashboardProp,
  advocateDashboardProp,
}) {
  const vendorType = localStorage.getItem("vendorType");

  if (doctorDashboardProp && vendorType) {
    return <DoctorDashboard />;
  } else if (teacherDashboardProp && vendorType) {
    return <TeacherDashboard />;
  } else if (advocateDashboardProp && vendorType) {
    return <AdvocateDashboard />;
  } else {
    return <HomePage />;
  }
}

export default DashboardProtection;
