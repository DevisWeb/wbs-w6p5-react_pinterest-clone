import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function ViewPostsAll() {
  const [postsAll, setPostsAll] = useState([]);
  let { search } = useParams();

  const urlFetchAllPosts = `${process.env.REACT_APP_API_ENDPOINT}?access_token=${process.env.REACT_APP_API_KEY}&content_type=post`;
  const urlFetchSearchResults = `${
    process.env.REACT_APP_API_ENDPOINT
  }?access_token=${process.env.REACT_APP_API_KEY}&content_type=post&query=${
    search?.split("=")[1]
  }`;

  const findEndpoint = () => {
    return search === "posts" ? urlFetchAllPosts : urlFetchSearchResults;
  };

  const callApi = (endpoint) => {
    axios
      .get(endpoint)
      .then((response) => {
        setPostsAll(response.data.items);
      })
      .catch((error) => console.error(error));
  };

  return <div>I am a ViewPostsAll</div>;
}
