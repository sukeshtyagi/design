import React from "react";

function Searches() {
  return (
    <div className="outermostSectionContainer box-border w-full xl1:w-[1440px]">
      <div className="sectionContainer box-border w-10/12 mx-auto py-12 mt-8 mx-auto flex flex-col gap-10">
        <h1 className="{style.popular}">
          POPULAR <span className="{style.search}">SEARCHES</span>
        </h1>
        <p className="para box-border -mt-8 text-center text-lg">
          See what other people are looking for
        </p>
        <div className="btmDiv box-border w-full mt-4 flex justify-between items-start gap-6">
          <div className="chdDiv box-border bg-red-100 p-1 w-[200px] h-[200px] relative flex flex-col gap-0 hover:scale-150"></div>
        </div>
      </div>
    </div>
  );
}

export default Searches;
