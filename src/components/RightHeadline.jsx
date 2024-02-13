import { useContext } from "react";
import { NewsContext } from "../context";
import { shortFormatDate } from "../utils/date-utils";

export default function RightHeadline() {
  const { newsData, searchQuery } = useContext(NewsContext);

  if (searchQuery.trim() !== "") {
    return null;
  }

  return (
    <div className="col-span-12 mb-6 md:col-span-8">
      {newsData[8]?.urlToImage !== null ? (
        <>
          <img
            className="w-full"
            src={newsData[8]?.urlToImage}
            alt="no image"
          />
          <div className="col-span-12 mt-6 md:col-span-4">
            <a href="#">
              <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                {newsData[8]?.title}
              </h3>
            </a>
            <p className="text-base text-[#292219]">
              {newsData[8]?.description}
            </p>
            <p className="mt-5 text-base text-[#94908C]">
              {shortFormatDate(newsData[8]?.publishedAt)}
            </p>
          </div>
        </>
      ) : (
        <>
          <img
            className="w-full"
            src={newsData[9]?.urlToImage}
            alt="no image"
          />
          <div className="col-span-12 mt-6 md:col-span-4">
            <a href="#">
              <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                {newsData[9]?.title}
              </h3>
            </a>
            <p className="text-base text-[#292219]">
              {newsData[9]?.description}
            </p>
            <p className="mt-5 text-base text-[#94908C]">
              {shortFormatDate(newsData[9]?.publishedAt)}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
