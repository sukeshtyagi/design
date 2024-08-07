import React, { useState } from "react";
import style from "./EnterDetailsPage.module.css";

function EnterDetailsPage({ handleStepChange }) {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedSyllabus, setSelectedSyllabus] = useState("");

  const [mobileNumber, setMobileNumber] = useState("");
  const [whatsAppNumber, setWhatsAppNumber] = useState("");
  const [isSameAsMobile, setIsSameAsMobile] = useState(false);

  const [dropdownState, setDropdownState] = useState({
    gender: false,
    city: false,
    location: false,
    subject: false,
    syllabus: false,
  });

  const handleDropdownToggle = (dropdownName) => {
    setDropdownState((prevState) => ({
      gender: false,
      city: false,
      location: false,
      subject: false,
      syllabus: false,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    setDropdownState((prevState) => ({ ...prevState, gender: false }));
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setDropdownState((prevState) => ({ ...prevState, city: false }));
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setDropdownState((prevState) => ({ ...prevState, location: false }));
  };

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setDropdownState((prevState) => ({ ...prevState, subject: false }));
  };

  const handleSyllabusSelect = (syllabus) => {
    setSelectedSyllabus(syllabus);
    setDropdownState((prevState) => ({ ...prevState, syllabus: false }));
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
    if (isSameAsMobile) {
      setWhatsAppNumber(e.target.value);
    }
  };

  const handleCheckboxChange = () => {
    setIsSameAsMobile((prevValue) => {
      const newValue = !prevValue;
      if (newValue) {
        setWhatsAppNumber(mobileNumber);
      } else {
        setWhatsAppNumber("");
      }
      return newValue;
    });
  };

  return (
    <div className={style.contentDiv}>
      <div className={style.topDiv}>
        <p className={style.heading}>Enter your Details</p>
        <p className={style.stepNumber}>1 of 6 Completed</p>
      </div>
      <img
        src="/images/vendorLogin/indicator.svg"
        alt=""
        className="progressBar"
      />

      <div className={style.form}>
        <div className={style.nameContainer}>
          <div className={style.titleDiv}>
            <p className={style.title}>Title</p>
            <img src="/images/vendorLogin/arrow.svg" alt="" className="" />
          </div>
          <input type="text" placeholder="Name" className={style.input} />
        </div>

        <div className={style.genderDiv}>
          <input
            type="text"
            placeholder="Gender"
            value={selectedGender}
            className={style.inputGender}
            readOnly
            onClick={() => handleDropdownToggle("gender")}
          />

          <img
            src="/images/vendorLogin/arrow.svg"
            alt=""
            className="cursor-pointer"
            onClick={() => handleDropdownToggle("gender")}
          />

          {dropdownState.gender && (
            <div className={style.genderOptions}>
              <p onClick={() => handleGenderSelect("Male")}>Male</p>
              <p onClick={() => handleGenderSelect("Female")}>Female</p>
            </div>
          )}
        </div>

        <div className={style.mobileNumberContainer}>
          <div className={style.mobileTopDiv}>
            <div className={style.code}>
              <img src="/images/vendorLogin/flag.svg" alt="" className="" />
              <input type="text" placeholder="+91" className={style.input3} />
            </div>
            <input
              type="text"
              placeholder="Mobile Number"
              className={style.input}
              value={mobileNumber}
              onChange={handleMobileNumberChange}
            />
          </div>
          <p className={style.addNewNumber}>+ Add Another Mobile Number</p>
        </div>

        <div className={style.whatsAppNumberContainer}>
          <div className={style.mobileTopDiv}>
            <div className={style.code}>
              <img src="/images/vendorLogin/flag.svg" alt="" className="" />
              <input type="text" placeholder="+91" className={style.input3} />
            </div>
            <input
              type="text"
              placeholder="Whatsapp Number"
              className={style.input}
              value={whatsAppNumber}
              onChange={(e) => setWhatsAppNumber(e.target.value)}
              disabled={isSameAsMobile}
            />
          </div>

          <div className={style.whatsAppBottomContainer}>
            <p className={style.addNewNumber}>+ Add Landline Number</p>
            <div className={style.addNewNumber2}>
              <input
                type="checkbox"
                className={style.checkBox}
                checked={isSameAsMobile}
                onChange={handleCheckboxChange}
              />{" "}
              Same as Mobile Number
            </div>
          </div>
        </div>

        <div className={style.cityDiv}>
          <input
            type="text"
            placeholder="City"
            value={selectedCity}
            className={style.inputCity}
            readOnly
            onClick={() => handleDropdownToggle("city")}
          />
          <img
            src="/images/vendorLogin/arrow.svg"
            alt=""
            className="cursor-pointer"
            onClick={() => handleDropdownToggle("city")}
          />
          {dropdownState.city && (
            <div className={style.genderOptions}>
              <p onClick={() => handleCitySelect("Sydney")}>Sydney</p>
              <p onClick={() => handleCitySelect("Perth")}>Perth</p>
              <p onClick={() => handleCitySelect("Mumbai")}>Mumbai</p>
            </div>
          )}
        </div>

        <div className={style.locationDiv}>
          <input
            type="text"
            placeholder="Location"
            value={selectedLocation}
            className={style.inputCity}
            readOnly
            onClick={() => handleDropdownToggle("location")}
          />
          <img
            src="/images/vendorLogin/arrow.svg"
            alt=""
            className="cursor-pointer"
            onClick={() => handleDropdownToggle("location")}
          />
          {dropdownState.location && (
            <div className={style.genderOptions}>
              <p onClick={() => handleLocationSelect("Downtown")}>Downtown</p>
              <p onClick={() => handleLocationSelect("Suburbs")}>Suburbs</p>
            </div>
          )}
        </div>

        <div className={style.subjectDiv}>
          <input
            type="text"
            placeholder="Subject"
            value={selectedSubject}
            className={style.inputCity}
            readOnly
            onClick={() => handleDropdownToggle("subject")}
          />
          <img
            src="/images/vendorLogin/arrow.svg"
            alt=""
            className="cursor-pointer"
            onClick={() => handleDropdownToggle("subject")}
          />
          {dropdownState.subject && (
            <div className={style.genderOptions}>
              <p onClick={() => handleSubjectSelect("Math")}>Math</p>
              <p onClick={() => handleSubjectSelect("Science")}>Science</p>
              <p onClick={() => handleSubjectSelect("English")}>English</p>
            </div>
          )}
        </div>

        <div className={style.syllabusDiv}>
          <input
            type="text"
            placeholder="Syllabus Taught"
            value={selectedSyllabus}
            className={style.inputCity}
            readOnly
            onClick={() => handleDropdownToggle("syllabus")}
          />
          <img
            src="/images/vendorLogin/arrow.svg"
            alt=""
            className="cursor-pointer"
            onClick={() => handleDropdownToggle("syllabus")}
          />
          {dropdownState.syllabus && (
            <div className={style.genderOptions}>
              <p onClick={() => handleSyllabusSelect("CBSE")}>CBSE</p>
              <p onClick={() => handleSyllabusSelect("ICSE")}>ICSE</p>
              <p onClick={() => handleSyllabusSelect("State Board")}>
                State Board
              </p>
            </div>
          )}
        </div>
      </div>
      <button
        className={style.continue}
        onClick={() => {
          handleStepChange(2);
        }}
      >
        Continue
      </button>
    </div>
  );
}

export default EnterDetailsPage;
