import { useState, useEffect } from "react";
import { logIn, logOut } from "../API";
import { Cookies } from "react-cookie";

export const useTourFetch = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);

  const cookies = new Cookies();
  const token = cookies.get("token");

  // autoAuth

  // Login

  // Logout

  // const fetchTours = async () => {
  //   try {
  //     setIsLoading(true);
  //     setIsRenderFooter(true);
  //     setError(false);
  //     const tours = await getAllTours();
  //     setTours(tours.data);
  //   } catch (error) {
  //     setError(true);
  //     console.error(error);
  //   }
  //   setIsLoading(false);
  // };
  // useEffect(() => {
  //   fetchTours();
  // }, []);
  // return { tours, isLoading, error, isRenderFooter };
};
