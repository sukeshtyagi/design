import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./UserDashboard.module.css";
import SearchBar from "../commonComponents/SearchBar";
import PersonalInfo from "./PersonalInfo";
import ManageAddress from "./ManageAddress";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import Reviews from "./ReviewsAndRating";
import { logoutUser, deleteUserAccount, geUserDetails } from "../axios/Axios";

function UserDashboard() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("personalInfo");
  const [deleteIcon, setDeleteIcon] = useState("/images/blogs/delete.svg");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await geUserDetails(userId);
        setUserName(response.data.fullName);
        setUserEmail(response.data.email);
        setUserPhone(response.data.phone);
      } catch (error) {
        console.log("Failed to fetch user details:", error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  const handleLogout = async (id) => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      try {
        console.log(`Logging out user with ID: ${id}`);
        await logoutUser(id);
        navigate("/homepage");
      } catch (error) {
        console.error("Logout failed:", error);
      }
    }
  };

  const handleDelete = async (id) => {
    const confirmLDelete = window.confirm(
      "Are you sure you want to detele your account?"
    );
    if (confirmLDelete) {
      try {
        console.log(`deleting user with ID: ${id}`);
        await deleteUserAccount(id);
        navigate("/homepage");
      } catch (error) {
        console.error("Logout failed:", error);
      }
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const id = localStorage.getItem("userId");
    if (option === "logout") {
      handleLogout(id);
    }
    if (option === "delete") {
      handleDelete(id);
    }
  };

  return (
    <>
      <Header userDashboard="true" />
      <div className={style.outerSection}>
        <div className={style.innerSection}>
          <div className={style.searchContainer}>
            <SearchBar userDashboard="true" />
          </div>
          <div className={style.contentContainer}>
            <div className={style.left}>
              <div className={style.leftTop}>
                <div className={style.imgDiv}>
                  <img
                    src="/images/blogs/user.svg"
                    alt=""
                    className={style.img}
                  />
                </div>

                <div className={style.nameDiv}>
                  <h1 className={style.greeting}>Hello,</h1>
                  <h1 className={style.name}>{userName}</h1>
                </div>
              </div>

              <div className={style.leftBtm}>
                <div
                  className={`${style.btmDiv1} ${
                    selectedOption === "appointments" ? style.selected : ""
                  }`}
                  onClick={() => handleOptionClick("appointments")}
                >
                  <img src="/images/blogs/appoint.svg" alt="" />
                  <p className={style.para1}>MY APPOINTMENTS</p>
                </div>

                <div className={style.btmDiv4}>
                  <div className={style.btmDiv2A}>
                    <img src="/images/blogs/setting.svg" alt="" />
                    <p className={style.para1}>ACCOUNT SETTINGS</p>
                  </div>

                  <div
                    className={`${style.option1} ${
                      selectedOption === "personalInfo" ? style.selected : ""
                    }`}
                    onClick={() => handleOptionClick("personalInfo")}
                  >
                    <p className={style.para2}>Profile Information</p>
                  </div>
                  <div
                    className={`${style.option1} ${
                      selectedOption === "manageAddresses" ? style.selected : ""
                    }`}
                    onClick={() => handleOptionClick("manageAddresses")}
                  >
                    <p className={style.para3}>Manage Addresses</p>
                  </div>
                </div>

                <div className={style.btmDiv5}>
                  <div className={style.btmDiv2A}>
                    <img src="/images/blogs/other.svg" alt="" />
                    <p className={style.para1}>OTHER</p>
                  </div>

                  <div
                    className={`${style.option1} ${
                      selectedOption === "reviews" ? style.selected : ""
                    }`}
                    onClick={() => handleOptionClick("reviews")}
                  >
                    <p className={style.para2}>Reviews & Ratings</p>
                  </div>
                  <div
                    className={`${style.option1} ${
                      selectedOption === "favourites" ? style.selected : ""
                    }`}
                    onClick={() => handleOptionClick("favourites")}
                  >
                    <p className={style.para3}>Favourites</p>
                  </div>
                  <div
                    className={`${style.option1} ${
                      selectedOption === "support" ? style.selected : ""
                    }`}
                    onClick={() => handleOptionClick("support")}
                  >
                    <p className={style.para3}>Customer Support</p>
                  </div>
                </div>

                <div
                  className={`${style.btmDiv2} ${
                    selectedOption === "logout" ? style.selected : ""
                  }`}
                  onClick={() => handleOptionClick("logout")}
                >
                  <img src="/images/blogs/logout.svg" alt="" />
                  <p className={style.para1}>LOGOUT</p>
                </div>

                <div
                  className={`${style.btmDiv3} ${
                    selectedOption === "delete" ? style.selected : ""
                  }`}
                  onClick={() => handleOptionClick("delete")}
                >
                  <img src={deleteIcon} alt="" />
                  <p
                    className={style.paraDelete}
                    onMouseEnter={() => {
                      setDeleteIcon("/images/blogs/hoverDelete.svg");
                    }}
                    onMouseLeave={() => {
                      setDeleteIcon("/images/blogs/delete.svg");
                    }}
                  >
                    Delete Account
                  </p>
                </div>
              </div>
            </div>
            <div className={style.right}>
              {selectedOption === "personalInfo" && (
                <PersonalInfo
                  userName={userName}
                  userEmail={userEmail}
                  userPhone={userPhone}
                />
              )}
              {selectedOption === "manageAddresses" && <ManageAddress />}
              {selectedOption === "reviews" && <Reviews />}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default UserDashboard;
