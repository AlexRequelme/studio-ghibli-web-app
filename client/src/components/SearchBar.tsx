import { UseFormRegister } from "react-hook-form";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { SearchForm } from "../types/search.type";

type SearchBarProps = {
  register: UseFormRegister<SearchForm>;
};

export default function SearchBar({ register }: SearchBarProps) {
  return (
    <div className="relative h-[46px] w-[300px] min-w-[288px] rounded-3xl border-2 border-gray-200 pr-12 focus-within:border-blue-500 md:w-[584px]">
      <select
        {...register("query", { required: true })}
        className="absolute h-full w-28 rounded-l-3xl border-r-8 border-r-transparent bg-gray-100 px-3 text-sm md:w-max md:text-base"
        defaultValue="title"
      >
        <option value="title">Title</option>
        <option value="director">Director</option>
        <option value="producer">Producer</option>
      </select>
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 transform text-gray-400">
        <SearchIcon className="h-5 w-5" />
      </div>
      <input
        type="text"
        {...register("value", { required: true })}
        className="h-full w-full appearance-none bg-transparent pl-[120px] text-base outline-none md:pl-[136px]"
      />
    </div>
  );
}
