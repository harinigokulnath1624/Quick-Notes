function StatsRow({ total, pinned, unpinned }) {
  return (
    <section className="stats-row mb-4">
      <div className="stat-card">
        <span className="stat-label">TOTAL NOTES</span>
        <strong>{total}</strong>
      </div>
      <div className="stat-card">
        <span className="stat-label">PINNED</span>
        <strong>{pinned}</strong>
      </div>
      <div className="stat-card">
        <span className="stat-label">UNPINNED</span>
        <strong>{unpinned}</strong>
      </div>
    </section>
  );
}

export default StatsRow;
