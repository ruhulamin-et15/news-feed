import { useEffect, useState } from "react";
import { NewsContext } from "../context";
import { useDebounce, useNewsQuery } from "../hooks";

const NewsProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [filteredNewsData, setFilteredNewsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const debounceSearchQuery = useDebounce(searchQuery, 500);

  const { newsData, loading, error } = useNewsQuery(
    `http://localhost:8000/v2/top-headlines?category=${selectedCategory}`
  );

  useEffect(() => {
    if (newsData && newsData.articles) {
      let filteredData = newsData.articles;
      const query = debounceSearchQuery.toString().trim();
      if (query !== "") {
        filteredData = filteredData.filter(
          (article) =>
            (article.title &&
              article.title.toLowerCase().includes(query.toLowerCase())) ||
            (article.description &&
              article.description.toLowerCase().includes(query.toLowerCase()))
        );
      }
      setFilteredNewsData(filteredData);
    }
  }, [newsData, selectedCategory, debounceSearchQuery]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = async (searchQuery) => {
    setSearchQuery(searchQuery);
  };

  return (
    <NewsContext.Provider
      value={{
        newsData: filteredNewsData,
        loading,
        error,
        handleCategoryChange,
        handleSearch,
        searchQuery,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
