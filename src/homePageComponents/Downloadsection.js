import React from "react";
import style from "../styles/Miscellaneous.module.css";

function Downloadsection() {
  return (
    <div className={style.missContainer}>
      <div className={style.missInnerContainer}>
        <div className={style.leftDiv}>
          <h1 className={style.heading}>DOWNLOAD OUR APP</h1>
          <p className={style.para}>
            Experience seamless functionality and exclusive features with our
            app. Download now to stay connected and enhance your journey!
          </p>
          <div className={style.imgDiv}>
            <img src="/images/playstore.svg" alt="" className={style.image} />
            <img src="/images/apple.svg" alt="" className={style.image} />
          </div>
        </div>
        <div className={style.rightDiv}>
          <img src="/images/mobiles.svg" alt="" className={style.rightImage} />
        </div>
      </div>
    </div>
  );
}

export default Downloadsection;
