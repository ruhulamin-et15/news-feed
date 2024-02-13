/* eslint-disable react/prop-types */
import { shortFormatDate } from "../utils/date-utils";

const NewsDetails = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-70 z-50">
      <div className="bg-white p-4 max-w-xl w-70vh rounded-lg shadow-lg">
        <button
          className="mb-5 border px-2 rounded-md hover:bg-red-500"
          onClick={onClose}
        >
          X
        </button>
        <div className="col-span-12 mb-6 md:col-span-8">
          <img className="w-full" src={data.urlToImage} alt="no image" />
          <div className="col-span-12 mt-6 md:col-span-4">
            {data.author && <p className="mb-2">Author: {data.author}</p>}
            <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
              {data.title}
            </h3>
            <p className="mb-5 text-base text-[#292219]">{data.description}</p>{" "}
            <p className="text-base text-[#292219]">{data.content}</p>
            <p className="mt-5 text-base text-[#94908C]">
              {shortFormatDate(data.publishedAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
