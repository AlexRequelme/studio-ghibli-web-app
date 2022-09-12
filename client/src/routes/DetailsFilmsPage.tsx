import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";
import FilmsCard from "../components/FilmsCard";
import Header from "../components/Header";
import SwitchLoading from "../components/SwitchLoading";
import { Films } from "../types/films.type";

export default function DetailsFilmsPage() {
  const [film, setFilm] = useState<Films>();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const getFilmDetails = async () => {
      if (id) {
        const response = await API.get(`items`, { params: { id } });
        if (response) {
          setFilm(response.data.films[0]);
        }
      }
      setIsLoading(false);
    };

    getFilmDetails();
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Header goBackTo="/" />
      <h1 className="mt-4 self-start text-2xl font-semibold">Details</h1>
      <div className="mt-4 flex w-[1024px] flex-col gap-4">
        <SwitchLoading
          isLoading={isLoading}
          className="flex h-[360px] w-full items-center justify-center"
        >
          {film ? (
            <FilmsCard mode="details" film={film} />
          ) : (
            <div className="flex h-[360px] w-full items-center justify-center">
              <p className="text-xl font-medium italic text-gray-400">
                No film found
              </p>
            </div>
          )}
        </SwitchLoading>
      </div>
    </div>
  );
}
