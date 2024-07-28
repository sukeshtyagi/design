import React from "react";
import style from "../styles/LatestBlogs.module.css";
function LatestBlogsCard1({ img }) {
  return (
    <div className={`${style.cardOuterDiv1}`}>
      <div className={style.cardTopDiv1}>
        <img src={img} alt="" className={style.image} />
      </div>
      <div className={style.cardLowerDiv1}>
        <h1 className={style.headingCard}>
          How to Choose the Right Professional for Your Needs
        </h1>
        <p className={style.para}>
          Choosing the right professional can be a daunting task, whether you
          need a doctor, engineer, teacher, or lawyer. With so many options
          available, how do you ensure you're making the best choice? In this
          blog, we'll provide tips and guidelines to help you find the perfect
          professional for your needs using Decatlog.
          <br />{" "}
          <span className="text-appGreen hover:text-black cursor-pointer">
            Read More...
          </span>
        </p>
      </div>
    </div>
  );
}

export default LatestBlogsCard1;
