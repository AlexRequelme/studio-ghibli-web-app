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
      const height = gridRef.current.offsetHeight + 20;
      gridRef.current.scrollTop = height * scrollValue;
      console.log(gridRef.current.scrollTop);
    }
  }, [scrollValue]);

  return (
    <div
      ref={gridRef}
      className="z-30 grid h-[1500px] grid-flow-row grid-cols-1 justify-items-center gap-5 overflow-hidden scroll-smooth md:h-[360px] md:grid-cols-4 md:justify-items-start"
    >
      {films.map((item) => (
        <FilmsCard key={item.id} mode="preview" film={item} />
      ))}
    </div>
  );
}
