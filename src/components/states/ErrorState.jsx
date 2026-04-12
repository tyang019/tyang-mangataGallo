import { Link } from "react-router-dom";

export default function ErrorState({ onRetry }) {
  return (
    <div className="status-card status-card-error" role="alert">
      <p>"Problem"</p>
      <Link to="/" style= {{
        border: "none",
        padding: "0.5rem",
        cursor: "pointer",
        fontSize: "15px",
        backgroundColor: "black",
        color: "white",
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
        borderRadius: "2rem",
      }} onClick={onRetry}>
        Try again
      </Link>
    </div>
  );
}