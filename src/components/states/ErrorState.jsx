export default function ErrorState({ message, onRetry }) {
  return (
    <div className="status-card status-card-error" role="alert">
      <p>{message}</p>
      <button type="button" onClick={onRetry}>Try again</button>
    </div>
  );
}