import React from "react";
import ProfessionCard from "./ProfessionCard";

function Professions() {
  return (
    <div className="outermostSectionContainer box-border w-full xl1:w-[1440px] mt-6 py-12 bg-bluish">
      <div className="sectionContainer box-border w-10/12 mx-auto mt-8 mx-auto flex flex-col gap-10">
        <div className="topDiv box-border w-full flex flex-col md:flex-row gap-4 justify-end items-center">
          <div className="topLeft box-border w-full">
            <h1 className="heading box-border text-footerColor text-center text-3xl bp3:text-4xl font-semibold">
              EXPLORE DIVERSE <span className="text-appGreen">PROFESSIONS</span>
            </h1>
            <p className="para box-border text-grayish text-center text-sm font-normal">
              Discover the Range of Expertise Available at Your Fingertips
            </p>
          </div>
          <div className="topRight box-border w-[110px] ">
            <button className="view box-border w-full text-lg px-2 pt-1 border border-black	hover:border-black cursor-pointer rounded-sm transition duration-300 hover:rounded-full hover:ring-2 hover:ring-offset-4 ring-appGreen">
              VIEW ALL
            </button>
          </div>
        </div>

        <div className="btmDiv box-border w-full mx-auto flex flex-col gap-4">
          <div className="btm1 box-border w-full bp4:max-xl1:w-[660px] mx-auto flex flex-wrap justify-between items-center gap-6">
            <ProfessionCard
              img={"/images/profession/ayurvedic1.svg"}
              title={"Ayurvedic Doctors"}
            />
            <ProfessionCard
              img={"/images/profession/civil1.svg"}
              title={"Civil Engineers"}
            />
            <ProfessionCard
              img={"/images/profession/chemistry1.svg"}
              title={"Chemistry Teachers"}
            />

            <ProfessionCard
              img={"/images/profession/lawyer1.svg"}
              title={"Criminal Lawyers"}
            />
          </div>
          <div className="btm2 box-border w-full bp4:max-xl1:w-[660px] mx-auto flex flex-wrap justify-between items-center gap-6">
            <ProfessionCard
              img={"/images/profession/soft.svg"}
              title={"Software Engineers"}
            />
            <ProfessionCard
              img={"/images/profession/child.svg"}
              title={"Child Specialists"}
            />
            <ProfessionCard
              img={"/images/profession/auditor.svg"}
              title={"Auditors"}
            />

            <ProfessionCard
              img={"/images/profession/neuro.svg"}
              title={"Neurologists"}
            />
          </div>

          <div className="btm3 box-border w-full bp4:max-xl1:w-[660px] mx-auto flex flex-wrap justify-between items-center gap-6">
            <ProfessionCard
              img={"/images/profession/english.svg"}
              title={"English Teachers"}
            />
            <ProfessionCard img={"/images/profession/dcp.svg"} title={"DCP"} />
            <ProfessionCard
              img={"/images/profession/dentists.svg"}
              title={"Dentists"}
            />

            <ProfessionCard
              img={"/images/profession/physics.svg"}
              title={"Physics Teachers"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Professions;
