import React, { useState } from "react";
import PreviousEngagementCard from "./PreviousEngagementCard";
import style from "../styles/PreviousEngagements.module.css";
function PreviousEngagements() {
  const [activeCategory, setActiveCategory] = useState("Doctors");

  const categories = [
    "Doctors",
    "Engineers",
    "CA's",
    "Advocates",
    "Teachers",
    "Labours",
    "Officers",
    "Govt. Officials",
  ];

  return (
    <div className={style.outermostPreviousContainer}>
      <div className={style.topDiv}>
        <div className={style.upperDiv}>
          <h1 className={style.heading}>
            Previous <span className={style.headingSpan}>Engagements</span>
            <p className={style.para}>Review your previous interactions</p>
          </h1>
        </div>
        <div className={style.rightDiv}>
          <button className={`${style.viewBtn} hover:bg-appGreen`}>VIEW ALL</button>
        </div>
      </div>

      <div className={`${style.midDiv} border-b border-grayish`}>
        {categories.map((category) => (
          <div
            key={category}
            className={`${style.midDivPara} cursor-pointer`}
            onClick={() => setActiveCategory(category)}
          >
            <p
              className={`${style.midDivPara2} border-b-[3px] hover:text-appGreen ${
                activeCategory === category
                  ? "border-b-footerColor"
                  : "border-transparent"
              } cursor-pointer`}
            >
              {category}
            </p>
          </div>
        ))}
      </div>
      <div className={style.btmDiv}>
        <div className={style.uprDiv}>
          <div className={style.leftTopBtm}>
            <PreviousEngagementCard
              img={"/images/prev.svg"}
              name="Dr. John Smith"
              service="Medical Services"
              about="Top Paediatrician in Delhi"
              date="12/12/2022"
              stars="4"
              rating="4"
            />

            <PreviousEngagementCard
              img={"/images/prev.svg"}
              name="Dr. John Smith"
              service="Medical Services"
              about="Top Paediatrician in Delhi"
              date="12/12/2022"
              stars="4"
              rating="4"
            />
          </div>

          <div className={style.rightTopBtm}>
            <PreviousEngagementCard
              img={"/images/prev.svg"}
              name="Dr. John Smith"
              service="Medical Services"
              about="Top Paediatrician in Delhi"
              date="12/12/2022"
              stars="3"
              rating="3"
            />

            <PreviousEngagementCard
              img={"/images/prev.svg"}
              name="Dr. John Smith"
              service="Medical Services"
              about="Top Paediatrician in Delhi"
              date="12/12/2022"
              stars="2"
              rating="2"
            />
          </div>
        </div>
        <div className={style.lwrDiv}>
          <div className={style.leftLwrBtm}>
            <PreviousEngagementCard
              img={"/images/prev.svg"}
              name="Dr. John Smith"
              service="Medical Services"
              about="Top Paediatrician in Delhi"
              date="12/12/2022"
              stars="1"
              rating="1"
            />

            <PreviousEngagementCard
              img={"/images/prev.svg"}
              name="Dr. John Smith"
              service="Medical Services"
              about="Top Paediatrician in Delhi"
              date="12/12/2022"
              stars="5"
              rating="5"
            />
          </div>
          <div className={style.rightLwrBtm}>
            <PreviousEngagementCard
              img={"/images/prev.svg"}
              name="Dr. John Smith"
              service="Medical Services"
              about="Top Paediatrician in Delhi"
              date="12/12/2022"
              stars="2"
              rating="2"
            />

            <PreviousEngagementCard
              img={"/images/prev.svg"}
              name="Dr. John Smith"
              service="Medical Services"
              about="Top Paediatrician in Delhi"
              date="12/12/2022"
              stars="3"
              rating="3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviousEngagements;
