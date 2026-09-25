import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NotesProvider } from "./context/NotesContext";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AddNotePage from "./pages/AddNotePage";
import EditNotePage from "./pages/EditNotePage";

function App() {
  return (
    <NotesProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<AddNotePage />} />
            <Route path="/edit/:id" element={<EditNotePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NotesProvider>
  );
}

export default App;
