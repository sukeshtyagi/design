import instance from "../../commonComponents/axios/AxiosInstance";

export async function getAllUserType() {
  try {
    const response = await instance.get("/api/userType/getAllUserType");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function registerProfessional(data) {
  try {
    const formattedData = {
      vendorName: data.fullName || "",
      email: data.email || "",
      mobileNumber: [data.phoneNumber || ""],
      vendorType: data.vendorType || "defaultType",
    };
    const jsonData = JSON.stringify(formattedData);
    const response = await instance.post(
      "/api/vendordetail/registerProfessional",
      jsonData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function registerTeacher(data) {
  try {
    const jsonData = JSON.stringify(data);
    console.log("Data being sent:", jsonData);
    const response = await instance.post(
      "/api/vendordetail/registerTeacher",
      jsonData
    );
    console.log("Response:", response);
  } catch (error) {
    if (error.response) {
      console.log("Error Response:", error.response.data);
      console.log("Error Status:", error.response.status);
      console.log("Error Headers:", error.response.headers);
    } else if (error.request) {
      console.log("Error Request:", error.request);
    } else {
      console.log("Error Message:", error.message);
    }
  }
}
