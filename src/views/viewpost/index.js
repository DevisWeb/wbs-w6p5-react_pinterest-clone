import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Import components
import PostGrid from "../../components/postgrid/";
import UserLink from "../../components/userlink";
import Rating from "../../components/rating";

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

import Api from "../../api/";

export default function ViewPost() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [postsAll, setPostsAll] = useState([]);

  useEffect(async () => {
    setLoading(true);
    let parsedResponse = null;
    let parsedUserResponse = null;
    // Get post by id
    try {
      const postResponse = await Api.post.getById(id);
      //check if a post was found
      if (postResponse.data.items.length != 0)
        parsedResponse = postResponse.data.items[0].fields;
    } catch (error) {
      console.error(error);
    }
    // Wait for post and get user
    if (parsedResponse && parsedResponse.user.sys.id) {
      try {
        const userResponse = await Api.user.getById(parsedResponse.user.sys.id);
        parsedUserResponse = userResponse.data.items[0].fields;
      } catch (error) {
        console.error(error);
      }
    }
    // Set state
    setPostData(parsedResponse);
    setUserData(parsedUserResponse);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    Api.post
      .getAll()
      .then((response) => setPostsAll(response.data.items))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {postData && userData ? (
        <div className="view-post">
          <img
            className="view-post-image"
            src={postData.imageLink}
            alt={userData.name}
          ></img>
          <div className="view-post-content">
            <h2>{postData.title}</h2>
            <p>{postData.description}</p>
            <Rating rating={postData.rating}></Rating>
            <hr></hr>
            {<UserLink user={userData} />}
          </div>
          {loading ? (
            <div className="overlay">
              <FontAwesomeIcon inverse icon={faSpinner} size="3x" spin />
            </div>
          ) : null}
        </div>
      ) : loading ? (
        <div className="view-post">
          <div className="view-post-image preview"></div>
          <div className="view-post-content">
            <h2>...</h2>
            <p>...</p>
            <hr></hr>
            {<UserLink user={{ name: "", avatar: "", email: "" }} />}
          </div>
          <div className="overlay">
            <FontAwesomeIcon inverse icon={faSpinner} size="3x" spin />
          </div>
        </div>
      ) : (
        <h3 className="view-post-not-found">
          This post doesn't exist. Are you lost?
        </h3>
      )}
      <h3 className="view-post-explore">Explore more</h3>
      <PostGrid postsAll={postsAll} />
    </>
  );
}
