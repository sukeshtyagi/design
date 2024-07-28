import React, { useState } from "react";
import style from "../styles/FAQ.module.css";
import FaqCard from "./FaqCard";

function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Decatlog?",
      answer:
        "Decatlog is a comprehensive listing website that helps you discover and connect with trusted professionals across various fields, including Doctors, Engineers, etc.",
    },
    {
      question: "How do I search for a professional on Decatlog?",
      answer:
        "Simply enter the profession or specific professional you are looking for in the search text box on the homepage. You can also use filters to search by location, and other criteria.",
    },
    {
      question: " Is there a fee to use Decatlog?",
      answer:
        " No, searching for professionals on Decatlog is completely free. However, individual professionals may charge for their services, and any fees should be discussed directly with them.",
    },
    {
      question: "How are the professionals on Decatlog verified?",
      answer:
        "We strive to ensure that all professionals listed on Decatlog are verified and trustworthy. We conduct thorough checks and reviews to maintain the quality and reliability of our listings.",
    },
    {
      question: "Can I leave a review for a professional I found on Decatlog  ",
      answer:
        "Yes, we encourage users to leave reviews for professionals they have interacted with. Your feedback helps other users make informed decisions.",
    },
    {
      question: "How can I contact a professional I find on Decatlog?",
      answer:
        "Once you find a professional that meets your needs, you can contact them directly through the contact information provided on their profile.",
    },
  ];

  return (
    <div
      className={style.faqOuter}
      style={{ height: expandedIndex !== null ? "648px" : "" }}
    >
      <div className={style.faqInner}>
        <h1 className={style.faqHeading}>
          FREQUENTLY ASKED QUESTIONS{" "}
          <span className={style.faqHeadingSpan}>(FAQ’s)</span>
        </h1>
        <div
          className={style.faqBtmContainer}
          style={{ height: expandedIndex !== null ? "400px" : "" }}
        >
          {faqData.map((faq, index) => (
            <FaqCard
              key={index}
              isExpanded={expandedIndex === index}
              onClick={() => toggleExpand(index)}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
