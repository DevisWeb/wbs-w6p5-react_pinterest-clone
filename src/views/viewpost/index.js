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
  const [{ loading, postData, userData }, setViewData] = useState({
    loading: true,
    postData: null,
    userData: null,
  });
  const [postsAll, setPostsAll] = useState([]);

  useEffect(() => {
    const requestData = async () => {
      setViewData({  loading:  true, postData: postData, userData: userData });
      let post = null;
      let user = null;
      try {
        //fetch the post
        const postResponse = await Api.post.getById(id);
        // continue if a post was found
        if (postResponse.data.items.length !== 0) {
          post = postResponse.data.items[0].fields;
          //fetch the user, that the post is from
          const userResponse = await Api.user.getById(post.user.sys.id);
          user = userResponse.data.items[0].fields;
        }
      } catch (error) {
        console.error(error);
      }
      console.log(post);
      //set the states
      setViewData({  loading:  false, postData: post, userData: user });
    };
    requestData();
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
