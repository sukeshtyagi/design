import React, { useState } from "react";
import style from "./EnterDetailsPage.module.css";
import Header from "../../commonComponents/Header";
import DashboardLeftSide from "../../commonComponents/dashboardComponents/DashboardLeftSide";
import DescriptionPage from "./DescriptionPage";
import EnterDetailsPage from "./EnterDetailsPage";

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
          {activeStep === 3 && <p>Step 3 content here</p>}
          {activeStep === 4 && <p>Step 4 content here</p>}
          {activeStep === 5 && <p>Step 5 content here</p>}
          {activeStep === 6 && <p>Step 6 content here</p>}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
