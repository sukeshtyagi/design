import React, { useState } from "react";
import style from "./PersonalInfoAndManageAddress.module.css";

function PersonalInfo({ userName, userEmail, userPhone }) {
  const [isEditable, setIsEditable] = useState({
    name: false,
    email: false,
    mobile: false,
  });

  console.log(userName.split(" ")[0]);

  const handleEditClick = (field) => {
    setIsEditable((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
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
            placeholder="Jenny"
            value={userName.split(" ")[0]}
            readOnly={!isEditable.name}
          />
          <input
            type="text"
            className={style.input1}
            placeholder="Wilson"
            value={userName.split(" ")[1]}
            readOnly={!isEditable.name}
          />
        </div>
      </div>

      <div className={style.genderDiv}>
        <p className={style.paraGender}>Your Gender</p>
        <div className={style.topDiv}>
          <label>
            <input type="radio" name="gender" value="male" disabled /> Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              defaultChecked
              disabled
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
          placeholder="willie.jennings@example.com"
          readOnly={!isEditable.email}
          value={userEmail}
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
          placeholder="629.555.0129"
          value={userPhone}
          readOnly={!isEditable.mobile}
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
