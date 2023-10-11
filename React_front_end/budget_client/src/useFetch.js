import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Unable to fetch the data");
        }
        return res.json();
      })
      .then((responseData) => {
        if (responseData.length > 0) {
          const firstItem = responseData[0];
          console.log("this is the data here:", firstItem);
          console.log("this the id:", firstItem.id);
          setData(firstItem);
          setError(null);
        } else {
          setError("No budget data found.");
        }
      })
      .catch((err) => {
        setError(err.message);
        console.error(err);
      });
  }, [url]);

  return { data, error };
};

export default useFetch;
