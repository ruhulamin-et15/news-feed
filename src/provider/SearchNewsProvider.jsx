import { useEffect, useState } from "react";
import { SearchContext } from "../context";
import { useDebounce, useSearchQuery } from "../hooks";

const SearchNewsProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const debounceSearchQuery = useDebounce(searchQuery, 1000);

  const apiUrl = `http://localhost:8000/v2/search?q=${debounceSearchQuery}`;

  const {
    searchResults: fetchedResults,
    loading: searchLoading,
    error: searchError,
  } = useSearchQuery(apiUrl);

  useEffect(() => {
    setSearchResults(fetchedResults);
    setLoading(searchLoading);
    setError(searchError);
  }, [fetchedResults, searchLoading, searchError]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <SearchContext.Provider
      value={{ searchResults, loading, error, handleSearch, searchQuery }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchNewsProvider;
