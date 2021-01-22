// Import react modules
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Pluralize from "pluralize";

//Import components
import PostGrid from "../../components/postgrid/";

// Import api functionality
import Api from "../../api/";

export default function ViewPostsAll() {
  const [postsAll, setPostsAll] = useState([]);
  let { search } = useParams();

  useEffect(() => {
    if (search) {
      Api.post
        .getSearchResults(search)
        .then((response) => setPostsAll(response.data.items))
        .catch((error) => console.error(error));
    } else {
      Api.post
        .getAll()
        .then((response) => setPostsAll(response.data.items))
        .catch((error) => console.error(error));
    }
  }, [search]);

  const countPosts = (keyword) => {
    if (postsAll.length === 0) {
      return `No results for ${keyword}`;
    } else if (keyword !== undefined) {
      return `${Pluralize("result", postsAll.length, true)} for ${keyword}`;
    }
  };

  return (
    <div>
      <h3 style={{ marginBlockEnd: "-1em", marginBlockStart: "2.5em" }}>
        {countPosts(search)}
      </h3>
      <PostGrid postsAll={postsAll} />
    </div>
  );
}
