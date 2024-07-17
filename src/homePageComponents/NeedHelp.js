import React, { useState } from "react";
import style from "../styles/NeedHelp.module.css";

function NeedHelp() {
  // Define state for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className={style.needHelpOuterContainer}>
      <div className={style.needHelpContainer}>
        <div className={style.leftDiv}>
          <h1 className={style.heading}>
            NEED <span className={style.headingSpan}>HELP & SUPPORT</span>
          </h1>
          <p className={style.para}>
            Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
            Dolor
          </p>
          <div className={style.detailContainer}>
            <div className={style.envelopIconDiv}>
              <img src="images/services/mail.svg" alt="" />
            </div>
            <p className={style.emailPara}>info@companyname.com</p>
          </div>

          <div className={style.detailContainer}>
            <div className={style.phoneIconDiv}>
              <img src="images/services/phone.svg" alt="" />
            </div>
            <p className={style.phonePara}>+ 91 1234567891</p>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className={style.rightDiv}>
            <div className={style.topDiv}>
              <div className={style.topLeft}>
                <label htmlFor="firstName" className={style.firstNameLabel}>
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={style.firstNameInput}
                />
              </div>

              <div className={style.topRight}>
                <label htmlFor="lastName" className={style.lastNameLabel}>
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={style.lastNameInput}
                />
              </div>
            </div>

            <div className={style.middleDiv}>
              <div className={style.midLeft}>
                <label htmlFor="email" className={style.emailLabel}>
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={style.emailInput}
                />
              </div>

              <div className={style.midRight}>
                <label htmlFor="phoneNumber" className={style.numberLabel}>
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className={style.numberInput}
                />
              </div>
            </div>

            <div className={style.btmDiv}>
              <label htmlFor="message" className={style.messageLabel}>
                Message
              </label>
              <textarea
                id="message"
                rows={8}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={style.messageInput}
              />
            </div>

            <button type="submit" className={`${style.btn}`}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NeedHelp;
