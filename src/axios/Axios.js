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
    return response;
  } catch (error) {
    console.log("Error Message:", error.message);
  }
}

export async function veriyOtp(otpPayload) {
  try {
    const response = await instance.post("/api/users/verify-otp", otpPayload);
    return response;
  } catch (error) {
    console.log("error:", error);
    throw error;
  }
}

export async function loginUser(userData) {
  try {
    console.log("try block executed");
    console.log("Data:", userData);
    const jsonData = JSON.stringify(userData);
    console.log("json Data:", jsonData);

    const response = await instance.post("/api/users/loginUser", jsonData);

    console.log("Response:", response);
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
