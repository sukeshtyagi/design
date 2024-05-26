import React from "react";
import LocationsCard from "./LocationsCard";

function Locations() {
  return (
    <div className="outermostSectionContainer box-border w-full xl1:w-[1440px] bg-bluish mx-auto ">
      <div className="sectionContainer box-border w-10/12 mx-auto mt-12 py-24 flex flex-col xl:flex-row justify-between gap-4 xl:gap-0">
        <div className="leftDiv w-[456px] box-border mx-auto">
          <img src="/images/map.svg" alt="" className="box-border w-[413px]" />
        </div>
        <div className="rightDiv box-border w-[647px]  mx-auto">
          <h1 className="heading box-border w-fit  font-semibold text-footerColor text-[32px] ">
            FEATURES <span className="text-appGreen">LOCATIONS</span>
          </h1>
          <p className="para box-border font-normal  text-footerChild text-sm">
            Our company is proud to offer comprehensive services across a wide
            range of locations to ensure that our clients receive the support
            they need, wherever they are.
          </p>
          <div className="div1 box-border mt-1 flex justify-start gap-4 p-1">
            <LocationsCard
              img={"/images/location.svg"}
              location="Jammu & Kashmir"
            />
            <LocationsCard img={"/images/location.svg"} location="Delhi" />
            <LocationsCard img={"/images/location.svg"} location="Punjab" />
          </div>

          <div className="div2 box-border mt-1 flex justify-start gap-4 p-1">
            <LocationsCard img={"/images/location.svg"} location="Haryana" />
            <LocationsCard
              img={"/images/location.svg"}
              location="Madhya Pradesh"
            />
            <LocationsCard
              img={"/images/location.svg"}
              location="uttar Pradesh"
            />
          </div>

          <div className="div3 box-border mt-1 flex justify-start gap-4 p-1">
            <LocationsCard img={"/images/location.svg"} location="Maharastra" />
            <LocationsCard img={"/images/location.svg"} location="Gujrat" />
            <LocationsCard img={"/images/location.svg"} location="Rajasthan" />
          </div>

          <div className="div4 box-border mt-1 flex justify-start gap-4 p-1">
            <LocationsCard
              img={"/images/location.svg"}
              location="Chattisgarh"
            />
            <LocationsCard img={"/images/location.svg"} location="Bihar" />
            <LocationsCard img={"/images/location.svg"} location="Kerala" />
          </div>

          <div className="div5 box-border mt-1 flex justify-start gap-4 p-1">
            <LocationsCard
              img={"/images/location.svg"}
              location="Arunachal Pradesh"
            />
            <LocationsCard img={"/images/location.svg"} location="Assam" />
            <LocationsCard
              img={"/images/location.svg"}
              location="Andhra Pradesh"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;
