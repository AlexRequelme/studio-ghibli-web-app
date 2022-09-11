import { Route, Routes } from "react-router-dom";
import DetailsFilmsPage from "./routes/DetailsFilmsPage";
import ListFilmsPage from "./routes/ListFilmsPage";
import SearchFilmsPage from "./routes/SearchFilmsPage";
import { ReactComponent as GithubIcon } from "./assets/github.svg";
import { ReactComponent as LinkedinIcon } from "./assets/linkedin.svg";

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="flex min-h-[calc(100vh-3.5rem)] justify-center">
        <Routes>
          <Route path="/" element={<SearchFilmsPage />} />
          <Route path="expenses" element={<ListFilmsPage />} />
          <Route path="invoices" element={<DetailsFilmsPage />} />
        </Routes>
      </div>
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
    </>
  );
}

export default App;
