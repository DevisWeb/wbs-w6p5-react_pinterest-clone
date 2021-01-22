import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Import components
import PostGrid from "../../components/postgrid/";
import UserLink from "../../components/userlink";
import Rating from "../../components/rating";

import "./styles.css";

import Api from "../../api/";

export default function ViewPost() {
  const { id } = useParams();
  const [postData, setPostData] = useState({ isLoading: true, data: null });
  const [userData, setUserData] = useState({ isLoading: true, data: null });
  const [postsAll, setPostsAll] = useState([]);

  useEffect(() => {
    const getData = async () => {
      // Get post by id
      const postResponse = await Api.post.getById(id);
      const parsedResponse = postResponse.data.items[0].fields;
      // Wait for post and get user
      const userResponse = await Api.user.getById(parsedResponse.user.sys.id);
      const parsedUserResponse = userResponse.data.items[0].fields;
      // Set state
      setPostData(parsedResponse);
      setUserData(parsedUserResponse);
    };
    getData();
    // Get all posts
    Api.post
      .getAll()
      .then((response) => setPostsAll(response.data.items))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <>
      <div className="view-post">
        {postData.isLoading ? (
          <>loading...</>
        ) : !postData ? (
          <>nothing here</>
        ) : (
          <>
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
          </>
        )}
      </div>
      <h3 className="view-post-explore">Explore more</h3>
      <PostGrid postsAll={postsAll} />
    </>
  );
}
