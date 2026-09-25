function Toolbar({
  search,
  setSearch,
  filterCategory,
  setFilterCategory,
  clearFilters,
}) {
  return (
    <section className="toolbar-card p-3 p-lg-4 mb-4">
      <div className="row g-3 align-items-end">
        <div className="col-lg-5">
          <label className="form-label">Search notes</label>
          <div className="input-group">
            <span className="input-group-text search-icon">⌕</span>
            <input
              type="text"
              className="form-control custom-input"
              placeholder="Search by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-5 col-lg-3">
          <label className="form-label">Filter category</label>
          <select
            className="form-select custom-input"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Study">Study</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="col-md-7 col-lg-4 d-flex gap-2">
          <button
            className="btn btn-outline-secondary flex-grow-1"
            onClick={clearFilters}
          >
            Clear Filters
          </button>
        </div>
      </div>
    </section>
  );
}

export default Toolbar;
