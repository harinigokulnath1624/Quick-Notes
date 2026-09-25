import NoteCard from "./NoteCard";
import EmptyState from "./EmptyState";

function NotesGrid({
  notes,
  hasAnyNotes,
  onDelete,
  onTogglePin,
  onClearFilters,
  onClearAll,
}) {
  if (!hasAnyNotes) {
    return (
      <EmptyState
        icon="✦"
        title="No notes yet"
        message="Add your first note and start building your collection."
      />
    );
  }

  if (notes.length === 0) {
    return (
      <EmptyState
        icon="⌕"
        title="No matching notes"
        message="Try another search or category."
        actionLabel="Show All Notes"
        onAction={onClearFilters}
      />
    );
  }

  return (
    <>
      <div className="row g-4">
        {notes.map((note) => (
          <div className="col-12 col-md-6 col-xl-4" key={note.id}>
            <NoteCard note={note} onDelete={onDelete} onTogglePin={onTogglePin} />
          </div>
        ))}
      </div>
      <div className="d-grid gap-2 col-6 mx-auto mt-5">
        <button className="btn btn-lg btn-danger" onClick={onClearAll}>
          Clear All
        </button>
      </div>
    </>
  );
}

export default NotesGrid;
