import React from "react";

function Miss() {
  return (
    <div className="missContainer  box-border w-10/12 mx-auto">
      <div className="missContainer box-border w-full flex flex-col xl1:flex-row justify-between items-center">
        <div className="leftDiv box-border w-full xl1:w-2/5 mx-auto flex flex-col ">
          <h1 className="heading box-border text-center xl1:text-left py-2 text-appGreen text-4xl font-extrabold    ">
            DOWNLOAD OUR APP
          </h1>
          <p className="para box-border w-full sm:w-3/5 mx-auto text-center xl1:text-left text-lg md:text-2xl">
            Download the app from apple or google store and get the best
            services.
          </p>
          <div className="imgDiv box-border w-full mx-auto flex flex-col sm:flex-row justify-center items-center gap-2">
            <img
              src="/images/playstore.svg"
              alt=""
              className="box-border w-[250px] h-[90px] cursor-pointer hover:-skew-x-12"
            />
            <img
              src="/images/apple.svg"
              alt=""
              className="box-border w-[250px] h-[90px] cursor-pointer hover:-skew-x-12"
            />
          </div>
        </div>
        <div className="rightDiv box-border w-full mx-auto mt-24 xl1:w-1/2 h-[400px] xl1:h-[500px] flex justify-center items-center">
          <img
            src="/images/mobiles.svg"
            alt=""
            className="box-border h-[500px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Miss;
