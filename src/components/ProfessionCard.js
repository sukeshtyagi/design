import React from "react";

function ProfessionCard({ img, title }) {
  return (
    <div className="imgContainer box-border w-[270px] h-[72px] mx-auto flex justify-between items-center bg-white border rounded px-2 hover:bg-gray-100 group">
      <div className="leftDiv box-border">
        <img src={img} alt="" />
      </div>
      <div className="rightDiv box-border w-3/4 h-[72px] pt-2 ">
        <h1 className="text-xl w-full font-normal">{title}</h1>
        <p className="para box-border -mt-2 text-base whitespace-nowrap overflow-hidden text-ellipsis group-hover:whitespace-normal group-hover:overflow-visible">
          We achieve perfection through dedication.
        </p>
      </div>
    </div>
  );
}

export default ProfessionCard;
