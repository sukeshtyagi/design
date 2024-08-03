import instance from "../../commonComponents/axios/AxiosInstance";

export async function registerUser(userData) {
  const phonenumber = Math.floor(Math.random() * 9000000000) + 1000000000;

  try {
    const dataWithPhone = {
      fullName: userData.fullName,
      email: userData.email,
      phone: `${phonenumber}`,
      password: userData.password,
    };

    const jsonData = JSON.stringify(dataWithPhone);

    const response = await instance.post("/api/users/registerUser", jsonData);
    // localStorage.setItem("jwtToken", response.data.user.token);
    // localStorage.setItem("userId", response.data.user._id);
    return response;
  } catch (error) {
    console.log(error);
    const status = error.response.status;
    return status;
  }
}

export async function veriyOtp(otpPayload) {
  try {
    const jsonData = JSON.stringify(otpPayload);

    const response = await instance.post("/api/users/verify-otp", jsonData);
    console.log(response.data.message);
    if (response.status >= 200 && response.status < 300) {
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
  try {
    const response = await instance.delete(`/api/users/deleteUser/${id}`);
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userId");
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function geUserDetails(id) {
  try {
    const response = await instance.get(`/api/users/getUserById/${id}`);
    return response;
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
}

export async function updateUserDetails(id, payload) {
  try {
    const jsonData = JSON.stringify(payload);
    const response = await instance.put(
      `/api/users/updateUser/${id}`,
      jsonData
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
}
