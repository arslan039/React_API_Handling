import { useEffect, useState } from "react";
import axios from "axios";

function ReactQuery(urlPath) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(urlPath, {
          signal: controller.signal,
        });
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          // console.log(error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup function, cancel the request if the component unmounts
      controller.abort(); // Use controller.abort()
    };
  }, [urlPath]);

  return { data, error, loading };
}

export default ReactQuery;
