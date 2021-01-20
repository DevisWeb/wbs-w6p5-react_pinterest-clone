// Import modules
import { Link } from "react-router-dom";

// Import components
import Rating from "../rating";

// Import styles
import "./styles.css";

export default function PostCard({ post }) {
  return (
      <Link className="post-card-container" to={`/posts/${post.sys.id}`}>
        <img
          className="post-card-image"
          src={post.fields.imageLink}
          alt={post.fields.title}
        />
        <div className="post-card-text">
          <p>{post.fields.title}</p>
          <Rating rating={post.fields.rating} />
        </div>
      </Link>
  );
}
