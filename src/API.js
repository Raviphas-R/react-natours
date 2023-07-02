import { BASE_URL } from "./config";
import axios from "axios";
import { Cookies } from "react-cookie";

const defaultConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const getAllTours = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/tours`);
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

const logIn = async (userData) => {
  try {
    const body = JSON.stringify(userData);
    const cookies = new Cookies();
    console.log(body);
    const response = await axios.post(
      `${BASE_URL}/api/v1/users/login`,
      body,
      defaultConfig
    );
    console.log(response.data);
    cookies.set("token", response.data.token);
  } catch (error) {
    console.log(error.response);
    console.error(error);
  }
};

const logOut = async () => {
  try {
    await axios.get(`${BASE_URL}/api/v1/users/logout`);
    const cookies = new Cookies();
    cookies.remove("token");
  } catch (error) {
    console.error(error);
  }
};

export { getAllTours, logIn, logOut };
