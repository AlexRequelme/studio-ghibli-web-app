import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex h-14 items-center justify-between bg-[#f6f6f6] px-4 text-gray-700 md:px-8">
      © {currentYear} Alexander Requelme
      <div className="inline-flex gap-4">
        <a
          href="https://github.com/AlexRequelme"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon className="h-5 w-5 fill-current" />
        </a>
        <a
          href="https://www.linkedin.com/in/alexrequelme/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon className="h-5 w-5 fill-current" />
        </a>
      </div>
    </footer>
  );
}
