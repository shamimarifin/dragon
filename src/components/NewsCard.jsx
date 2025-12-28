import React from 'react'
import { FaStar, FaEye, FaBookmark, FaShareAlt } from 'react-icons/fa'

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view
  } = news

  return (
    <div className="border rounded-lg bg-white shadow-sm overflow-hidden">
      
      {/* Author */}
      <div className="flex justify-between items-center bg-gray-100 p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">{author.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-3">{title}</h2>

        {/* Image */}
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full rounded-md mb-4"
        />

        {/* Details */}
        <p className="text-gray-600 text-sm">
          {details.length > 200 ? details.slice(0, 200) + '...' : details}
          <span className="text-orange-500 font-medium cursor-pointer ml-1">
            Read More
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4">
        <div className="flex items-center gap-1 text-orange-400">
          {
            [...Array(rating.number)].map((_, i) => (
              <FaStar key={i} />
            ))
          }
          <span className="text-gray-700 ml-2">{rating.number}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
