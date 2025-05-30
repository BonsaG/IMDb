import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  // Helper to avoid double slashes or leading slashes
  const imagePath = (result.backdrop_path || result.poster_path || "").replace(
    /^\/+/,
    ""
  );

  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        {imagePath ? (
          <Image
            src={`https://image.tmdb.org/t/p/w300/${imagePath}`} // or w500, w200, etc.
            alt={`${result.title || result.name} Poster`}
            width={300} // or 500, 200, etc.
            height={400} // adjust as needed for your design
            className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
          />
        ) : (
          <div className="bg-gray-300 h-60 w-full flex items-center justify-center">
            No Image
          </div>
        )}
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
