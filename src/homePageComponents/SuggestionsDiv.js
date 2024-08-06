import React, { useState, useEffect } from "react";
import style from "../styles/SuggestionDiv.module.css";

function SuggestionsDiv({
  suggestionDiv,
  searchTerm,
  setSearchTerm,
  setQuery,
}) {
  const [recentSearches, setRecentSearches] = useState([
    "Dentist",
    "English Teacher",
  ]);

  useEffect(() => {
    if (searchTerm && !recentSearches.includes(searchTerm)) {
      setRecentSearches((prevSearches) =>
        [searchTerm, ...prevSearches].slice(0, 10)
      );
    }
  }, [searchTerm]);

  const searches = [
    { title: "Criminal Lawyer" },
    { title: "Dental Surgeon" },
    { title: "School Teacher" },
    { title: "Software Engineer" },
    { title: "Chartered Accountant" },
    { title: "Civil Engineer" },
    { title: "General Physician" },
    { title: "Laborer" },
    { title: "Government Officer" },
    { title: "Mechanical Engineer" },
    { title: "Tax Consultant" },
    { title: "Maid" },
    { title: "Corporate Lawyer" },
    { title: "Primary School Teacher" },
    { title: "Construction Worker" },
    { title: "Surgeon" },
  ];

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  const handleSuggestionClick = (title) => {
    setQuery(title); // Update the query in the SearchBar input box
    setRecentSearches((prev) => [title, ...prev].slice(0, 10));
  };

  return (
    <div
      className={style.suggestionsOutermost}
      style={suggestionDiv ? { top: "50px" } : {}}
    >
      <div className={style.suggestionsOuter}>
        <div className={style.topDiv}>
          <div className={style.left}>
            <p className={style.recent}>Recent Searches</p>
            {recentSearches.map((search, index) => (
              <div
                className={style.div1}
                key={index}
                onClick={() => handleSuggestionClick(search)}
              >
                <img src="/images/services/search.svg" alt="" />
                <p className={style.search}>{search}</p>
              </div>
            ))}
          </div>
          <div className={style.right}>
            <p className={style.clear} onClick={clearRecentSearches}>
              Clear All
            </p>
          </div>
        </div>
        <div className={style.btmDiv}>
          <p className={style.trending}>Trending Searches</p>
          <div className={style.cardsContainer}>
            {searches.map((search, index) => (
              <div
                className={style.cardDiv}
                key={index}
                onClick={() => handleSuggestionClick(search.title)}
              >
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
