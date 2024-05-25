import React from "react";

function Header() {
  return (
    <div className="headerContainer box-border w-10/12 mx-auto">
      <div className="headerContainer box-border w-full h-[50px] mt-6 py-[26px] flex justify-between items-center">
        <div className="logoDiv box-border ">
          <img
            src="/images/logo.svg"
            alt="Logo of app"
            className="box-border w-[194px] h-[30px]"
          />
        </div>

        <div className="svgDiv box-border block bp1:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-8 rounded-lg text-red-400 hover:text-black hover:bg-appGreen hover:ring-offset-4 hover:ring-2 hover:ring-appGreen	"
          >
            <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
            <path
              fill-rule="evenodd"
              d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z"
              clip-rule="evenodd"
            />
            <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
          </svg>
        </div>

        <div className="optionsContainer box-border cursor-pointer hidden bp1:flex text-black text-base xl1:text-xl flex justify-start items-center gap-4">
          <p className="navItemHome box-border  px-2 hover:text-appGreen hover:border hover:border-appGreen hover:rounded-lg">
            Home
          </p>
          <p className="navItemCategories box-border  px-2 hover:text-appGreen hover:border hover:border-appGreen hover:rounded-lg">
            Categories
          </p>
          <p className="navItemfunds box-border px-2 hover:text-appGreen hover:border hover:border-appGreen hover:rounded-lg">
            Raise Startup Funds
          </p>
          <p className="navItemInvestors box-border  px-2 hover:text-appGreen hover:border hover:border-appGreen hover:rounded-lg">
            Investors
          </p>
        </div>

        <div className="svgDiv2 box-border block sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-8 relative top-[1px] rounded-lg text-red-400 hover:text-black hover:bg-appGreen hover:ring-offset-4 hover:ring-2 hover:ring-appGreen	"
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <div className="btnDiv box-border hidden sm:flex text-black text-base font-normal xl1:text-xl flex justify-start items-cente gap-2">
          <button className="loginBtn box-border text-appGreen border-2 border-appGreen hover:font-medium hover:text-white hover:bg-appGreen px-4 rounded-xl">
            Login/Sign Up
          </button>
          <button className="donateBtn box-border text-black border-2 border-appGreen hover:text-white hover:bg-appGreen px-4 rounded-xl">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
