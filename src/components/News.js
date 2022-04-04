import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {

  const [articles, setArticles] = useState([]);
  const [page,setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  const updateNews = async () => {
    props.setProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.Country}&category=${props.Category}&language=${props.Language}&pageSize=${props.pageSize}&page=${page}&apiKey=${props.Apikey}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults)
    console.log(parsedData);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.Country}&category=${props.Category}&language=${props.Language}&pageSize=${props.pageSize}&page=${page+1}&apiKey=${props.Apikey}`;
    setLoading(true);
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults)
    console.log(parsedData);
    setLoading(false);
  };

  return (
    <>
      <div>
        <div className="container px-4 pt-14 mb-40 mx-auto">
        <h1 className="block text-xl text-center font-medium mb-5 text-black text-3xl capitalize"> Top News - <span className="text-blue-600 uppercase">{props.Category}</span> </h1>
          {loading && <Spinner/>}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-5 px-4">
              {articles.map((element) => {
                return (
                  <div className="NewsItems" key={element.urlToImage}>
                    <NewsItems
                      key={element.urlToImage}
                      name={element.source.name}
                      title={element.title}
                      description={element.description}
                      author={element.author}
                      url={element.url}
                      urlToImage={element.urlToImage}
                      />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
}
