import { Link } from "react-router-dom";
import { ReactComponent as StarIcon } from "../assets/star.svg";
import { Films } from "../types/films.type";

type FilmsCardProps = {
  mode: "preview" | "details";
  film: Films;
};

export default function FilmsCard({ mode, film }: FilmsCardProps) {
  if (mode === "preview") {
    return (
      <Link to={`/items/${film.id}`} className="w-60">
        <div className="relative">
          <img
            src={film.image}
            alt="Film"
            className="w-60 rounded-md object-contain"
          />
          <div className="absolute top-2 right-2 flex w-min items-center gap-1 rounded-full bg-slate-700 px-3 py-1.5">
            <p className="text-sm font-semibold text-white">{film.rt_score}</p>
            <StarIcon className="h-4 w-4 text-yellow-500" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="flex gap-6">
      <img
        src={film.image}
        alt={film.title}
        className="w-60 rounded-md object-contain"
      />
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{film.title}</h2>
          <h2 className="text-xl font-semibold text-gray-600">
            {film.original_title_romanised}
          </h2>
        </div>
        <p className="text-justify text-gray-700">{film.description}</p>
        <p className="text-gray-700">
          <span className="font-semibold">Director: </span>
          {film.director}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Producer: </span>
          {film.producer}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Release year: </span>
          {film.release_date}
        </p>
        <div className="flex items-center gap-1 text-gray-700">
          <span className="font-semibold">Rating:</span>
          <p>{film.rt_score}/100</p>
          <StarIcon className="h-6 w-6 text-yellow-500" />
        </div>
      </div>
    </div>
  );
}
