export default function PostCard({ post }) {
  const url = post.fields.imageLink;
  const title = post.fields.title;
  const rating = post.fields.rating;

  return (
    <div>
      <img src={url} alt={title} />
      <p>{title}</p>
      <Rating rating={rating} />
    </div>
  );
}
