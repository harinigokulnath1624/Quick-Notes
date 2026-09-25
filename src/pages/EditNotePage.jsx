import { useNavigate, useParams } from "react-router-dom";
import { useNotes } from "../context/NotesContext";
import NoteForm from "../components/NoteForm";

function EditNotePage() {
  const { id } = useParams();
  const { notes, updateNote } = useNotes();
  const navigate = useNavigate();

  const note = notes.find((n) => n.id === Number(id));

  if (!note) {
    return (
      <div className="empty-state">
        <div className="empty-icon">⌕</div>
        <h3>Note not found</h3>
        <p className="text-muted mb-3">
          That note may have been deleted. Head back to your collection.
        </p>
        <button className="btn btn-add" onClick={() => navigate("/")}>
          Back to Notes
        </button>
      </div>
    );
  }

  const handleSave = (noteData) => {
    updateNote(note.id, noteData);
    navigate("/");
  };

  return (
    <NoteForm
      mode="edit"
      initialNote={note}
      onSave={handleSave}
      onCancel={() => navigate("/")}
    />
  );
}

export default EditNotePage;
