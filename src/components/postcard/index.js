import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  const url = post.fields.imageLink;
  const title = post.fields.title;
  const rating = post.fields.rating;

  return (
    <div>
      <Link to={`/posts/${post.sys.id}`}>
        <img src={url} alt={title} />
        <p>{title}</p>
        <Rating rating={rating} />
      </Link>
    </div>
  );
}
