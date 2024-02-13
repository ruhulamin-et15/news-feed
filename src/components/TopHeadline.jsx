import { useContext } from "react";
import { NewsContext } from "../context";
import { shortFormatDate } from "../utils/date-utils";

export default function TopHeadline() {
  const { newsData, searchQuery } = useContext(NewsContext);

  if (searchQuery.trim() !== "") {
    return null;
  }

  return (
    <div className="col-span-12 grid grid-cols-12 gap-4">
      {newsData[1]?.urlToImage !== null ? (
        <>
          <div className="col-span-12 lg:col-span-4">
            <a href="#">
              <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                {newsData[1]?.title}
              </h3>
            </a>
            <p className="text-base text-[#5C5955]">
              {newsData[1]?.description}
            </p>
            <p className="mt-5 text-base text-[#5C5955]">
              {shortFormatDate(newsData[1]?.publishedAt)}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <img
              className="w-full"
              src={newsData[1]?.urlToImage}
              alt="no image"
            />
            <p className="mt-5 text-base text-[#5C5955]">
              {newsData[1]?.author}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="col-span-12 lg:col-span-4">
            <a href="#">
              <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                {newsData[2]?.title}
              </h3>
            </a>
            <p className="text-base text-[#5C5955]">
              {newsData[2]?.description}
            </p>
            <p className="mt-5 text-base text-[#5C5955]">
              {shortFormatDate(newsData[2]?.publishedAt)}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <img
              className="w-full"
              src={newsData[2]?.urlToImage}
              alt="no image"
            />
            <p className="mt-5 text-base text-[#5C5955]">
              {newsData[2]?.author}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
