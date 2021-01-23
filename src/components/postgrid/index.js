// Import components
import PostCard from "../postcard/";

// Import styles
import "./styles.css";
import Masonry from "react-masonry-css";

export default function PostGrid({ postsAll, order }) {
  // Set breakpoints
  const breakpointColumnsObj = {
    default: 4,
    1000: 3,
    800: 2,
    600: 1,
  };
  if (order !== "orderAllDescend") {
    postsAll.sort(() => Math.random() - 0.5);
  }
  return (
    <div className="post-grid-stack">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="post-grid-masonry"
        columnClassName="post-grid-column"
      >
        {postsAll.map((post, index) => {
          return <PostCard key={index} post={post} />;
        })}
      </Masonry>
    </div>
  );
}
