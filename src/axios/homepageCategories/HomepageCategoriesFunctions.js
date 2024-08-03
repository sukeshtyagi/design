import instance from "../../commonComponents/axios/AxiosInstance";

export async function getAllCategories() {
  try {
    const response = await instance.get("/api/category/getAllCategories");
    let ary = response.data;
    const result=ary.filter((data)=>data.parent===null)
    // localStorage.setItem("categoryId", response.data.user._id);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getCarouselData() {
  try {
    //need to be modified
    const response = await instance.get("/api/category/getAllCategories");
    console.log(response);
    // localStorage.setItem("categoryId", response.data.user._id);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export async function searchCategory(query) {
  try {
    const response = await instance.get(
      `/api/category/searchCategories?query=${query}`
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
