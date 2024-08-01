import axios from "axios";
const instance = axios.create({
  baseURL: "http://webclickstudio.com:8012",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function registerUser(userData) {
  const phonenumber = Math.random() * 10;
  try {
    const dataWithPhone = {
      fullName: userData.fullName,
      email: userData.email,
      phone: `${phonenumber}`,
      password: userData.password,
    };

    const jsonData = JSON.stringify(dataWithPhone);

    const response = await instance.post("/api/users/registerUser", jsonData);
    localStorage.setItem("jwtToken", response.data.user.token);
    localStorage.setItem("userId", response.data.user._id);
    return response;
  } catch (error) {
    console.log(error.response.data);
    const status = error.response.status;
    return status;
  }
}

export async function veriyOtp(otpPayload) {
  try {
    console.log("try");
    console.log(otpPayload);
    const jsonData = JSON.stringify(otpPayload);

    console.log(jsonData);
    const response = await instance.post("/api/users/verify-otp", jsonData);
    console.log(response.data.message);
    if (response.status >= 200 && response.status < 300) {
      console.log("if executed");
      console.log(response);
      //console.log(response.data.user._id);
      //localStorage.setItem("jwtToken", response.data.user.token);
      //localStorage.setItem("userId", response.data.user._id);
      return response;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function loginUser(userData) {
  try {
    const jsonData = JSON.stringify(userData);
    const response = await instance.post("/api/users/loginUser", jsonData);

    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function logoutUser(id) {
  console.log(id);
  try {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userId");
    //const response = await instance.put(`/api/users/logout/${id}`);
    //console.log(response);
    //return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function deleteUserAccount(id) {
  console.log(id);
  try {
    console.log("try");
    const response = await instance.delete(`/api/users/deleteUser/${id}`);
    console.log(response);
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userId");
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
