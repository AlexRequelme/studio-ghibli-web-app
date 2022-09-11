import logo from "../assets/studio-ghibli-logo.png";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

export default function SearchFilmsPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="Studio Ghibli Logo" width="300px" />
      <div className="relative h-[46px] min-w-[320px] rounded-3xl border-2 border-gray-200 px-3 focus-within:border-blue-600 md:w-[584px]">
        <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 transform text-gray-400">
          <SearchIcon className="h-5 w-5" />
        </div>
        <input
          type="text"
          className="h-full w-full appearance-none bg-transparent pl-8 text-base outline-none"
        />
      </div>
      <button className="rounded bg-gray-500 px-8 py-2 text-white hover:bg-gray-600">
        Search
      </button>
    </div>
  );
}
