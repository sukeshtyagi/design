import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function NeedHelp() {
  return (
    <div className="sectionContainer box-border w-10/12 py-12 mx-auto flex flex-col xl:flex-row justify-between items-center gap-4 xl:gap-0">
      <div className="leftDiv w-1/2 box-border flex flex-col gap-2">
        <h1 className="heading box-border font-semibold	text-footerColor text-[32px]">
          NEED{" "}
          <span className="font-semibold text-appGreen text-[32px]">
            HELP & SUPPORT
          </span>
        </h1>
        <p className="para box-border -mt-4 text-footerChild text-sm font-normal">
          We are available at ur earliest convenience.We believe in customer
          satisfaction.
        </p>
        <div className="detailContainer box-border flex justify-start items-center gap-2 text-footerColor text-base font-normal">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="box-border text-appGreen p-1 block border rounded-xl shadow-sm"
          />
          info@companyname.com
        </div>
        <div className="detailContainer box-border mt-3 flex justify-start items-center gap-2 text-footerColor text-base font-normal">
          <FontAwesomeIcon
            icon={faPhone}
            className="box-border text-appGreen p-1 block border rounded-xl shadow-sm"
          />
          info@companyname.com
        </div>
      </div>
      <div className="rightDiv w-full sm:w-fit p-6 box-border shadow-all rounded-xl flex flex-col gap-2.5">
        <div className="topDiv w-full box-border flex justify-center items-center gap-2.5">
          <div className="left box-border w-1/2 sm:w-[220px] h-[56px] flex flex-col gap-1 border rounded-t border-footerChild px-2 py-1 cursor-pointer">
            <label htmlFor="" className="font-normal text-xs">
              First Name
            </label>
            <input type="text" value="" className="cursor-pointer" />
          </div>

          <div className="right box-border w-1/2 sm:w-[220px] h-[56px] flex flex-col gap-1 border rounded-t border-footerChild px-2 py-1 cursor-pointer">
            <label htmlFor="" className="font-normal text-xs">
              Last Name
            </label>
            <input type="text" value="" />
          </div>
        </div>

        <div className="midDiv box-border flex justify-center items-center gap-2.5">
          <div className="left box-border w-1/2 sm:w-[220px] h-[56px] flex flex-col gap-1 border rounded-t border-footerChild px-2 py-1 cursor-pointer">
            <label htmlFor="" className="font-normal text-xs">
              Email
            </label>
            <input type="text" value="" className="cursor-pointer" />
          </div>
          <div className="right box-border w-1/2 sm:w-[220px] h-[56px] flex flex-col gap-1 border rounded-t border-footerChild px-2 py-1 cursor-pointer">
            <label htmlFor="" className="font-normal text-xs">
              Phone Number
            </label>
            <input type="text" value="" />
          </div>
        </div>

        <div className="btmDiv box-border flex justify-center items-center gap-2.5">
          <div className="left box-border w-full sm:w-[456px] h-[145px] flex flex-col gap-1 border rounded-t border-footerChild px-2 py-1 cursor-pointer">
            <label htmlFor="" className="font-normal text-xs">
              Email
            </label>
            <textarea
              rows={8}
              type="text"
              value=""
              className="cursor-pointer"
            />
          </div>
        </div>

        <button className="btn box-border w-fit border bg-red-500 cursor-pointer hover:bg-red-500">
          Submit
        </button>
      </div>
    </div>
  );
}

export default NeedHelp;
