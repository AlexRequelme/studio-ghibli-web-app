import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { SearchForm } from "../types/search.type";

export default function SearchFilmsPage() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<SearchForm>();

  const handleSearch: SubmitHandler<SearchForm> = (data) => {
    navigate({
      pathname: "/items",
      search: `?search=${data.query}&value=${data.value}`,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <Header />
      <form
        onSubmit={handleSubmit(handleSearch)}
        autoComplete="off"
        className="flex flex-col items-center justify-center gap-8"
      >
        <SearchBar register={register} />
        <button
          type="submit"
          className="rounded bg-gray-500 px-8 py-2 text-white hover:bg-gray-600"
        >
          Search
        </button>
      </form>
    </div>
  );
}
