// Import react modules
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Pluralize from "pluralize";

//Import components
import PostGrid from "../../components/postgrid/";

// Import api functionality
import ApiHelpers from "../../api/";

export default function ViewPostsAll() {
  const [postsAll, setPostsAll] = useState([]);
  let { search } = useParams();

  // Invoke callApi function on search param update
  useEffect(() => {
    if (search) {
      ApiHelpers.posts.getSearchResults(search).then((response) => {
        console.log(response);
        setPostsAll(response.data.items);
      });
    } else {
      ApiHelpers.posts
        .getAll()
        .then((response) => setPostsAll(response.data.items));
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
