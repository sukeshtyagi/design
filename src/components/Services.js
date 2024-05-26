import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import CarouselComp from "./CarouselComp";

function Services() {
  return (
    <div className="outermostSectionContainer box-border w-full xl1:w-[1440px] bg-gradient-to-b from-slate-200 from-10% to-white to-50% mx-auto shadow-gray">
      <div className="sectionContainer box-border w-10/12 mx-auto mt-12 mx-auto py-8 flex flex-col gap-12">
        <div className="topDiv box-border w-4/5 flex flex-col items-start gap-4">
          <p className="para text-lg sm:text-2xl  font-medium">
            Lorem Ipsum Dolor Sit Amet,
            <span className="text-lg sm:text-2xl text-appGreen font-bold">
              {" "}
              Consectetur Adipiscing Elit
            </span>
          </p>

          <div className="lwrDiv box-border w-full bg-white border rounded-lg border-gray-500  flex justify-start items-center">
            <div className="leftDiv box-border w-[250px] py-1 rounde-lg flex justify-evenly items-center">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="hover:bg-appGreen p-1  rounded-xl"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Location"
                className="box-border w-3/5 text-ellipsis text-center text-base sm:text-lg text-black placeholder-gray-500 rounded-lg cursor-pointer hover:ring-2 ring-red-500 focus:bg-zinc-200"
              />
              <FontAwesomeIcon
                icon={faAngleDown}
                className="hover:bg-appGreen p-1 rounded-xl"
              />
            </div>

            <div className="centerDiv box-border px-2 py-1 border-x-2 border-gray-500 w-full bg-white">
              <input
                type="text"
                name=""
                id=""
                className="box-border w-full text-ellipsis px-4 text-left text-base sm:text-lg text-black placeholder-gray-500 rounded-lg cursor-pointer hover:ring-2 ring-red-500 focus:bg-zinc-200"
                placeholder="Search advocates, doctors, teachers and may more ..."
              />
            </div>
            <div className="rightDiv box-border w-fit px-1 py-[6px] rounded-e-lg bg-appGreen hover:bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 text-xl text-black hover:text-appGreen font-bold  cursor-pointer "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="midDiv box-border overflow-x-hidden w-full bg-inherit flex  flex-col bp2:flex-row justify-between items-center gap-4">
          <div className="leftMid box-border w-fit bg-appGreen rounded-xl p-1">
            <CarouselComp />
          </div>

          <div className="rightMid box-border w-fit xl1:h-[470px] flex flex-col justify-center bg-inherit gap-4">
            <div className="topRight box-border w-full bp5:max-bp4:w-[340px] bp4:w-[660px] mx-auto flex flex-wrap justify-center items-center gap-2 bg-inherit">
              <img
                src="/images/doc.svg"
                alt="doctors"
                class="box-border w-[130px] md:w-fit cursor-pointer transition-all ease-in-out delay-300 duration-300 hover:scale-125"
              />
              <img
                src="/images/engg.svg"
                alt="engineers"
                class="box-border w-[130px] md:w-fit cursor-pointer transition-all ease-in-out delay-300 duration-300 hover:scale-125 z-50"
              />
              <img
                src="/images/ca.svg"
                alt="CA"
                class="box-border w-[130px] md:w-fit cursor-pointer transition-all ease-in-out delay-300 duration-300 hover:scale-125"
              />
              <img
                src="/images/adv.svg"
                alt="advocates"
                class="box-border w-[130px] md:w-fit cursor-pointer transition-all ease-in-out delay-300 duration-300 hover:scale-125"
              />
            </div>
            <div className="btmRight box-border w-full bp5:max-bp4:w-[340px] bp4:w-[660px] mx-auto flex flex-wrap justify-center items-center gap-2 bg-inherit">
              <img
                src="/images/teacher.svg"
                alt="teacher"
                class="box-border w-[130px] md:w-fit cursor-pointer transition-all ease-in-out delay-300 duration-300 hover:scale-125"
              />
              <img
                src="/images/lab.svg"
                alt="laboureres"
                class="box-border w-[130px] md:w-fit cursor-pointer transition-all ease-in-out delay-300 duration-300 hover:scale-125"
              />
              <img
                src="/images/off.svg"
                alt="officeres"
                class="box-border w-[130px] md:w-fit cursor-pointer transition-all ease-in-out delay-300 duration-300 hover:scale-125"
              />
              <img
                src="/images/govt off.svg"
                alt="government officers"
                class="box-border w-[130px] md:w-fit cursor-pointer transition-all ease-in-out delay-300 duration-300 hover:scale-125"
              />
            </div>
          </div>
        </div>
        <div className="btmDiv w-full flex flex-wrap justify-center bp2:justify-between items-center gap-2">
          <img
            src="/images/fund raise.svg"
            alt=""
            className="hover:animate-bounce cursor-pointer w-[200px] bp2:w-fit"
          />
          <img
            src="/images/donate.svg"
            alt=""
            className="hover:animate-bounce cursor-pointer w-[200px] bp2:w-fit"
          />
          <img
            src="/images/complaint.svg"
            alt=""
            className="hover:animate-bounce cursor-pointer w-[200px] bp2:w-fit"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
