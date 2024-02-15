import { useEffect, useState } from "react";

const useSearchQuery = (url) => {
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("response failed!");
        }
        const data = await response.json();
        setSearchResults(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { searchResults, loading, error };
};

export default useSearchQuery;
