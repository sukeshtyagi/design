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
      <div className={style.innerPreviousContainer}>
        <div className={style.topDiv}>
          <div className={style.upperDiv}>
            <h1 className={style.heading}>
              Previous <span className={style.headingSpan}>Engagements</span>
              <p className={style.para}>Review your previous interactions</p>
            </h1>
          </div>
          <div className={style.rightDiv}>
            <button className={`${style.viewBtn}`}>
              VIEW ALL
            </button>
          </div>
        </div>

        <div className={`${style.midDiv} border-b border-grayish`}>
          {categories.map((category) => (
            <div
              key={category}
              className={`${style.midDivPara} ${
                activeCategory === category ? style.active : ""
              } cursor-pointer`}
              onClick={() => setActiveCategory(category)}
            >
              <p
                className={`${style.midDivPara2} hover:text-appGreen cursor-pointer`}
                style={
                  activeCategory === category
                    ? {
                        color: "#47e0c9",
                      }
                    : {}
                }
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
                stars="5"
                rating="4.5"
              />

              <PreviousEngagementCard
                img={"/images/prev.svg"}
                name="Dr. John Smith"
                service="Medical Services"
                about="Top Paediatrician in Delhi"
                date="12/12/2022"
                stars="5"
                rating="4.5"
              />
            </div>

            <div className={style.rightTopBtm}>
              <PreviousEngagementCard
                img={"/images/prev.svg"}
                name="Dr. John Smith"
                service="Medical Services"
                about="Top Paediatrician in Delhi"
                date="12/12/2022"
                stars="5"
                rating="4.5"
              />

              <PreviousEngagementCard
                img={"/images/prev.svg"}
                name="Dr. John Smith"
                service="Medical Services"
                about="Top Paediatrician in Delhi"
                date="12/12/2022"
                stars="5"
                rating="4.5"
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
                stars="5"
                rating="4.5"
              />

              <PreviousEngagementCard
                img={"/images/prev.svg"}
                name="Dr. John Smith"
                service="Medical Services"
                about="Top Paediatrician in Delhi"
                date="12/12/2022"
                stars="5"
                rating="4.5"
              />
            </div>
            <div className={style.rightLwrBtm}>
              <PreviousEngagementCard
                img={"/images/prev.svg"}
                name="Dr. John Smith"
                service="Medical Services"
                about="Top Paediatrician in Delhi"
                date="12/12/2022"
                stars="5"
                rating="4.5"
              />

              <PreviousEngagementCard
                img={"/images/prev.svg"}
                name="Dr. John Smith"
                service="Medical Services"
                about="Top Paediatrician in Delhi"
                date="12/12/2022"
                stars="5"
                rating="4.5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviousEngagements;
