import { useState, useEffect } from "react";
import { getAllTours } from "../API";

export const useTourFetch = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isRenderFooter, setIsRenderFooter] = useState(false);

  const fetchTours = async () => {
    try {
      setIsLoading(true);
      setIsRenderFooter(true);
      setError(false);

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

  return { tours, isLoading, error, isRenderFooter };
};
