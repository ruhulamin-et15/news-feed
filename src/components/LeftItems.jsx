import { useContext, useState } from "react";
import { NewsContext } from "../context";
import { shortFormatDate } from "../utils/date-utils";
import ItemWithImage from "./ItemWithImage";
import NewsDetails from "./NewsDetails";
import TopHeadline from "./TopHeadline";

export default function LeftItems() {
  const [openDetails, setOpenDetails] = useState(false);

  const toggleModal = (openDetails) => {
    setOpenDetails(openDetails);
  };

  const { newsData } = useContext(NewsContext);
  return (
    <>
      {openDetails && (
        <NewsDetails
          isOpen={openDetails !== null}
          data={openDetails}
          onClose={() => toggleModal(null)}
        />
      )}
      <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
        <TopHeadline />
        <ItemWithImage />

        {newsData &&
          newsData.map((data) => (
            <div
              key={data.title}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <div className="col-span-12 md:col-span-4">
                <a href="#" onClick={() => toggleModal(data)}>
                  <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
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
    </>
  );
}
