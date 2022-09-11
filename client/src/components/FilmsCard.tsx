import { Link } from "react-router-dom";
import { ReactComponent as StarIcon } from "../assets/star.svg";
import { Films } from "../types/films.type";

type FilmsCardProps = {
  mode: "preview" | "details";
  film: Films;
};

export default function FilmsCard({ mode, film }: FilmsCardProps) {
  return (
    <Link to={`/items/${film.id}`} className="w-60">
      <div className="relative">
        <img
          src={film.img}
          alt="Film"
          className="w-60 rounded-md object-contain"
        />
        <div className="absolute top-2 right-2 flex w-min items-center gap-1 rounded-full bg-slate-700 px-3 py-1.5">
          <p className="text-sm font-semibold text-white">{film.rtScore}</p>
          <StarIcon className="h-4 w-4 text-yellow-500" />
        </div>
      </div>
    </Link>
  );
}
