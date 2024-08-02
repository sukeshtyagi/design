import React from "react";
import style from "../styles/SuggestionDiv.module.css";
function SuggestionsDiv({ suggestionDiv }) {
  const searches = [
    { title: "Criminal Lawyer" },
    { title: "Criminal Lawyer" },
    { title: "Criminal Lawyer" },
    { title: "Criminal Lawyer" },
    { title: "Criminal Lawyer" },
    { title: "Criminal Lawyer" },
    { title: "Criminal Lawyer" },
    { title: "Criminal Lawyer" },
    { title: "Criminal Lawyer" },
    { title: "Criminal Lawyer" },
    { title: "Criminal Lawyer" },
    { title: "Criminal Lawyer" },
    { title: "Criminal Lawyer" },
    { title: "Criminal Lawyer" },
    { title: "Criminal Lawyer" },
  ];
  return (
    <div
      className={style.suggestionsOutermost}
      style={suggestionDiv ? { top: "50px" } : {}}
    >
      <div className={style.suggestionsOuter}>
        <div className={style.topDiv}>
          <div className={style.left}>
            <p className={style.recent}>Recent Searches</p>
            <div className={style.div1}>
              <img src="/images/services/search.svg" alt="" />
              <p className={style.search}>Dentist</p>
            </div>
            <div className={style.div1}>
              <img src="/images/services/search.svg" alt="" />
              <p className={style.search}>English Teacher</p>
            </div>
          </div>
          <div className={style.right}>
            <p className={style.clear}>Clear All</p>
          </div>
        </div>
        <div className={style.btmDiv}>
          <p className={style.trending}>Trending Searches</p>
          <div className={style.cardsContainer}>
            {searches.map((search, index) => (
              <div className={style.cardDiv} key={index}>
                <img
                  src="/images/services/trend.svg"
                  alt=""
                  className={style.image}
                />
                <p className={style.searchCard}>{search.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuggestionsDiv;
