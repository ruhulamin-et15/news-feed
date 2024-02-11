import { useContext } from "react";
import Footer from "./components/Footer";
import LeftItems from "./components/LeftItems";
import Navbar from "./components/Navbar";
import RightItems from "./components/RightItems";
import { NewsContext } from "./context";

export default function Page() {
  const { loading, newsData } = useContext(NewsContext);

  return (
    <>
      <Navbar />
      {loading ? (
        <p className="text-center text-3xl  min-h-screen">Loading...</p>
      ) : (
        <>
          <main className="my-10 lg:my-14">
            {newsData.length === 0 ? (
              <p className="flex text-center text-3xl border-yellow-400 border italic items-center mx-20 justify-center rounded-md min-h-96">
                News not found, please another one
              </p>
            ) : (
              <div className="container mx-auto grid grid-cols-12 gap-8">
                <LeftItems />
                <RightItems />
              </div>
            )}
          </main>
        </>
      )}
      <Footer />
    </>
  );
}
