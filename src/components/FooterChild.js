import React from "react";

function FooterChild({
  heading,
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
  link7,
  link8,
}) {
  return (
    <div className="outer box-border w-fit flex flex-col">
      <h1 className="heading box-border font-semibold	text-xl text-appGreen">
        {heading}
      </h1>
      <p className="para box-border mt-2 font-normal text-sm text-footerChild cursor-pointer hover:underline hover:decoration-footerChild  hover:underline-offset-4 hover:text-appGreen hover:scale-125">
        {link1}
      </p>
      <p className="para box-border -mt-[3px] font-normal text-sm text-footerChild cursor-pointer hover:underline hover:decoration-footerChild hover:underline-offset-4 hover:text-appGreen hover:scale-125">
        {link2}
      </p>
      <p className="para box-border -mt-[3px] font-normal text-sm text-footerChild cursor-pointer hover:underline hover:decoration-footerChild hover:underline-offset-4 hover:text-appGreen hover:scale-125">
        {link3}
      </p>
      <p className="para box-border -mt-[3px] font-normal text-sm text-footerChild cursor-pointer hover:underline hover:decoration-footerChild hover:underline-offset-4 hover:text-appGreen hover:scale-125">
        {link4}
      </p>
      <p className="para box-border -mt-[3px] font-normal text-sm text-footerChild cursor-pointer hover:underline hover:decoration-footerChild hover:underline-offset-4 hover:text-appGreen hover:scale-125">
        {link5}
      </p>
      <p className="para box-border -mt-[3px] font-normal text-sm text-footerChild cursor-pointer hover:underline hover:decoration-footerChild hover:underline-offset-4 hover:text-appGreen hover:scale-125">
        {link6}
      </p>
      <p className="para box-border -mt-[3px] font-normal text-sm text-footerChild cursor-pointer hover:underline hover:decoration-footerChild hover:underline-offset-4 hover:text-appGreen hover:scale-125">
        {link7}
      </p>
      <p className="para box-border -mt-[3px] font-normal text-sm text-footerChild cursor-pointer hover:underline hover:decoration-footerChild hover:underline-offset-4 hover:text-appGreen hover:scale-125">
        {link8}
      </p>
    </div>
  );
}

export default FooterChild;
