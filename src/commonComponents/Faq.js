import React from "react";
import style from "./Faq.module.css";
function Faq({ docListing, teacherListing }) {
  const docFaqArray = [
    "Which dentist is best for emergency dental care in my area?",
    "What are the treatments available for common dental problems?",
    "Should I visit the dentist regularly even if I don't have any dental issues?",
    "What questions should I ask my dentist about my oral health?",
    "What is the average cost of dental treatments in my area?",
    "What are the main causes of tooth decay and gum disease?",
    "How can I find a reputable dentist for specialized treatments in my area?",
  ];

  const teacherFaqArray = [
    "Which English Teacher is best in my area?",
    "Which English Teacher is best in my area?",
    "Which English Teacher is best in my area?",
    "Which English Teacher is best in my area?",
    "Which English Teacher is best in my area?",
    "Which English Teacher is best in my area?",
    "Which English Teacher is best in my area?",
  ];
  return (
    <div className={style.faqOuter}>
      <div className={style.faqInner}>
        <h1 className={style.headingFaq}>Frequently Asked Questions</h1>

        {docListing &&
          docFaqArray.map((question) => (
            <div className={style.cardOuter}>
              <p className={style.ques}>{question}</p>
              <img
                src="/images/doctor/faqArrow.svg"
                alt=""
                className={style.image}
              />
            </div>
          ))}

        {teacherListing &&
          teacherFaqArray.map((question) => (
            <div className={style.cardOuter}>
              <p className={style.ques}>{question}</p>
              <img
                src="/images/doctor/faqArrow.svg"
                alt=""
                className={style.image}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Faq;
