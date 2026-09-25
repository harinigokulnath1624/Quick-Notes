function EmptyState({ icon, title, message, actionLabel, onAction }) {
  return (
    <div className="empty-state">
      <div className="empty-icon">{icon}</div>
      <h3>{title}</h3>
      <p className="text-muted mb-3">{message}</p>
      {actionLabel && (
        <button className="btn btn-add" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export default EmptyState;
