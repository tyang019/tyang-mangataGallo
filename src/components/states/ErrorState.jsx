export default function ErrorState({ onRetry }) {
  return (
    <div className="status-card status-card-error" role="alert">
      <p>"Problem"</p>
      <Link to="/home">
        <button type="button" onClick={onRetry}>Try again</button>
      </Link>
    </div>
  );
}