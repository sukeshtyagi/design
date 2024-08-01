import React, { useState, useEffect } from "react";
import style from "./PersonalInfoAndManageAddress.module.css";
import { updateUserDetails } from "../axios/Axios"; // Importing the API call function

function PersonalInfo({
  userName = "",
  userEmail,
  userPhone,
  userGender = "Male",
  updateUserDetailsParent, // Callback function to update parent component's state
}) {
  const [isEditable, setIsEditable] = useState({
    name: false,
    email: false,
    mobile: false,
  });

  const userId = localStorage.getItem("userId");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState(userGender);

  useEffect(() => {
    const nameParts = userName.split(" ");
    setFirstName(nameParts[0] || "");
    setLastName(nameParts[1] || "");
    setEmail(userEmail);
    setPhone(userPhone);
    setGender(userGender); // Ensure gender is initialized correctly
  }, [userName, userEmail, userPhone, userGender]);

  const handleEditClick = (field) => {
    if (isEditable[field]) {
      const updatedDetails = {
        fullName: `${firstName} ${lastName}`,
        email,
        phone,
        gender,
      };

      updateUserDetails(userId, updatedDetails)
        .then(() => {
          updateUserDetailsParent(updatedDetails); // Update parent's state
        })
        .catch((error) => {
          console.error("Failed to update user details:", error);
        });
    }
    setIsEditable((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)); // Ensure gender is capitalized
  };

  return (
    <div className={style.personalInfoOuter}>
      <div className={style.commonDiv}>
        <div className={style.topDiv}>
          <p className={style.para}>Personal Information</p>
          <button
            className={style.edit}
            onClick={() => handleEditClick("name")}
          >
            {isEditable.name ? "Save" : "Edit"}
          </button>
        </div>
        <div className={style.btmDiv}>
          <input
            type="text"
            className={style.input1}
            placeholder="First Name"
            value={firstName}
            readOnly={!isEditable.name}
            onChange={handleInputChange(setFirstName)}
          />
          <input
            type="text"
            className={style.input1}
            placeholder="Last Name"
            value={lastName}
            readOnly={!isEditable.name}
            onChange={handleInputChange(setLastName)}
          />
        </div>
      </div>

      <div className={style.genderDiv}>
        <p className={style.paraGender}>Your Gender</p>
        <div className={style.topDiv}>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "Male"}
              onChange={handleGenderChange}
              disabled={!isEditable.name}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "Female"}
              onChange={handleGenderChange}
              disabled={!isEditable.name}
            />{" "}
            Female
          </label>
        </div>
      </div>

      <div className={style.commonDiv}>
        <div className={style.topDiv}>
          <p className={style.para}>Email Address</p>
          <button
            className={style.edit}
            onClick={() => handleEditClick("email")}
          >
            {isEditable.email ? "Save" : "Edit"}
          </button>
        </div>
        <input
          type="text"
          className={style.input1}
          placeholder="Email Address"
          value={email}
          readOnly={!isEditable.email}
          onChange={handleInputChange(setEmail)}
        />
      </div>

      <div className={style.commonDiv}>
        <div className={style.topDiv}>
          <p className={style.para}>Mobile Number</p>
          <button
            className={style.edit}
            onClick={() => handleEditClick("mobile")}
          >
            {isEditable.mobile ? "Save" : "Edit"}
          </button>
        </div>
        <input
          type="text"
          className={style.input1}
          placeholder="Mobile Number"
          value={phone}
          readOnly={!isEditable.mobile}
          onChange={handleInputChange(setPhone)}
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
