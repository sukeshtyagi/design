import React, { useState } from "react";

function Trial() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="" style={{position:"relative",height:"50px",border:"1px solid red"}}>
      <div
        className=""
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        sort By
      </div>
      {showDropdown && (
        <div className="absolute border-stone-900	"
        style={{border:"1px solid green",}}>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>
      )}
    </div>
  );
}

export default Trial;
