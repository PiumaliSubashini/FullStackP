import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import BooksList from "./components/book_list.component";
import CreateBook from "./components/create-book.compenent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BooksList />} exact />
        <Route path="/create" element={<CreateBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
