import React from "react";

function Professions() {
  return (
    <div className="outermostSectionContainer box-border w-full xl1:w-[1440px] mt-6 py-12 bg-bluish">
      <div className="sectionContainer box-border w-10/12 mx-auto mt-8 mx-auto flex flex-col gap-10">
        <div className="topDiv box-border w-full flex flex-col md:flex-row gap-4 justify-end items-center">
          <div className="topLeft box-border w-full">
            <h1 className="heading box-border text-black text-center text-3xl bp3:text-4xl font-medium">
              EXPLORE DIVERSE <span className="text-appGreen">PROFESSIONS</span>
            </h1>
            <p className="para box-border text-grayish text-center text-lg">
              Discover the Range of Expertise Available at Your Fingertips
            </p>
          </div>
          <div className="topRight box-border w-[110px] ">
            <button className="view box-border w-full text-lg px-1 border  border-appGreen hover:border-black cursor-pointer rounded-none transition duration-300 hover:rounded-full hover:ring-2 hover:ring-offset-4 ring-appGreen">
              VIEW ALL
            </button>
          </div>
        </div>

        <div className="btmDiv box-border w-full flex flex-col gap-4 ">
          <div className="btm1 box-border w-full flex justify-between items-center gap-6">
            <div className="imgContainer box-border w-1/4 bg-white border rounded p-2 hover:bg-gray-100">
              <img
                src="/images/profession/ayurvedic1.svg"
                alt=""
                className="box-border cursor-pointer hover:scale-125"
              />
            </div>
            <div className="imgContainer box-border w-1/4 bg-white border rounded p-2 hover:bg-gray-100">
              <img
                src="/images/profession/civil1.svg"
                alt=""
                className="box-border cursor-pointer hover:scale-125"
              />
            </div>
            <div className="imgContainer box-border w-1/4 bg-white border rounded p-2 hover:bg-gray-100">
              <img
                src="/images/profession/chemistry1.svg"
                alt=""
                className="box-border cursor-pointer hover:scale-125"
              />
            </div>
            <div className="imgContainer box-border w-1/4 bg-white border rounded p-2 hover:bg-gray-100">
              <img
                src="/images/profession/criminal1.svg"
                alt=""
                className="box-border cursor-pointer hover:scale-125"
              />
            </div>
          </div>

          <div className="btm2 box-border w-full  flex justify-between items-center gap-6">
            <div className="imgContainer box-border w-1/4 bg-white border rounded p-2 hover:bg-gray-100">
              <img
                src="/images/profession/software.svg"
                alt=""
                className="box-border cursor-pointer hover:scale-125"
              />
            </div>
            <div className="imgContainer box-border w-1/4 bg-white border rounded p-2 hover:bg-gray-100">
              <img
                src="/images/profession/child.svg"
                alt=""
                className="box-border cursor-pointer hover:scale-125"
              />
            </div>
            <div className="imgContainer box-border w-1/4 bg-white border rounded p-2 hover:bg-gray-100">
              <img
                src="/images/profession/auditor.svg"
                alt=""
                className="box-border cursor-pointer hover:scale-125"
              />
            </div>
            <div className="imgContainer box-border w-1/4 bg-white border rounded p-2 hover:bg-gray-100">
              <img
                src="/images/profession/neuro.svg"
                alt=""
                className="box-border cursor-pointer hover:scale-125"
              />
            </div>
          </div>

          <div className="btm3 box-border w-full  flex justify-between items-center gap-6">
            <div className="imgContainer box-border w-1/4 bg-white border rounded p-2 hover:bg-gray-100">
              <img
                src="/images/profession/english.svg"
                alt=""
                className="box-border cursor-pointer hover:scale-125"
              />
            </div>
            <div className="imgContainer box-border w-1/4 bg-white border rounded p-2 hover:bg-gray-100">
              <img
                src="/images/profession/dcp.svg"
                alt=""
                className="box-border cursor-pointer hover:scale-125"
              />
            </div>
            <div className="imgContainer box-border w-1/4 bg-white border rounded p-2 hover:bg-gray-100">
              <img
                src="/images/profession/dentist.svg"
                alt=""
                className="box-border cursor-pointer hover:scale-125"
              />
            </div>
            <div className="imgContainer box-border w-1/4 bg-white border rounded p-2 hover:bg-gray-100">
              <img
                src="/images/profession/physics.svg"
                alt=""
                className="box-border cursor-pointer hover:scale-125"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Professions;
