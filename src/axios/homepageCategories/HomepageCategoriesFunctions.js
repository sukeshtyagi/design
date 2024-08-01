import instance from "../../commonComponents/axios/AxiosInstance"

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
    localStorage.setItem("jwtToken", response.data.user.token);
    localStorage.setItem("userId", response.data.user._id);
    return response;
  } catch (error) {
    console.log(error.response.data);
    const status = error.response.status;
    return status;
  }
}
