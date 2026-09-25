import { useState } from "react";

function NoteForm({ mode = "add", initialNote, onSave, onCancel }) {
  const [title, setTitle] = useState(initialNote?.title || "");
  const [content, setContent] = useState(initialNote?.content || "");
  const [category, setCategory] = useState(initialNote?.category || "Study");

  const isEdit = mode === "edit";

  const handleSubmit = () => {
    if (title.trim() === "" || content.trim() === "") {
      return;
    }
    onSave({ title, content, category });
  };

  return (
    <section className="composer-card p-4 p-lg-5 mb-4">
      <div className="section-heading mb-4">
        <div>
          <span className="section-kicker">CREATE</span>
          <h2 className="h3 mb-1">
            {isEdit ? "Edit your note" : "Write a new note"}
          </h2>
          <p className="text-muted mb-0">
            Add a title, write your thoughts, and choose a category.
          </p>
        </div>
        {isEdit && <span className="edit-badge">Editing mode</span>}
      </div>

      <div className="row g-3">
        <div className="col-12">
          <label className="form-label">Note title</label>
          <input
            type="text"
            className="form-control form-control-lg custom-input"
            placeholder="Enter Note Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="col-12">
          <label className="form-label">Your note</label>
          <textarea
            className="form-control custom-input note-textarea"
            placeholder="Write your note here..."
            value={content}
            maxLength={200}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="character-count text-end mt-2">
            {content.length}/200 characters
          </div>
        </div>

        <div className="col-md-5">
          <label className="form-label">Category</label>
          <select
            className="form-select custom-input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Study">Study</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="col-12 d-flex flex-wrap gap-2 pt-2">
          <button className="btn btn-add px-4" onClick={handleSubmit}>
            {isEdit ? "Update Note" : "Add Note"}
          </button>
          <button className="btn btn-cancel px-4" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}

export default NoteForm;
