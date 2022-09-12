import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import API from "../api";
import FilmsGrid from "../components/FilmsGrid";
import Header from "../components/Header";
import PaginationBar from "../components/PaginationBar";
import SwitchLoading from "../components/SwitchLoading";
import { Films } from "../types/films.type";

export default function ListFilmsPage() {
  const { "0": searchParams } = useSearchParams();
  const field = searchParams.get("search");
  const value = searchParams.get("value");
  const [isLoading, setIsLoading] = useState(true);
  const [films, setFilms] = useState<Films[]>([]);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const getFilms = async () => {
      let params;
      if (field && value) params = { [field]: value };
      const response = await API.get("items", { params });
      if (response) {
        setFilms(response.data.films);
      }
      setIsLoading(false);
    };

    getFilms();
  }, [field, value]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Header goBackTo="/" />
      <h1 className="mt-4 self-start text-2xl font-semibold">List of Films</h1>
      <div className="mt-2 flex w-[1024px] flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold">Results ({films.length})</h2>
          <PaginationBar
            step={step}
            setStep={setStep}
            max={Math.ceil(films.length / 4)}
          />
        </div>
        <SwitchLoading
          isLoading={isLoading}
          className="flex h-[360px] w-full items-center justify-center"
        >
          {films.length > 0 ? (
            <FilmsGrid films={films} scrollValue={380 * (step - 1)} />
          ) : (
            <div className="flex h-[360px] w-full items-center justify-center">
              <p className="text-xl font-medium italic text-gray-400">
                No results found
              </p>
            </div>
          )}
        </SwitchLoading>
      </div>
    </div>
  );
}
