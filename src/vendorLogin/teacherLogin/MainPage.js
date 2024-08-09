import React, { useState } from "react";
import style from "./EnterDetailsPage.module.css";
import Header from "../../commonComponents/Header";
import DashboardLeftSide from "../../commonComponents/dashboardComponents/DashboardLeftSide";
import EnterDetailsPage from "./EnterDetailsPage";
import DescriptionPage from "./DescriptionPage";
import TeachingCertification from "./TeachingCertification";
import Education from "./Education";
import OtherDetails from "./OtherDetails";
import Availability from "./Availability";

function MainPage() {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      <Header />
      <DashboardLeftSide
        name="Ronald Richards"
        logo={false}
        background="rgba(11, 219, 182, 1)"
        topMargin="-40px"
        menuItem1="Dashboard"
        menuItem2="Schedules"
        menuItem3="Students"
        menuItem4="Messages"
        menuItem5="Assignments"
        menuItem6="Payments"
      />

      <div className={style.overlayDiv}>
        <div className={style.contentContainerDiv}>
          {activeStep === 1 && (
            <EnterDetailsPage handleStepChange={handleStepChange} />
          )}
          {activeStep === 2 && (
            <DescriptionPage handleStepChange={handleStepChange} />
          )}
          {activeStep === 3 && (
            <TeachingCertification handleStepChange={handleStepChange} />
          )}
          {activeStep === 4 && (
            <Education handleStepChange={handleStepChange} />
          )}
          {activeStep === 5 && (
            <Availability handleStepChange={handleStepChange} />
          )}
          {activeStep === 6 && <OtherDetails />}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
