import React from "react";

function LocationsCard({ img, location }) {
  return (
    <div className="outer box-border  flex justify-start items-baseline gap-4">
      <img src={img} alt="" />
      <p className="para box-border text-base text-footerColor">{location}</p>
    </div>
  );
}

export default LocationsCard;   
