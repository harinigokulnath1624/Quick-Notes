import { useState } from "react";
import { useNotes } from "../context/NotesContext";
import Toolbar from "../components/Toolbar";
import StatsRow from "../components/StatsRow";
import NotesGrid from "../components/NotesGrid";

function HomePage() {
  const { notes, deleteNote, togglePin, clearNotes } = useNotes();
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const clearFilters = () => {
    setSearch("");
    setFilterCategory("All");
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase()),
  );

  const categoryFilteredNotes =
    filterCategory === "All"
      ? filteredNotes
      : filteredNotes.filter((note) => note.category === filterCategory);

  const sortedNotes = [...categoryFilteredNotes].sort(
    (a, b) => Number(b.isPinned) - Number(a.isPinned),
  );

  const totalNotes = notes.length;
  const pinnedNotes = notes.filter((note) => note.isPinned).length;
  const unpinnedNotes = totalNotes - pinnedNotes;

  return (
    <>
      <Toolbar
        search={search}
        setSearch={setSearch}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        clearFilters={clearFilters}
      />

      <StatsRow total={totalNotes} pinned={pinnedNotes} unpinned={unpinnedNotes} />

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <span className="section-kicker">COLLECTION</span>
          <h2 className="h3 mb-0">Your Notes</h2>
        </div>
        <span className="result-count">{sortedNotes.length} shown</span>
      </div>

      <NotesGrid
        notes={sortedNotes}
        hasAnyNotes={notes.length > 0}
        onDelete={deleteNote}
        onTogglePin={togglePin}
        onClearFilters={clearFilters}
        onClearAll={clearNotes}
      />
    </>
  );
}

export default HomePage;
