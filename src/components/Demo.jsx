<div className="col-span-12 grid grid-cols-12 gap-4">
{/* info */}
<div className="col-span-12 lg:col-span-4">
  <a href="#">
    <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
      Cities have stopped being the engines of growth and opportunity
      they once were
    </h3>
  </a>
  <p className="text-base text-[#5C5955]">
    The pandemic is dealing prodigious blows to cities across the
    country. But the world can’t hope to thrive again if its cities
    don’t—they’re the places that have historically supplied the keys
    for unlocking human potential. Though beset by racism and other
    injustices, cities not only provided shared, robust public
    infrastructure like schools, libraries and transit systems, they
    stirred together vast numbers of people from different cultures and
    classes.
  </p>
  <p className="mt-5 text-base text-[#5C5955]">1 hour ago</p>
</div>
{/* thumb */}
<div className="col-span-12 lg:col-span-8">
  <img className="w-full" src="./assets/thumb_lg.png" alt="thumb" />
  <p className="mt-5 text-base text-[#5C5955]">
    Illustration: Karolis Strautniekas
  </p>
</div>
</div>

<div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
{/* info */}
<div className="col-span-12 md:col-span-6">
  <a href>
    <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
      Gold hits eight-month low as higher bond yields dent its appeal
    </h3>
  </a>
  <p className="text-base text-[#292219]">
    Exchange traded funds tracking the metal sustain biggest outflows in
    a year
  </p>
  <p className="mt-5 text-base text-[#5C5955]">1 hour ago</p>
</div>
{/* thumb */}
<div className="col-span-12 md:col-span-6">
  <img className="w-full" src="./assets/thumb.png" alt="thumb" />
</div>
</div>

<div className="col-span-12 md:col-span-6 lg:col-span-4">
{/* info */}
<div className="col-span-12 md:col-span-4">
  <a href="#">
    <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
      Spac led by tech founders targets Europe’s unicorns for US
      listings
    </h3>
  </a>
  <p className="text-base text-[#292219]">
    Tailwind International looks to bypass EU and UK markets to build a
    European tech franchise
  </p>
  <p className="mt-5 text-base text-[#94908C]">Yesterday</p>
</div>
</div>

<div className="col-span-12 md:col-span-6 lg:col-span-4">
{/* info */}
<div className="col-span-12 md:col-span-4">
  <a href="#">
    <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
      End of ‘liquidity premium’ to unleash shareholder activism
    </h3>
  </a>
  <p className="text-base text-[#292219]">
    Companies will face questioning from investors on how to allow
    allocate excess funds
  </p>
  <p className="mt-5 text-base text-[#94908C]">25 Feb 2021</p>
</div>
</div>

<div className="col-span-12 md:col-span-6 lg:col-span-4">
{/* info */}
<div className="col-span-12 md:col-span-4">
  <a href="#">
    <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
      Why it is usually a mistake for investors to take profits
    </h3>
  </a>
  <p className="text-base text-[#292219]">
    Why it is usually a mistake for investors to take profitsA tiny
    number of superstar companies account for returns from equity
    markets
  </p>
  <p className="mt-5 text-base text-[#94908C]">25 Feb 2021</p>
</div>
</div>

<div className="col-span-12 md:col-span-6 lg:col-span-4">
{/* info */}
<div className="col-span-12 md:col-span-4">
  <a href="#">
    <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
      Financials may be a silver lining in bond market rout
    </h3>
  </a>
  <p className="text-base text-[#292219]">
    Rising longer-term rates should boost profitability after many
    difficult years for sector
  </p>
  <p className="mt-5 text-base text-[#94908C]">25 Feb 2021</p>
</div>
</div>

<div className="col-span-12 md:col-span-6 lg:col-span-4">
{/* info */}
<div className="col-span-12 md:col-span-4">
  <a href="#">
    <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
      Bitcoin cannot replace the banks
    </h3>
  </a>
  <p className="text-base text-[#292219]">
    Cryptocurrency hopes are based on a misunderstanding of how money is
    created
  </p>
  <p className="mt-5 text-base text-[#94908C]">25 Feb 2021</p>
</div>
</div>



  //search title and desc
  // const handleSearch = async (query) => {
  //   try {
  //     const response = await fetch(
  //       ` http://localhost:8000/v2/search?q=${query}`
  //     );
  //     const searchData = response.json();
  //     setFilteredNewsData(searchData.articles);
  //     console.log(searchData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (newsData && newsData?.articles) {
  //     if (search.trim() === "") {
  //       setFilteredNewsData(newsData?.articles);
  //     } else {
  //       const filteredSearchData = newsData?.articles.filter((article) =>
  //         article.title.toLowerCase().includes(search.toLowerCase())
  //       );
  //       setFilteredNewsData(filteredSearchData);
  //     }
  //   }
  // }, [search, newsData]);




  //conditional render news image/no image
  // import React from "react";

// import { useContext } from "react";
// import { NewsContext } from "../context";
// import { shortFormatDate } from "../utils/date-utils";
// import TopHeadline from "./TopHeadline";

// export default function LeftItems() {
//   const { newsData } = useContext(NewsContext);

//   return (
//     <>
//       <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
//         <TopHeadline />
//         {newsData &&
//           newsData.map((data) => (
//             <React.Fragment key={data.title}>
//               {data.urlToImage !== null ? (
//                 <>
//                   <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
//                     <div className="col-span-12 md:col-span-6">
//                       <a href>
//                         <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
//                           {data.title}
//                         </h3>
//                       </a>
//                       <p className="text-base text-[#292219]">
//                         {data.description}
//                       </p>
//                       <p className="mt-5 text-base text-[#5C5955]">
//                         {shortFormatDate(data.publishedAt)}
//                       </p>
//                     </div>
//                     <div className="col-span-12 md:col-span-6">
//                       <img
//                         className="w-full"
//                         src={data.urlToImage}
//                         alt="thumb"
//                       />
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 <div className="col-span-12 md:col-span-6 lg:col-span-4">
//                   <div className="col-span-12 md:col-span-4">
//                     <a href="#">
//                       <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
//                         {data.title}
//                       </h3>
//                     </a>
//                     <p className="text-base text-[#292219]">
//                       {data.description}
//                     </p>
//                     <p className="mt-5 text-base text-[#94908C]">
//                       {shortFormatDate(data.publishedAt)}
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </React.Fragment>
//           ))}
//       </div>
//     </>
//   );
// }



