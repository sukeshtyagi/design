import React, { useState } from "react";
import style from "./EnterDetailsPage.module.css";
import styles from "./TeachingCertification.module.css";
import buttonstyle from "./DescriptionPage.module.css";
import { addTeacherCertification } from "../../axios/teacherVendorLogin/VendorLogin";

function TeachingCertification({ handleStepChange }) {
  const [subject, setSubject] = useState("");
  const [certificate, setCertificate] = useState("");
  const [description, setDescription] = useState("");
  const [issuedBy, setIssuedBy] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);

  const isFormValid =
    subject &&
    certificate &&
    description &&
    issuedBy &&
    fromDate &&
    toDate &&
    fileName;

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
      setFile(selectedFile);
    } else {
      setFile(null);
    }
  };

  const handleSubjectSelect = (value) => {
    setSubject(value);
    setActiveDropdown(null);
  };

  const handleCertificateSelect = (value) => {
    setCertificate(value);
    setActiveDropdown(null);
  };

  const vendorId = localStorage.getItem("vendorId");

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("vendorId", vendorId);
    formData.append("subject", subject);
    formData.append("certificate", certificate);
    formData.append("certificateDesc", description);
    formData.append("issueBy", issuedBy);
    formData.append("fromDate", "2024-08-08");
    formData.append("toDate", "2024-08-08");
    formData.append("certificationImage", file);

    console.log(...formData);
    await addTeacherCertification(formData);
    handleStepChange(4);
  };

  return (
    <div className={style.contentDiv}>
      <div className={style.topDiv}>
        <p className={style.heading}>Teaching Certification</p>
        <p className={style.stepNumber}>3 of 6 Completed</p>
      </div>
      <img
        src="/images/vendorLogin/indicatorLevel3.svg"
        alt=""
        className="progressBar"
      />
      <div className={styles.form}>
        <div className={styles.teachingCertificate}>
          <input type="checkbox" className={styles.checkBox} />I don’t have a
          teaching certificate
        </div>
        <div
          className={style.subjectDiv}
          onClick={() =>
            setActiveDropdown(activeDropdown === "subject" ? null : "subject")
          }
        >
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={style.inputCity}
          />
          <img
            src="/images/vendorLogin/arrow.svg"
            alt=""
            className="cursor-pointer"
          />
          {activeDropdown === "subject" && (
            <div className={style.genderOptions}>
              <p onClick={() => handleSubjectSelect("Hindi")}>Hindi</p>
              <p onClick={() => handleSubjectSelect("Maths")}>Maths</p>
              <p onClick={() => handleSubjectSelect("Physics")}>Physics</p>
            </div>
          )}
        </div>
        <div
          className={style.subjectDiv}
          onClick={() =>
            setActiveDropdown(
              activeDropdown === "certificate" ? null : "certificate"
            )
          }
        >
          <input
            type="text"
            placeholder="Certificate"
            value={certificate}
            onChange={(e) => setCertificate(e.target.value)}
            className={style.inputCity}
          />
          <img
            src="/images/vendorLogin/arrow.svg"
            alt=""
            className="cursor-pointer"
          />
          {activeDropdown === "certificate" && (
            <div className={style.genderOptions}>
              <p onClick={() => handleCertificateSelect("Beginner")}>
                Beginner
              </p>
              <p onClick={() => handleCertificateSelect("Advanced")}>
                Advanced
              </p>
              <p onClick={() => handleCertificateSelect("Expert")}>Expert</p>
            </div>
          )}
        </div>
        <div className={style.subjectDiv}>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={style.inputCity}
          />
        </div>
        <div className={style.subjectDiv}>
          <input
            type="text"
            placeholder="Issued by"
            value={issuedBy}
            onChange={(e) => setIssuedBy(e.target.value)}
            className={style.inputCity}
          />
        </div>
        <div className={styles.dateContainer}>
          <div className={styles.fromDate}>
            <input
              type="text"
              placeholder="From"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className={styles.inputCity}
            />
            <img
              src="/images/vendorLogin/calender.svg"
              alt=""
              className="cursor-pointer"
            />
          </div>

          <div className={styles.toDate}>
            <input
              type="text"
              placeholder="To"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className={styles.inputCity}
            />
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
        <p className={styles.addNewCertificate}>
          + Add New Teaching Certificate
        </p>
      </div>
      <div className={buttonstyle.buttonContainer}>
        <button
          className={buttonstyle.backButton}
          onClick={() => {
            handleStepChange(2);
          }}
        >
          Back
        </button>
        <button
          className={`${buttonstyle.continueButton} ${
            !isFormValid ? buttonstyle.disabled : ""
          }`}
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default TeachingCertification;
