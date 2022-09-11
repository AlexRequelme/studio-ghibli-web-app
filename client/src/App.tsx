import { Route, Routes } from "react-router-dom";
import DetailsFilmsPage from "./routes/DetailsFilmsPage";
import ListFilmsPage from "./routes/ListFilmsPage";
import SearchFilmsPage from "./routes/SearchFilmsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchFilmsPage />} />
      <Route path="expenses" element={<ListFilmsPage />} />
      <Route path="invoices" element={<DetailsFilmsPage />} />
    </Routes>
  );
}

export default App;
