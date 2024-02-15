import { NewsContext } from "../context";
import { useNewsQuery } from "../hooks";

const NewsProvider = ({ children }) => {
  const { newsData, handleCategoryChange, error, loading } = useNewsQuery();

  return (
    <NewsContext.Provider
      value={{ newsData, error, loading, handleCategoryChange }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
