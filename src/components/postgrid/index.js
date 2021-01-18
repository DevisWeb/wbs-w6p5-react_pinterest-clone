// Import components
import PostCard from "../postcard/";

// Import styles
import "./styles.css";
import Masonry from "react-masonry-css";

export default function PostGrid({ postsAll }) {
  // Set breakpoints
  const breakpointColumnsObj = {
    default: 4,
    1000: 3,
    500: 2,
    350: 1,
  };
  return (
    <div className="post-grid-stack">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="post-grid-masonry"
        columnClassName="post-grid-column"
      >
        {postsAll
          // Shuffle array before iteration
          .sort(() => Math.random() - 0.5)
          .map((post, index) => {
            return <PostCard key={index} post={post} />;
          })}
      </Masonry>
    </div>
  );
}
