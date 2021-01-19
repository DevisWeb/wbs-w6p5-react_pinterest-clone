// Import react modules
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//Import components
import PostGrid from "../../components/postgrid/";

export default function ViewPostsAll() {
  const [postsAll, setPostsAll] = useState([]);
  let { search } = useParams();

  // Define API endpoints
  const urlFetchAllPosts = `${process.env.REACT_APP_API_ENDPOINT}?access_token=${process.env.REACT_APP_API_KEY}&content_type=post`;
  const urlFetchSearchResults = `${process.env.REACT_APP_API_ENDPOINT}?access_token=${process.env.REACT_APP_API_KEY}&content_type=post&query=${search}`;

  const findEndpoint = () => {
    return search === undefined ? urlFetchAllPosts : urlFetchSearchResults;
  };

  const callApi = (endpoint) => {
    axios
      .get(endpoint)
      .then((response) => {
        setPostsAll(response.data.items);
      })
      .catch((error) => console.error(error));
  };

  // Invoke callApi function on search param update
  useEffect(() => {
    callApi(findEndpoint());
  }, [search]);

  return (
    <div>
      <PostGrid postsAll={postsAll} />
    </div>
  );
}
