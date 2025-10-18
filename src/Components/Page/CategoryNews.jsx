import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Neswcard from "../Neswcard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);
  //   console.log(id, data);
  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filterNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filterNews);
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filterNews);
    }
  }, [data, id]);
  return (
    <div>
      <h2 className="font-semibold mb-5">
        Total <samp className="text-secondary"> {categoryNews.length} </samp>
        Found
      </h2>
      <div className="grid grid-cols-1 gap-5">
        {
            categoryNews.map(news=>(
                <Neswcard key={news.id} news={news}></Neswcard>
            ))
        }
      </div>
    </div>
  );
};

export default CategoryNews;
