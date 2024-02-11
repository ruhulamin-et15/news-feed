import { useContext } from "react";
import { NewsContext } from "../context";
import { shortFormatDate } from "../utils/date-utils";
import TopHeadline from "./TopHeadline";

export default function LeftItems() {
  const { newsData } = useContext(NewsContext);

  return (
    <>
      <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
        <TopHeadline />
        {newsData &&
          newsData.map((data) => (
            <div
              key={data.title}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <div className="col-span-12 md:col-span-4">
                <a href="#">
                  <h3 className="mb-2.5 t`ext-xl font-bold lg:text-2xl">
                    {data.title}
                  </h3>
                </a>
                {data.description !== null && (
                  <p className="text-base text-[#292219]">
                    {data.description && data.description.substring(0, 110)}...
                  </p>
                )}

                {/* {data.description !== null && (
                  <p className="text-base text-[#292219]">{data.description}</p>
                )} */}

                <p className="mt-5 text-base text-[#94908C]">
                  {shortFormatDate(data.publishedAt)}
                </p>
              </div>
              {data.urlToImage !== null && (
                <div className="col-span-12 md:col-span-6">
                  <img
                    className="w-full  min-h-48 max-h-48"
                    src={data.urlToImage}
                    alt="thumb"
                  />
                </div>
              )}
            </div>
          ))}
      </div>
    </>
  );
}
