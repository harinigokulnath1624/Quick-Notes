import { useNavigate } from "react-router-dom";
import { useNotes } from "../context/NotesContext";
import NoteForm from "../components/NoteForm";

function AddNotePage() {
  const { addNote } = useNotes();
  const navigate = useNavigate();

  const handleSave = (noteData) => {
    addNote(noteData);
    navigate("/");
  };

  return (
    <NoteForm mode="add" onSave={handleSave} onCancel={() => navigate("/")} />
  );
}

export default AddNotePage;
