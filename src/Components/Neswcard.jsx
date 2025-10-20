import { CiShare2 } from "react-icons/ci";
import { FaEye, FaRegBookmark, FaStar } from "react-icons/fa";
import { Link } from "react-router";

export default function Neswcard({ news }) {
  const {
    title,
    author,
    thumbnail_url,
    rating,
    total_view,
    id,

    details,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl  hover:shadow-2xl transition duration-300">
      
      {/* Author Info */}
      <div className="flex items-center justify-between px-4 py-3 bg-base-200 ">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date)
                .toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })
                .replace(/ /g, "-")}
            </p>
          </div>
        </div>
        <div className="flex gap-1">
          <FaRegBookmark />
          <CiShare2 />

        </div>
        
      </div>
      <div className="card-body">
        <h2 className="card-title text-lg font-bold leading-snug">{title}</h2>
      </div>

      {/* Thumbnail */}
      <figure>
        
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-60 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body">
        
        <p className="text-sm text-gray-600 line-clamp-3">{details}</p>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-end text-sm">
          <Link to={`/news-details/${id}`}>
          <button className="btn btn-sm btn-primary normal-case">
            Read More
          </button></Link>
        </div>
        <div>
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-1">
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <span>{rating.number}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaEye className="text-gray-500" />
              <span>{total_view}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
