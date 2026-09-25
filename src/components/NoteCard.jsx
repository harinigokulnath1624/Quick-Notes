import { useNavigate } from "react-router-dom";

function NoteCard({ note, onDelete, onTogglePin }) {
  const navigate = useNavigate();

  return (
    <article
      className={`note-card h-100 ${note.isPinned ? "pinned-note" : ""}`}
    >
      <div className="note-card-top">
        <div className="d-flex gap-2 align-items-center flex-wrap">
          {note.isPinned && <span className="pinned-badge">📌 Pinned</span>}
          <span
            className={`category-badge category-${note.category.toLowerCase()}`}
          >
            {note.category}
          </span>
        </div>
      </div>

      <h3 className="note-title">{note.title}</h3>
      <p className="note-content">{note.content}</p>

      <div className="note-meta">
        <span>Created</span>
        <span>{note.createdAt || "Earlier"}</span>
      </div>

      <div className="note-actions mt-3">
        <button
          className="btn btn-sm btn-outline-dark"
          onClick={() => navigate(`/edit/${note.id}`)}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-pin"
          onClick={() => onTogglePin(note.id)}
        >
          {note.isPinned ? "Unpin" : "Pin"}
        </button>
        <button
          className="btn btn-sm btn-delete"
          onClick={() => onDelete(note.id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default NoteCard;
