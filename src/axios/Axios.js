import axios from "axios";

const baseUrl = "http://webclickstudio.com:8012";

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 300000,
});

export async function registerUser(userData) {
  console.log("User Data:", userData);
  try {
    console.log("try block executed");

    const dataWithPhone = {
      ...userData,
      phone: "1234567890",
    };

    console.log("Data with Phone:", dataWithPhone);

    const response = await instance.post(
      "/api/users/registerUser",
      dataWithPhone
    );
    console.log("Response:", response);
  } catch (error) {
    if (error.response) {
      console.log("Data:", error.response.data);
      console.log("Status:", error.response.status);
      console.log("Headers:", error.response.headers);
    } else if (error.request) {
      console.log("Request:", error.request);
    } else {
      console.log("Error Message:", error.message);
    }
    console.log("Error Config:", error.config);
  }
}

export async function loginUser(userData) {
  try {
    console.log("try block executed");
    console.log("Data:", userData);

    const response = await instance.post("/api/users/loginUser", userData);

    console.log("Response:", response.data); // Log the response data, not the entire response object
    return response.data; // Return the data for further processing if needed
  } catch (error) {
    // Detailed error handling
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error("Error Response Data:", error.response.data);
      console.error("Error Response Status:", error.response.status);
      console.error("Error Response Headers:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Error Request:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error Message:", error.message);
    }
    console.error("Error Config:", error.config);
    throw error; // Optionally rethrow the error for further handling
  }
}
