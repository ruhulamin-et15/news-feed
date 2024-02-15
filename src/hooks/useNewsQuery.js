import { useEffect, useState } from "react";

const useNewsQuery = () => {
  const [newsData, setNewsData] = useState({
    general: {
      status: "",
      totalResults: 0,
      articles: [],
    },
    business: {
      status: "",
      totalResults: 0,
      articles: [],
    },
    entertainment: {
      status: "",
      totalResults: 0,
      articles: [],
    },
    health: {
      status: "",
      totalResults: 0,
      articles: [],
    },
    science: {
      status: "",
      totalResults: 0,
      articles: [],
    },
    sports: {
      status: "",
      totalResults: 0,
      articles: [],
    },
    technology: {
      status: "",
      totalResults: 0,
      articles: [],
    },
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState();
  const [filteredNewsData, setFilteredNewsData] = useState("");
  console.log(filteredNewsData);

  useEffect(() => {
    const fetchNewsData = async () => {
      setLoading(true);
      try {
        if (selectedCategory) {
          const res = await fetch(
            `http://localhost:8000/v2/top-headlines?category=${selectedCategory}`
          );
          if (!res.ok) {
            throw new Error(`Failed to fetch news data!`);
          }
          const data = await res.json();
          console.log(data);
          setNewsData((prevData) => ({
            ...prevData,
            [selectedCategory]: {
              status: data.status,
              totalResults: data.totalResults,
              articles: data.articles,
            },
          }));
        }

        const generalResponse = await fetch(
          "http://localhost:8000/v2/top-headlines?category=general"
        );
        const businessResponse = await fetch(
          "http://localhost:8000/v2/top-headlines?category=business"
        );
        const entertainmentResponse = await fetch(
          "http://localhost:8000/v2/top-headlines?category=entertainment"
        );
        const healthResponse = await fetch(
          "http://localhost:8000/v2/top-headlines?category=health"
        );
        const scienceResponse = await fetch(
          "http://localhost:8000/v2/top-headlines?category=science"
        );
        const sportsResponse = await fetch(
          "http://localhost:8000/v2/top-headlines?category=sports"
        );
        const technologyResponse = await fetch(
          "http://localhost:8000/v2/top-headlines?category=technology"
        );

        if (
          !generalResponse.ok ||
          !businessResponse.ok ||
          !entertainmentResponse.ok ||
          !healthResponse.ok ||
          !scienceResponse.ok ||
          !sportsResponse.ok ||
          !technologyResponse.ok
        ) {
          throw new Error("Failed to fetch news data!");
        }

        const generalData = await generalResponse.json();
        const businessData = await businessResponse.json();
        const entertainmentData = await entertainmentResponse.json();
        const healthData = await healthResponse.json();
        const scienceData = await scienceResponse.json();
        const sportsData = await sportsResponse.json();
        const technologyData = await technologyResponse.json();

        setNewsData({
          general: {
            status: generalData.status,
            totalResults: generalData.totalResults,
            articles: generalData.articles,
          },
          business: {
            status: businessData.status,
            totalResults: businessData.totalResults,
            articles: businessData.articles,
          },
          entertainment: {
            status: entertainmentData.status,
            totalResults: entertainmentData.totalResults,
            articles: entertainmentData.articles,
          },
          health: {
            status: healthData.status,
            totalResults: healthData.totalResults,
            articles: healthData.articles,
          },
          science: {
            status: scienceData.status,
            totalResults: scienceData.totalResults,
            articles: scienceData.articles,
          },
          sports: {
            status: sportsData.status,
            totalResults: sportsData.totalResults,
            articles: sportsData.articles,
          },
          technology: {
            status: technologyData.status,
            totalResults: technologyData.totalResults,
            articles: technologyData.articles,
          },
        });
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchNewsData();
  }, [selectedCategory]);

  const allArticles = [];
  if (newsData.general.articles) {
    allArticles.push(...newsData.general.articles);
  }
  if (newsData.business.articles) {
    allArticles.push(...newsData.business.articles);
  }
  if (newsData.entertainment.articles) {
    allArticles.push(...newsData.entertainment.articles);
  }
  if (newsData.health.articles) {
    allArticles.push(...newsData.health.articles);
  }
  if (newsData.science.articles) {
    allArticles.push(...newsData.science.articles);
  }
  if (newsData.sports.articles) {
    allArticles.push(...newsData.sports.articles);
  }
  if (newsData.technology.articles) {
    allArticles.push(...newsData.technology.articles);
  }

  useEffect(() => {
    if (selectedCategory && newsData[selectedCategory]) {
      setFilteredNewsData(newsData[selectedCategory].articles);
    } else if (!selectedCategory) {
      const allArticles = Object.values(newsData).flatMap(
        (category) => category.articles
      );
      setFilteredNewsData(allArticles);
    }
  }, [selectedCategory, newsData]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return { newsData: filteredNewsData, loading, error, handleCategoryChange };
};

export default useNewsQuery;
