import React from "react";
import style from "../styles/LatestBlogs.module.css";
function LatestBlogsCard3({ img }) {
  return (
    <div className={`${style.cardOuterDiv3}`}>
      <div className={style.cardTopDiv3}>
        <img src={img} alt="" className={style.image} />
      </div>
      <div className={style.cardLowerDiv3}>
        <h1 className={style.headingCard}>
          Success Stories: How Decatlog Connected People with the Right
          Professionals
        </h1>
        <p className={style.para}>
          At Decatlog, our mission is to connect people with trusted
          professionals who can make a difference in their lives. In this blog,
          we share real-life success stories from users who found the perfect
          professionals through Decatlog.
          <br />{" "}
          <span className="text-appGreen hover:text-black cursor-pointer">
            Read More...
          </span>
        </p>
      </div>
    </div>
  );
}

export default LatestBlogsCard3;
