import axios from "axios";

const baseUrl = "http://webclickstudio.com:8012";

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 300000,
});

export async function registerUser(userData) {
  console.log("User Data:", userData);
  try {
    const dataWithPhone = {
      ...userData,
      phone: "111111111115",
    };

    const response = await instance.post(
      "/api/users/registerUser",
      dataWithPhone
    );
    return response;
  } catch (error) {
    console.log("Error Message:", error);
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

    const response = await instance.post("/api/users/loginUser", userData);

    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error Response Data:", error.response.data);
      console.error("Error Response Status:", error.response.status);
      console.error("Error Response Headers:", error.response.headers);
    } else if (error.request) {
      console.error("Error Request:", error.request);
    } else {
      console.error("Error Message:", error.message);
    }
    console.error("Error Config:", error.config);
    throw error;
  }
}
