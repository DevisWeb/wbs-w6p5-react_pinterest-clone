import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import PostGrid from "../../components/postgrid";
import "./styles.css";
import Pluralize from "pluralize";
import Api from "../../api";

export default function ViewUser() {
  // name the username that will be passed as a prop. Set by default on "Pikachu" for testing
  let { name } = useParams();
  // the state variable for the avatarLink used as the profile pic of the user
  const [avatar, setAvatar] = useState();
  // the state variable of the userId will be used to get the posts of the specific user. Used in the second axios request.
  const [userId, setUserId] = useState();
  // userPosts will be set to an array with all the posts of the specific user. Will be set in the second axios request.
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    Api.user
      .getByName(name)
      .then((response) => {
        setAvatar(response.data.items[0].fields.avatarLink);
        setUserId(response.data.items[0].sys.id);
      })
      .catch((error) => console.error(error));
  }, [name]);

  useEffect(() => {
    Api.post
      .getByUser(userId)
      .then((response) => setUserPosts(response.data.items))
      .catch((error) => console.error(error));
  }, [userId]);

  const getAvgRating = () => {
    const numOfPosts = userPosts.length;
    const allRatings = userPosts.map((post) => post.fields.rating);
    // filter out undefined, sum up available ratings devided by total number of posts per user
    const avgRating =
      allRatings.filter(Number).reduce((acc, el) => acc + el, 0) / numOfPosts;
    // round to 0.5 steps
    return (Math.round(avgRating * 2) / 2).toFixed(1);
  };

  return (
    <div>
      <div className="view-user-flex">
        <div className="view-user-info">
          <img className="view-user-avatar" src={avatar} alt={name} />
          <h2 className="view-user-center">{name}</h2>
          <p className="view-user-center">
            {Pluralize("post", userPosts.length, true)}
          </p>
          <p className="view-user-center">Avg rating: {getAvgRating()}</p>
          <div className="view-user-line"></div>
        </div>
        <h3>More from {name}</h3>
      </div>
      <PostGrid postsAll={userPosts} />
    </div>
  );
}
