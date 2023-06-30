import { useState, useEffect } from "react";
import { getAllTours } from "../API";

export const useTourFetch = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchTours = async () => {
    try {
      setError(false);
      setIsLoading(true);

      const tours = await getAllTours();
      setTours(tours.data);
    } catch (error) {
      setError(true);
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  // useEffect(() => {
  //   if (isLoading === true) {
  //     console.log("loading...");
  //   } else {
  //     console.log("finish");
  //   }
  // }, [isLoading]);

  return { tours, isLoading, error };
};
