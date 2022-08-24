import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../constants/apiConstants";

export const useFetch = (url) => {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        console.log("send fetch request");
        setLoading(true);
        const response = await axios.get(API_BASE_URL + url);
        setResponseData(response.data);
        console.log(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { responseData, error, loading };
};
