import { Dispatch, SetStateAction } from "react";
import { ReactComponent as LeftIcon } from "../assets/left-arrow.svg";
import { ReactComponent as RightIcon } from "../assets/right-arrow.svg";

type PaginationBarProps = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  max: number;
  min?: number;
};

export default function PaginationBar({
  step,
  setStep,
  max,
  min = 1,
}: PaginationBarProps) {
  const handleChangeStep = (value: number) => {
    const newValue = step + value;
    if (newValue >= min && newValue <= max) {
      setStep(newValue);
    }
  };

  return (
    <ul className="inline-flex h-auto items-center -space-x-px">
      <li>
        <button
          type="button"
          className="ml-0 block rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-40"
          onClick={() => handleChangeStep(-1)}
          disabled={min === step}
        >
          <span className="sr-only">Previous</span>
          <LeftIcon className="h-5 w-5" />
        </button>
      </li>
      <li>
        <div className="border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          {step}
        </div>
      </li>
      <li>
        <button
          type="button"
          className="block rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-40"
          onClick={() => handleChangeStep(1)}
          disabled={max === step}
        >
          <span className="sr-only">Next</span>
          <RightIcon className="h-5 w-5" />
        </button>
      </li>
    </ul>
  );
}
