import React from "react";
import style from "./SearchBar.module.css";
function SearchBar() {
  return (
    <div className={`${style.upperDiv} `}>
      <div className={style.topUpper}>
        <h1 className={style.paraTopUpper}>
          Lorem Ipsum Dolor Sit Amet,
          <span className={style.paraSpanTopUpper}>
            {" "}
            Consectetur Adipiscing Elit
          </span>
        </h1>
      </div>

      <div className={`${style.btmUpper}`}>
        <div className={`${style.leftBtmUpper}`}>
          <div className={style.iconDiv}>
            <img src="/images/services/locationIcon.svg" alt="" />
          </div>

          <div className={`${style.inputIconDiv}`}>
            <input
              type="text"
              name=""
              id=""
              placeholder="Location"
              className={`${style.inputBtm} box-border cursor-pointer  outline-none`}
            />
            <img
              src="/images/services/downArrow.svg"
              alt=""
              className={style.downIcon}
            />
          </div>
        </div>
        <div className={style.midBtmUpper}>
          <input
            type="text"
            name=""
            id=""
            className={`${style.input2} cursor-pointer outline-none`}
            placeholder="Search doctors, advocates, teachers and many more....."
          />
        </div>

        <div className={style.rightBtmUpper}>
          <img src="/images/services/Search.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
