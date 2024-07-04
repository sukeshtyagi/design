import React from "react";
import style from "./Faq.module.css";

function Faq({ docListing, teacherListing, caListing, labourListing }) {
  const faqData = {
    docListing: [
      "Which dentist is best for emergency dental care in my area?",
      "What are the treatments available for common dental problems?",
      "Should I visit the dentist regularly even if I don't have any dental issues?",
      "What questions should I ask my dentist about my oral health?",
      "What is the average cost of dental treatments in my area?",
      "What are the main causes of tooth decay and gum disease?",
      "How can I find a reputable dentist for specialized treatments in my area?",
    ],
    teacherListing: [
      "Which English Teacher is best in my area?",
      "Which English Teacher is best in my area?",
      "Which English Teacher is best in my area?",
      "Which English Teacher is best in my area?",
      "Which English Teacher is best in my area?",
      "Which English Teacher is best in my area?",
      "Which English Teacher is best in my area?",
    ],
    caListing: [
      "Which Income Tax CA is best in my area?",
      "Which Income Tax CA is best in my area?",
      "Which Income Tax CA is best in my area?",
      "Which Income Tax CA is best in my area?",
      "Which Income Tax CA is best in my area?",
      "Which Income Tax CA is best in my area?",
      "Which Income Tax CA is best in my area?",
    ],
    labourListing: [
      "Which female maid is best in my area?",
      "Which female maid is best in my area?",
      "Which female maid is best in my area?",
      "Which female maid is best in my area?",
      "Which female maid is best in my area?",
      "Which female maid is best in my area?",
      "Which female maid is best in my area?",
    ],
  };

  const renderFaqItems = (faqArray) =>
    faqArray.map((question) => (
      <div className={style.cardOuter} key={question}>
        <p className={style.ques}>{question}</p>
        <img src="/images/doctor/faqArrow.svg" alt="" className={style.image} />
      </div>
    ));

  return (
    <div className={style.faqOuter}>
      <div className={style.faqInner}>
        <h1 className={style.headingFaq}>Frequently Asked Questions</h1>
        {docListing && renderFaqItems(faqData.docListing)}
        {teacherListing && renderFaqItems(faqData.teacherListing)}
        {caListing && renderFaqItems(faqData.caListing)}
        {labourListing && renderFaqItems(faqData.labourListing)}
      </div>
    </div>
  );
}

export default Faq;
