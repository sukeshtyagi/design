import React from "react";
import style from "../styles/Services.module.css";
import CarouselComp from "./CarouselComp";
import ServicesCard from "./ServicesCard";
import ServiceCard2 from "./ServiceCard2";
import ServicesCard3 from "./ServicesCard3";

function Services() {
  return (
    <div className="outermostSectionContainer box-border w-full xl1:w-[1440px] mx-auto">
      <div className="sectionContainer box-border w-[1128px] pt-10 mx-auto bg-white">
        <div
          className={`${style.upperDiv} flex flex-col gap-[14px] justify-start items-start bg-white`}
        >
          <div className={style.topUpper}>
            <h1 className={style.paraTopUpper}>
              Lorem Ipsum Dolor Sit Amet,
              <span className={style.paraSpanTopUpper}>
                {" "}
                Consectetur Adipiscing Elit
              </span>
            </h1>
          </div>

          <div
            className={`${style.btmUpper} flex justify-start items-center gap-0`}
          >
            <div className={`${style.leftBtmUpper} flex gap-0 bg-white`}>
              <div className={style.iconDiv}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`${style.iconLocation} box-border hover:ring-2 ring-red-500`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>

              <div className={`${style.inputIconDiv} flex gap-2`}>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Location"
                  className={`${style.inputBtm} box-border cursor-pointer hover:ring-2 ring-red-500`}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.0}
                  stroke="currentColor"
                  className={`${style.downIcon} cursor-pointer hover:ring-2 ring-red-500`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            <div className={style.midBtmUpper}>
              <input
                type="text"
                name=""
                id=""
                className={`${style.input2} cursor-pointer hover:ring-2 ring-red-500`}
                placeholder="Search doctors, advocates, teachers and many more....."
              />
            </div>

            <div className={style.rightBtmUpper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className={`${style.lensIcon} cursor-pointer hover:ring-2 ring-red-500`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ServicesCard
        img="/images/services/doc.svg"
        title="Doctors"
        bcg="radial-gradient(50% 52.82% at 50% 50%, #FFFFFF 28.4%, #D7E6F4 63.9%, #A7C7E7 100%)"
      />
      <ServicesCard
        img="/images/services/engg.svg"
        title="Engineers"
        bcg="radial-gradient(50% 52.82% at 50% 50%, #FFFFFF 28.4%, rgba(254, 152, 50, 0.4) 63.9%, rgba(255, 141, 34, 0.6) 100%)"
      />
      <ServicesCard
        img="/images/services/ca.png"
        title="CA's"
        bcg="radial-gradient(50% 52.82% at 50% 50%, #FFFFFF 28.4%, rgba(11, 219, 182, 0.36) 63.9%, rgba(11, 219, 182, 0.9) 100%) "
      />
      <ServicesCard
        img="/images/services/adv.svg"
        title="Advocates"
        bcg="radial-gradient(50% 52.82% at 50% 50%, #FFFFFF 28.4%, rgba(189, 178, 255, 0.5) 63.9%, rgba(189, 178, 255, 0.8) 100%)
"
      />
      <ServicesCard
        img="/images/services/teacher.svg"
        title="Teachers"
        bcg="radial-gradient(50% 52.82% at 50% 50%, #FFFFFF 28.4%,
      rgba(253, 255, 182, 0.5) 63.9%, rgba(253, 255, 182, 0.8) 100%)"
      />
      <ServicesCard
        img="/images/services/lab.svg"
        title="Labours"
        bcg="radial-gradient(50% 52.82% at 50% 50%, #FFFFFF 28.4%, rgba(255, 173, 173, 0.5) 63.9%, #FFADAD 100%)"
      />
      <ServicesCard
        img="/images/services/off.svg"
        title="Officers"
        bcg="
      radial-gradient(50% 52.82% at 50% 50%, #FFFFFF 28.4%, rgba(255, 198, 255, 0.8) 63.9%, #FFC6FF 100%) 
      "
      />
      <ServicesCard
        img="/images/services/govt off.svg"
        title="Govt. Officers"
        bcg="radial-gradient(50% 52.82% at 50% 50%, #FFFFFF 28.4%, rgba(155, 246, 255, 0.5) 63.9%, rgba(155, 246, 255, 0.8) 100%) 
"
      />
      <ServiceCard2
        title1="START FUNDRAISING"
        img="/images/services/fund.svg"
        bcg="rgba(0, 134, 110, 1)"
      />
      <ServiceCard2
        title1="DONATE NOW"
        img="/images/services/donate.svg"
        bcg="rgba(36, 54, 94, 1)"
      />
      <ServicesCard3 />
      <CarouselComp />
      {/*
   <div className="midDiv box-border overflow-x-hidden w-full bg-inherit flex  flex-col bp2:flex-row justify-between items-center gap-4">
          <div className="leftMid box-border w-fit bg-appGreen rounded-xl p-1">
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
  */}
    </div>
  );
}

export default Services;
