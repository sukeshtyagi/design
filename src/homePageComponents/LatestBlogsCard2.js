import React from "react";
import style from "../styles/LatestBlogs.module.css";
function LatestBlogsCard2({ img }) {
  return (
    <div className={`${style.cardOuterDiv2}`}>
      <div className={style.cardTopDiv2}>
        <img src={img} alt="" className={style.image} />
      </div>
      <div className={style.cardLowerDiv2}>
        <h1 className={style.headingCard}>
          Top Benefits of Using Decatlog for Finding Professionals
        </h1>
        <p className={style.para}>
          In today’s fast-paced world, finding reliable professionals can be
          challenging. Decatlog simplifies this process by providing a
          comprehensive platform for connecting with experts across various
          fields. In this blog, we'll explore the top benefits of using Decatlog
          for all your professional needs.
          <br />{" "}
          <span className="text-appGreen hover:text-black cursor-pointer">
            Read More...
          </span>
        </p>
      </div>
    </div>
  );
}

export default LatestBlogsCard2;
