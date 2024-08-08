import React, { useState } from "react";
import style from "./EnterDetailsPage.module.css";
import styles from "./TeachingCertification.module.css";
import buttonstyle from "./DescriptionPage.module.css";

function Education({ handleStepChange }) {
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [institute, setInstitute] = useState("");
  const [qualification, setQualification] = useState("");
  const [specialization, setSpecialization] = useState("");

  const handleInstituteSelect = (value) => {
    setInstitute(value);
    setActiveDropdown(null);
  };

  const handleQualificationSelect = (value) => {
    setQualification(value);
    setActiveDropdown(null);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
      setFile(selectedFile);
    } else {
      setFile(null);
    }
  };

  return (
    <div className={style.contentDiv}>
      <div className={style.topDiv}>
        <p className={style.heading}>Education</p>
        <p className={style.stepNumber}>4 of 6 Completed</p>
      </div>
      <img
        src="/images/vendorLogin/indicatorLevel4.svg"
        alt=""
        className="progressBar"
      />
      <div className={styles.form}>
        <div className={styles.teachingCertificate}>
          <input type="checkbox" className={styles.checkBox} />I don’t have a
          higher education
        </div>

        <div
          className={style.subjectDiv}
          onClick={() =>
            setActiveDropdown(
              activeDropdown === "institute" ? null : "institute"
            )
          }
        >
          <input
            type="text"
            value={institute}
            placeholder="Institution"
            className={style.inputCity}
            readOnly
          />
          <img src="/images/vendorLogin/arrow.svg" alt="" className="" />
          {activeDropdown === "institute" && (
            <div className={style.genderOptions}>
              <p onClick={() => handleInstituteSelect("AIIMs")}>AIIMs</p>
              <p onClick={() => handleInstituteSelect("BITS")}>BITS</p>
              <p onClick={() => handleInstituteSelect("VIT")}>VIT</p>
            </div>
          )}
        </div>

        <div
          className={style.subjectDiv}
          onClick={() =>
            setActiveDropdown(
              activeDropdown === "qualification" ? null : "qualification"
            )
          }
        >
          <input
            type="text"
            value={qualification}
            placeholder="Qualification"
            className={style.inputCity}
            readOnly
          />
          <img src="/images/vendorLogin/arrow.svg" alt="" className="" />
          {activeDropdown === "qualification" && (
            <div className={style.genderOptions}>
              <p onClick={() => handleQualificationSelect("BSc")}>BSc</p>
              <p onClick={() => handleQualificationSelect("MSc")}>MSc</p>
              <p onClick={() => handleQualificationSelect("PhD")}>PhD</p>
            </div>
          )}
        </div>

        <div className={style.subjectDiv}>
          <input
            type="text"
            placeholder="Specialization(s)"
            className={style.inputCity}
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          />
        </div>

        <div className={styles.dateContainer}>
          <div className={styles.fromDate}>
            <input
              type="text"
              placeholder="From"
              className={styles.inputCity}
            />
            <img
              src="/images/vendorLogin/calender.svg"
              alt=""
              className="cursor-pointer"
            />
          </div>

          <div className={styles.toDate}>
            <input type="text" placeholder="To" className={styles.inputCity} />
            <img
              src="/images/vendorLogin/calender.svg"
              alt=""
              className="cursor-pointer"
            />
          </div>
        </div>

        <input
          type="file"
          id="fileInput"
          onChange={handleFileChange}
          className={styles.chooseFileInput}
        />
        <label htmlFor="fileInput" className={styles.customFileButton}>
          Choose File
        </label>
        {fileName && <p className={styles.fileName}>{fileName}</p>}
        <p className={styles.addNewCertificate} style={{ marginBottom: "0px" }}>
          + Add another education
        </p>
      </div>
      <div
        className={buttonstyle.buttonContainer}
        style={{ marginTop: "27px" }}
      >
        <button
          className={buttonstyle.backButton}
          onClick={() => {
            handleStepChange(3);
          }}
        >
          Back
        </button>{" "}
        <button
          className={buttonstyle.continueButton}
          onClick={() => {
            handleStepChange(5);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Education;
