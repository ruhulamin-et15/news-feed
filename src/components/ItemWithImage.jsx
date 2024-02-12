import { useContext } from "react";
import { NewsContext } from "../context";
import { shortFormatDate } from "../utils/date-utils";

export default function ItemWithImage() {
  const { newsData, searchQuery } = useContext(NewsContext);

  if (searchQuery.trim() !== "") {
    return null;
  }

  return (
    <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
      <div className="col-span-12 md:col-span-6">
        <a>
          <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
            {newsData[6]?.title}[6]
          </h3>
        </a>
        <p className="text-base text-[#292219]">{newsData[6]?.description}</p>
        <p className="mt-5 text-base text-[#5C5955]">
          {shortFormatDate(newsData[6]?.publishedAt)}
        </p>
      </div>
      <div className="col-span-12 md:col-span-6">
        <img className="w-full" src={newsData[6]?.urlToImage} alt="thumb" />
      </div>
    </div>
  );
}
