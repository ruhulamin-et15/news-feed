import { useEffect, useState } from "react";
import { NewsContext } from "../context";
import { useNewsQuery } from "../hooks";

const NewsProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredNewsData, setFilteredNewsData] = useState([]);

  const apiUrl = selectedCategory
    ? `http://localhost:8000/v2/top-headlines?category=${selectedCategory}`
    : "http://localhost:8000/v2/top-headlines";

  const { newsData, loading, error } = useNewsQuery(apiUrl);

  useEffect(() => {
    if (newsData && newsData.articles) {
      setFilteredNewsData(newsData.articles);
    }
  }, [newsData, selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <NewsContext.Provider
      value={{
        newsData: filteredNewsData,
        loading,
        error,
        handleCategoryChange,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
