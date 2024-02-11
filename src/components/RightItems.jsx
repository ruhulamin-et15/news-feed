import { useContext } from "react";
import { NewsContext } from "../context";
import { shortFormatDate } from "../utils/date-utils";
import RightHeadline from "./RightHeadline";

export default function RightItems() {
  // const { newsData } = useNewsQuery(`http://localhost:8000/v2/top-headlines`);

  const { newsData, loading } = useContext(NewsContext);

  if (loading) {
    return <p>loading....</p>;
  }

  return (
    <div className="col-span-12 self-start xl:col-span-4">
      <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
        <RightHeadline />

        {newsData &&
          newsData.map((data) => (
            <div key={data.title} className="col-span-12 md:col-span-8">
              <div className="col-span-12 md:col-span-4">
                <a href="#">
                  <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                    {data.title}
                  </h3>
                </a>
                <p className="text-base text-[#292219]">{data.description}</p>
                <p className="mt-5 text-base text-[#94908C]">
                  {shortFormatDate(data.publishedAt)}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
