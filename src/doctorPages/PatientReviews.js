import React from "react";
import style from "./DoctorListing.module.css";
export function PatientReviews() {
  const reviewArray = [
    {
      img: "/images/doctor/patient.svg",
      name: "Emily W.",
      time: "2 Months ago",
      review:
        "Dr. Richard is an exceptional dentist who truly cares about his patients. His attention to detail and gentle approach put me at ease during my visit. I highly recommend him to anyone in need of dental care.",
    },
    {
      img: "/images/doctor/patient.svg",
      name: "Emily W.",
      time: "2 Months ago",
      review:
        "Dr. Richard is an exceptional dentist who truly cares about his patients. His attention to detail and gentle approach put me at ease during my visit. I highly recommend him to anyone in need of dental care.",
    },
    {
      img: "/images/doctor/patient.svg",
      name: "Emily W.",
      time: "2 Months ago",
      review:
        "Dr. Richard is an exceptional dentist who truly cares about his patients. His attention to detail and gentle approach put me at ease during my visit. I highly recommend him to anyone in need of dental care.",
    },
    {
      img: "/images/doctor/patient.svg",
      name: "Emily W.",
      time: "2 Months ago",
      review:
        "Dr. Richard is an exceptional dentist who truly cares about his patients. His attention to detail and gentle approach put me at ease during my visit. I highly recommend him to anyone in need of dental care.",
    },
  ];
  return (
    <div className={style.patientOuter}>
      <div className={style.upr}>
        <h1 className={style.reviewheading}>Patient Reviews</h1>
        <button className={style.view}>View All</button>
      </div>

      <div className={style.cardContainer}>
        {reviewArray.map((item) => (
          <div className={style.cardOuter}>
            <div className={style.top}>
              <div className={style.details}>
                <img src={item.img} alt="" />
                <div className={style.nameDiv}>
                  <p className={style.name}>{item.name}</p>
                  <p className={style.time}>{item.time}</p>
                </div>
              </div>
              <div className={style.stars}>
                <img src="/images/doctor/reviewStar.svg" alt="" />
                <img src="/images/doctor/reviewStar.svg" alt="" />
                <img src="/images/doctor/reviewStar.svg" alt="" />
                <img src="/images/doctor/reviewStar.svg" alt="" />
                <img src="/images/doctor/reviewStar.svg" alt="" />
              </div>
            </div>
            <p className={style.review}>{item.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SubmitFeedback() {
  return (
    <div className={style.outerSubmit}>
      <p className={style.submitheading}>Submit Feedback</p>
      <div className={style.lwer}>
        <div className={style.leftDiv}>
          <p className={style.feedback}>
            Submit a review for Dr Ronald Richard
          </p>
          <p className={style.feedback2}>Your feedback matters!</p>
        </div>
        <button className={style.submit}>Write a Review</button>
      </div>
    </div>
  );
}

export function Address() {
  return (
    <div className={style.addOuter}>
      <h1 className={style.addHeading}>Address</h1>
      <p className={style.addDetail}>
        123 Main Street, Suite 100, Chicago, IL 60601
      </p>
      <img src="/images/doctor/address.svg" alt="" className={style.imgAdd} />
    </div>
  );
}

export function MostViewed() {
  const mostViewedArray = [
    {
      img: "/images/doctor/mostViewed.svg",
      name: "Theresa Webb",
      speciality: "Dental Surgeon",
      qualification: "BDS, PhD",
      experience: "34 years of experience in speciality",
    },
    {
      img: "/images/doctor/mostViewed.svg",
      name: "Theresa Webb",
      speciality: "Dental Surgeon",
      qualification: "BDS, PhD",
      experience: "34 years of experience in speciality",
    },
    {
      img: "/images/doctor/mostViewed.svg",
      name: "Theresa Webb",
      speciality: "Dental Surgeon",
      qualification: "BDS, PhD",
      experience: "34 years of experience in speciality",
    },
  ];
  return (
    <div className={style.viewedOuter}>
      <h1 className={style.viewedHeading}>Most viewed Dentists in Bangalore</h1>
      <div className={style.imgContainer}>
        <div className={style.allCardContainer}>
          {mostViewedArray.map((item) => (
            <div className={style.viewedCardContainer}>
              <img src={item.img} alt="" className={style.viewedImg} />
              <div className={style.detailsContainer}>
                <h1 className={style.detail1}>{item.name}</h1>
                <p className={style.detail}>{item.speciality}</p>
                <p className={style.detail2}>{item.qualification}</p>
                <p className={style.detail2}>{item.experience}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={style.imgContainerView}>
          <img
            src="/images/doctor/specArrow.svg"
            alt=""
            className={style.imageView}
          />
        </div>
      </div>
    </div>
  );
}
