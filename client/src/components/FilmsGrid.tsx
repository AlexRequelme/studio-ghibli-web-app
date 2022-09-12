import { useEffect, useRef } from "react";
import { Films } from "../types/films.type";
import FilmsCard from "./FilmsCard";

type FilmsGridProps = {
  films: Films[];
  scrollValue: number;
};

export default function FilmsGrid({ films, scrollValue }: FilmsGridProps) {
  const gridRef = useRef<any>(null);

  useEffect(() => {
    if (gridRef.current) {
      console.log("Move");
      gridRef.current.scrollTop = scrollValue;
      console.log(gridRef.current.scrollTop);
    }
  }, [scrollValue]);

  return (
    <div
      ref={gridRef}
      className="grid h-[360px] grid-flow-row grid-cols-4 justify-items-start gap-5 overflow-hidden scroll-smooth"
    >
      {films.map((item) => (
        <FilmsCard key={item.id} mode="preview" film={item} />
      ))}
    </div>
  );
}
