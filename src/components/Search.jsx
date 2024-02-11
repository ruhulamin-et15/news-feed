import { useContext } from "react";
import { NewsContext } from "../context";

export default function Search() {
  const { handleSearch } = useContext(NewsContext);

  const doSearch = (item) => {
    handleSearch(item);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    doSearch(value);
  };

  return (
    <input
      onChange={handleChange}
      type="search"
      className="z-20 block w-full bg-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none"
      placeholder="Search News"
      autoFocus
    />
  );
}
