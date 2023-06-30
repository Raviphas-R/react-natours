import { BASE_URL } from "./config";
import axios from "axios";

// const defaultConfig = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

const getAllTours = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/tours`);
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export { getAllTours };
