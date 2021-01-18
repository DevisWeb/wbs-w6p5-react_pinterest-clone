import { useParams } from "react-router-dom";

export default function ViewPostsAll() {
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
  return <div>I am a ViewPostsAll</div>;
}
