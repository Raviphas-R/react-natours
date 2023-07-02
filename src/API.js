import { BASE_URL } from "./config";
import axios from "axios";
import { Cookies } from "react-cookie";
import * as jose from "jose";

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

const autoAuth = async (token) => {
  const secret = new TextEncoder().encode(process.env.REACT_APP_JWT_SECRET);
  const { payload, protectedHeader } = await jose.jwtVerify(token, secret);

  console.log(payload);
  console.log(protectedHeader);
  return payload.user;
};

const logIn = async (userData) => {
  try {
    const body = JSON.stringify(userData);
    const cookies = new Cookies();
    const response = await axios.post(
      `${BASE_URL}/api/v1/users/login`,
      body,
      defaultConfig
    );
    const secret = new TextEncoder().encode(process.env.REACT_APP_JWT_SECRET);
    const jwt = await new jose.SignJWT({ user: response.data.data.user })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt(Date.now())
      .setExpirationTime(Date.now() + 3600 * 24 * 1000)
      .sign(secret);
    cookies.set("token", jwt);

    return response.data;
  } catch (error) {
    console.error(error);
    return error.response.data;
  }
};

const logOut = async () => {
  try {
    await axios.get(`${BASE_URL}/api/v1/users/logout`);
    const cookies = new Cookies();
    cookies.remove("token");
    console.log(cookies);
  } catch (error) {
    console.error(error);
  }
};

export { getAllTours, logIn, logOut, autoAuth };
