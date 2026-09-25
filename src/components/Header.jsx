import { Link } from "react-router-dom";
import { useNotes } from "../context/NotesContext";

function Header() {
  const { notes } = useNotes();
  const totalNotes = notes.length;

  return (
    <header className="app-header">
      <div className="container py-5">
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3">
          <div>
            <span className="eyebrow">PERSONAL NOTE SPACE</span>
            <h1 className="display-5 fw-bold mb-2">
              <Link to="/" className="text-decoration-none text-reset">
                Quick Notes
              </Link>
            </h1>
            <p className="header-subtitle mb-0">
              Capture ideas, organize thoughts, and keep your day moving.
            </p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <Link to="/new" className="btn btn-add px-4">
              + New Note
            </Link>
            <div className="header-badge">
              <span className="badge-dot"></span>
              {totalNotes} {totalNotes === 1 ? "note" : "notes"} saved
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
