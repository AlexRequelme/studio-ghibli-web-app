import { Link } from "react-router-dom";
import logo from "../assets/studio-ghibli-logo.png";
import { ReactComponent as LeftArrowIcon } from "../assets/left-arrow.svg";

type HeaderProps = { goBackTo?: string };

export default function Header({ goBackTo }: HeaderProps) {
  return (
    <header className="flex w-full flex-col items-center">
      {goBackTo && (
        <Link
          to={goBackTo}
          className="mb-4 inline-flex items-center gap-2 self-start md:mb-0"
        >
          <LeftArrowIcon className="h-6 w-6" />
          <span className="mb-0.5 text-base">Back to Login</span>
        </Link>
      )}
      <img src={logo} alt="Studio Ghibli Logo" width="300px" />
    </header>
  );
}
