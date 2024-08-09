import instance from "../../commonComponents/axios/AxiosInstance";

export async function getAllUserType() {
  try {
    const response = await instance.get("/api/userType/getAllUserType");
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
      password: data.password || "",
      vendorType: data.vendorType || "defaultType",
    };
    const jsonData = JSON.stringify(formattedData);
    console.log(jsonData);
    const response = await instance.post(
      "/api/vendordetail/registerProfessional",
      jsonData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getVendorDetail(id) {
  try {
    const response = await instance.get(
      `/api/vendordetail/getByVendorId/${id}`
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
    const response = await instance.post(
      "/api/vendordetail/registerTeacher",
      jsonData
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function addTeacherDescription(data) {
  try {
    const jsonData = JSON.stringify(data);
    const response = await instance.post(
      "/api/teacher/addTeacherDesc",
      jsonData
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function addTeacherCertification(data) {
  try {
    const response = await instance.post(
      "/api/certification/uploadTeacherCertificate",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log("Error:", error);
  }
}

export async function createEducation(data) {
  try {
    const response = await instance.post(
      "/api/education/createEducation",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  } catch (error) {
    console.log("Error:", error);
  }
}

export async function addTeacherAvailability(id, data) {
  try {
    const jsonData = JSON.stringify(data);
    const response = await instance.post(
      `/api/vendordetail/addOpeningClosingTimes/${id}`,
      jsonData
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function teacherDetail(data) {
  try {
    const jsonData = JSON.stringify(data);
    const response = await instance.post(
      "/api/teacher/teacherDetail/",
      jsonData
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function vendorLogout(data) {
  try {
    localStorage.removeItem("vendorType");
  } catch (error) {
    console.log(error);
  }
}

/*

 //localStorage.setItem("vendorDetails", JSON.stringify(values));
                console.log(formData);
                const result = await registerProfessional(formData);
                //localStorage.setItem("vendorId", result.data.vendor._id);
                /*
                if (selectedProfession.profession.toLowerCase() === "teacher") {
                  navigate("/teacher-dashboard");
                } else if (
                  selectedProfession.profession.toLowerCase() === "doctor"
                ) {
                  navigate("/doctor-dashboard");
                } else if (
                  selectedProfession.profession.toLowerCase() === "advocate"
                ) {
                  navigate("/advocate-dashboard");
                }
                  */
