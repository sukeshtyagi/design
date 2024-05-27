import React, { useState } from "react";
import PreviousEngagementCard from "./PreviousEngagementCard";

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
    <div className="outermostPreviousContainer box-border w-full xl1:w-[1440px] bg-bluish mx-auto mt-4 py-14">
      <div className="previousContainer box-border w-10/12 mx-auto flex flex-col gap-4">
        <div className="topDiv box-border w-full flex flex-col md:flex-row gap-4 justify-end items-center">
          <div className="topLeft box-border w-full">
            <h1 className="heading box-border text-footerColor text-center text-3xl bp3:text-4xl font-semibold">
              Previous <span className="text-appGreen">Engagements</span>
            </h1>
            <p className="para box-border text-grayish text-center text-sm font-normal">
              Review your previous interactions
            </p>
          </div>
          <div className="topRight box-border w-[110px]">
            <button className="view box-border w-full text-lg px-2 pt-1 border border-black hover:border-black cursor-pointer rounded-sm transition duration-300 hover:rounded-full hover:ring-2 hover:ring-offset-4 ring-appGreen">
              VIEW ALL
            </button>
          </div>
        </div>

        <div className="midDiv box-border w-full px-4 py-0 flex justify-between items-center border-b-[3px]">
          {categories.map((category) => (
            <p
              key={category}
              className={`para box-border -mb-[1px] border-b-4 ${
                activeCategory === category
                  ? "border-b-footerColor"
                  : "border-transparent"
              } cursor-pointer`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </p>
          ))}
        </div>

        <div className="btmDiv box-border w-full mx-auto flex flex-col bp1:flex-row justify-start gap-8">
          <div className="topOfBtm box-border w-fit mx-auto bp1:w-full flex justify-between gap-6">
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

          <div className="btmOfBtm box-border w-fit mx-auto bp1:w-full flex justify-between gap-6">
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

        <div className="btmDiv box-border w-full mx-auto flex flex-col bp1:flex-row justify-start gap-8">
          <div className="topOfBtm box-border w-fit mx-auto bp1:w-full flex justify-between gap-6">
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

          <div className="btmOfBtm box-border w-fit mx-auto bp1:w-full flex justify-between gap-6">
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
