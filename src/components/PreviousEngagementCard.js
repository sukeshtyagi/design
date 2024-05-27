import React from "react";

function PreviousEngagementCard({
  img,
  name,
  service,
  about,
  date,
  stars,
  rating,
}) {
  let newStars = parseInt(stars);
  const starEmojis = Array(newStars).fill("⭐");
  console.log(typeof newStars);

  return (
    <div className="outer box-border  h-[125px] border rounded p-2 flex justify-between items-start hover:scale-125 hover:bg-appGreen">
      <div className="left box-border w-full flex flex-col gap-3">
        <img src={img} alt="" className="w-[71px] h-[71px]" />
        <h1 className="name box-border text-[12px] font-medium text-footerColor">
          {name}
        </h1>
      </div>

      <div className="right box-border w-full h-full flex flex-col gap-0 justify-between">
        <h1 className="title box-border text-[17px] font-medium text-footerColor">
          {service}
        </h1>
        <p className="about box-border -mt-2 text-[10px] font-normal text-footerChild">
          {about}
        </p>
        <p className="about box-border -mt-4 text-[10px] font-normal text-footerChild">
          {date}
        </p>
        <div className="starsRatign box-border -mt-8 w-full  flex justify-between items-center">
          <div className="stars box-border flex gap-[3px] items-center">
            {starEmojis.map((star, index) => (
              <span key={index} className="block w-[15px] h-[15px]">
                {star}
              </span>
            ))}
          </div>
          <p className="rating box-border text-[12px] relative top-4 font-medium text-footerChild">
            {rating}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PreviousEngagementCard;
