// Import components
import PostCard from "../postcard/";

export default function PostGrid({ postsAll }) {
  return (
    <div>
      {postsAll.map((post, index) => {
        return <PostCard key={index} post={post} />;
      })}
    </div>
  );
}
