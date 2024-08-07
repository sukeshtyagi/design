import React, { useState } from "react";
import style from "./EnterDetailsPage.module.css";
import { registerTeacher } from "../../axios/teacherVendorLogin/VendorLogin";

function EnterDetailsPage({ handleStepChange }) {
  const [selectedTitle, setSelectedTitle] = useState("");
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
      title: false,
      gender: false,
      city: false,
      location: false,
      subject: false,
      syllabus: false,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  const vendorName = JSON.parse(localStorage.getItem("vendorDetails")).fullName;
  const vendorId = JSON.parse(localStorage.getItem("vendorId"));
  const vendorPhoneNumber = JSON.parse(
    localStorage.getItem("vendorDetails")
  ).phoneNumber;

  const handleTitleSelect = (title) => {
    setSelectedTitle(title);
    setDropdownState((prevState) => ({ ...prevState, gender: false }));
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
    const newValue = e.target.value;
    setMobileNumber(newValue);
    if (isSameAsMobile) {
      setWhatsAppNumber(newValue);
    }
  };

  const handleCheckboxChange = () => {
    setIsSameAsMobile((prevValue) => {
      const newValue = !prevValue;
      if (newValue) {
        setWhatsAppNumber(mobileNumber || vendorPhoneNumber);
      } else {
        setWhatsAppNumber("");
      }
      return newValue;
    });
  };

  const collectDetails = () => {
    const details = {
      vendorId: vendorId,
      title: selectedTitle,
      city: selectedCity,
      location: selectedLocation,
      subject: selectedSubject,
      syllabus: selectedSyllabus,
      mobileNumber: mobileNumber || vendorPhoneNumber,
      whatsAppNumber: whatsAppNumber,
      gender: selectedGender,
    };
    console.log(details);
    return details;
  };

  const handleContinueClick = () => {
    const collectedDetails = collectDetails();
    // Send collectedDetails to backend or proceed to next step
    handleStepChange(2);
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
        {/* Title Input */}
        <div className={style.nameContainer}>
          <div
            className={style.titleDiv}
            onClick={() => handleDropdownToggle("title")}
          >
            <input
              type="text"
              placeholder="Title"
              className={style.input2}
              value={selectedTitle}
              readOnly
            />
            <img
              src="/images/vendorLogin/arrow.svg"
              alt=""
              className="cursor-pointer"
            />
            {dropdownState.title && (
              <div className={style.genderOptions}>
                <p onClick={() => handleTitleSelect("Mr")}>Mr</p>
                <p onClick={() => handleTitleSelect("Ms")}>Ms</p>
                <p onClick={() => handleTitleSelect("Mrs")}>Mrs</p>
              </div>
            )}
          </div>
          <input
            type="text"
            placeholder="Name"
            className={style.input}
            value={vendorName}
            readOnly
          />
        </div>

        {/* Gender Input */}
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

        {/* Mobile Number Input */}
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
              value={mobileNumber || vendorPhoneNumber}
              onChange={handleMobileNumberChange}
            />
          </div>
          <p className={style.addNewNumber}>+ Add Another Mobile Number</p>
        </div>

        {/* WhatsApp Number Input */}
        <div className={style.whatsAppNumberContainer}>
          <div className={style.mobileTopDiv}>
            <div className={style.code}>
              <img src="/images/vendorLogin/flag.svg" alt="" className="" />
              <input type="text" placeholder="+91" className={style.input3} />
            </div>
            <input
              type="text"
              placeholder="WhatsApp Number"
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

        {/* City Input */}
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

        {/* Location Input */}
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
              <p onClick={() => handleLocationSelect("Borivali")}>Borivali</p>
              <p onClick={() => handleLocationSelect("Andheri")}>Andheri</p>
              <p onClick={() => handleLocationSelect("Bandra")}>Bandra</p>
            </div>
          )}
        </div>

        {/* Subject Input */}
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
              <p onClick={() => handleSubjectSelect("Physics")}>Physics</p>
              <p onClick={() => handleSubjectSelect("Mathematics")}>
                Mathematics
              </p>
              <p onClick={() => handleSubjectSelect("Chemistry")}>Chemistry</p>
            </div>
          )}
        </div>

        {/* Syllabus Input */}
        <div className={style.syllabusDiv}>
          <input
            type="text"
            placeholder="Syllabus"
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
              <p onClick={() => handleSyllabusSelect("IB")}>IB</p>
            </div>
          )}
        </div>
      </div>

      <button className={style.continue} onClick={handleContinueClick}>
        Continue
      </button>
    </div>
  );
}

export default EnterDetailsPage;
