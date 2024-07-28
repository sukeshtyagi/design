import React from "react";
import style from "../styles/CustomerStories.module.css";
import CustomerCard1 from "./CustomerCard1";
import CustomerCard3 from "./CustomerCard3";
import CustomerCard4 from "./CustomerCard4";

function CustomerStories() {
  return (
    <div className={style.outerContainer}>
      <div className={style.innerContainer}>
        <div className={style.topDiv}>
          <div className={style.leftDiv}>
            <h1 className={style.heading}>
              CUSTOMER <span className={style.headingSpan}>STORIES</span>
            </h1>
            <p className={style.paraTopDiv}>
              Read What Our Users Have to Say About Their Experiences
            </p>
          </div>
          <div className={`${style.rightDiv}`}>
            <button className={`${style.viewBtn}`}>VIEW ALL</button>
          </div>
        </div>
        <div className={style.btmDiv}>
          <div className={style.btmChild1}>
            <CustomerCard1 />
            <CustomerCard4
              name=" Arjun M."
              profession="Teacher"
              img="/images/miss/card2.svg"
              width="263px"
              height="243px"
              paddingTop="18.23px"
              paddingLeft="9.67px"
              para="I needed a CA to help me with my taxes and financial planning. Decatlog made it incredibly easy to find a trustworthy and experienced Chartered Accountant in my area."
              paraMarginLeft="0px"
              paraWidth="213px"
              paraHeight="137px"
            />
          </div>

          <div className={style.btmChild2}>
            <CustomerCard3 />
            <CustomerCard4
              name="Rajesh K."
              profession="Lawyer"
              img="/images/miss/card4.svg"
              height="185px"
              width="540px"
              paddingTop="23.03px"
              paddingLeft="47px"
              para="Finding a trustworthy general physician was a priority for my family. Decatlog made the search simple and efficient. We found a compassionate and highly qualified doctor who provided excellent care during a medical emergency."
              paraMarginLeft="0px"
              paraWidth="438.81px"
              paraHeight="80.49px"
            />
            <CustomerCard4
              name="Anjali T."
              profession="Business Owner "
              img="/images/miss/card5.svg"
              height="215px"
              width="540px"
              paddingTop="23.03px"
              paddingLeft="47px"
              para="Running a business means I often need legal advice. I used Decatlog to find a reputable lawyer who specializes in business law. The lawyer I found through the platform was incredibly knowledgeable and helped me navigate some complex legal issues. Decatlog has become an invaluable resource for my business."
              paraMarginLeft="0px"
              paraWidth="438.81px"
              paraHeight="112.49px"
            />
          </div>

          <div className={style.btmChild3}>
            <CustomerCard4
              name="Vishal P."
              img="/images/miss/card6.svg"
              profession=" Government Officer"
              width="289px"
              height="241px"
              paddingTop="13px"
              paddingLeft="15px"
              para="As a government officer, I need assistance from professionals for different projects. Decatlog has made my job easier giving a reliable platform to find and connect with experts!"
              paraMarginLeft="50px"
              paraWidth="200.68px"
              paraHeight="133.47px"
            />

            <CustomerCard4
              name="Kavita N."
              profession="Small Business Owner"
              img="/images/miss/card6.svg"
              width="289px"
              height="432px"
              paddingTop="20px"
              paddingLeft="15px"
              para="Managing a small business means wearing many hats, and sometimes I need professional help to get things done right. Through Decatlog, I found a lawyer who specializes in small businesses and helped me draft important contracts and navigate legal challenges. The process was straightforward, and the lawyer was incredibly supportive. Decatlog has become an essential tool for my business operations."
              paraMarginLeft="50px"
              paraWidth="201px"
              paraHeight="295px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerStories;
