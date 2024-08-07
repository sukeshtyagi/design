import instance from "../../commonComponents/axios/AxiosInstance";

export async function getAllUserType() {
  try {
    const response = await instance.get("/api/userType/getAllUserType");
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function registerTeacher(data) {
  try {
    const jsonData = JSON.stringify(data);
    const response = await instance.post(
      "/api/vendordetail/registerTeacher",
      jsonData
    );
    console.log(response);
    // let ary = response.data;
    //const result = ary.filter((data) => data.parent === null);
    //return result;
  } catch (error) {
    console.log(error.message);
  }
}
