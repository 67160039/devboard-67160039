import { useState } from "react";
import CommentList from "./CommentList";

function PostCard({ post, isFavorite, onToggleFavorite }) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
        background: "white",
      }}
    >
      <h3 style={{ margin: "0 0 0.5rem", color: "#1e40af" }}>
        {post.title}
      </h3>

      <p style={{ margin: "0 0 0.75rem", color: "#4a5568" }}>
        {post.body}
      </p>

      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <button
          onClick={onToggleFavorite}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: isFavorite ? "red" : "gray",
          }}
        >
          {isFavorite ? "❤️ ถูกใจแล้ว" : "🤍 ถูกใจ"}
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#1e40af",
          }}
        >
          {showComments ? "ซ่อนความคิดเห็น" : "ดูความคิดเห็น"}
        </button>
      </div>

      {/* ✅ แสดง comment ตรงนี้อันเดียว */}
      {showComments && <CommentList postId={post.id} />}
    </div>
  );
}

export default PostCard;