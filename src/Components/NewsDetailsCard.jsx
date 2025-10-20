import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="space-y-6">
      <img
        className="w-fullh-[350px] object-cover"
        src={news.image_url}
        alt=""
      />
      <h2 className="text-2xl">{news.title}</h2>
      <p>{news.details}</p>
      <Link className="btn btn-secondary" to={`/category/${news.category_id}`}>
        <HiArrowLeft size={20}/>
        All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
