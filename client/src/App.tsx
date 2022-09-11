import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import DetailsFilmsPage from "./routes/DetailsFilmsPage";
import ListFilmsPage from "./routes/ListFilmsPage";
import SearchFilmsPage from "./routes/SearchFilmsPage";

function App() {
  return (
    <>
      <div className="flex min-h-[calc(100vh-3.5rem)] justify-center">
        <Routes>
          <Route path="/" element={<SearchFilmsPage />} />
          <Route path="items/*">
            <Route index element={<ListFilmsPage />} />
            <Route path=":id" element={<DetailsFilmsPage />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
