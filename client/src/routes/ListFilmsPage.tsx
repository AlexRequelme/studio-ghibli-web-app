import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import FilmsCard from "../components/FilmsCard";
import Header from "../components/Header";
import { Films } from "../types/films.type";

export default function ListFilmsPage() {
  const { "0": searchParams } = useSearchParams();
  const searchQuery = searchParams.get("search");
  const [films, setFilms] = useState<Films[]>([]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Header goBackTo="/" />
      <h1 className="mt-6 self-start text-2xl font-semibold">All items</h1>
      <div className="mt-4 flex w-[1024px] flex-col gap-4">
        <h2 className="text-base font-semibold">Results ({films.length})</h2>
        {films.length > 0 ? (
          <div className="grid grid-flow-row grid-cols-4 justify-items-start gap-5">
            {films.map((item) => (
              <FilmsCard key={item.id} mode="preview" film={item} />
            ))}
          </div>
        ) : (
          <div className="flex h-[360px] w-full items-center justify-center">
            <p className="text-xl font-medium italic text-gray-400">
              No results found
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
