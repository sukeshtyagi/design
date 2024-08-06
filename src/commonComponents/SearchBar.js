import React, { useState, useEffect, useRef } from "react";
import style from "./SearchBar.module.css";
import SuggestionsDiv from "../homePageComponents/SuggestionsDiv";
import { useNavigate } from "react-router-dom";

function SearchBar({ userDashboard, placeholderProp, suggestionDiv }) {
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const searchBarRef = useRef(null);
  const navigate = useNavigate();

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setShowSuggestion(false);
    }
  };

  const handleSearchLocationClick = () => {
    setShowSuggestion(false);
  };

  const handleSearchIconClick = () => {
    if (query.trim() !== "") {
      setSearchTerm(query);
      setShowSuggestion(true);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && query.trim() !== "") {
      setSearchTerm(query);
      setQuery("");
      setShowSuggestion(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={searchBarRef}
      className={`${style.upperDiv} relative`}
      style={userDashboard ? { height: "fit-content" } : {}}
    >
      {!userDashboard && (
        <div className={style.topUpper}>
          <h1 className={style.paraTopUpper}>
            Discover & Search,
            <span className={style.paraSpanTopUpper}>
              {" "}
              Trusted Professionals Near You
            </span>
          </h1>
        </div>
      )}

      <div className={`${style.btmUpper}`}>
        <div
          className={`${style.leftBtmUpper}`}
          onClick={handleSearchLocationClick}
        >
          <div className={style.iconDiv}>
            <img src="/images/services/locationIcon.svg" alt="" />
          </div>

          <div className={`${style.inputIconDiv}`}>
            <input
              type="text"
              placeholder="Location"
              className={`${style.inputBtm} box-border text-black cursor-pointer  outline-none`}
            />
            <img
              src="/images/services/downArrow.svg"
              alt=""
              className={style.downIcon}
            />
          </div>
        </div>
        <div
          className={`${style.midBtmUpper} relative`}
          onClick={() => setShowSuggestion(!showSuggestion)}
        >
          <input
            type="text"
            className={`${style.input2} cursor-pointer outline-none text-black`}
            placeholder={placeholderProp}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className={style.rightBtmUpper} onClick={handleSearchIconClick}>
          <img src="/images/services/Search.svg" alt="" />
        </div>
      </div>
      {showSuggestion && (
        <SuggestionsDiv
          suggestionDiv={suggestionDiv}
          searchTerm={searchTerm}
        />
      )}
    </div>
  );
}

export default SearchBar;
