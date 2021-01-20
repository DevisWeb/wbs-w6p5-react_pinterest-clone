import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PostGrid from "../../components/postgrid";
import "./styles.css";
import Pluralize from "pluralize";

export default function ViewUser() {
  // name the username that will be passed as a prop. Set by default on "Pikachu" for testing
  let { id } = useParams();
  const name = id;
  // the state variable for the avatarLink used as the profile pic of the user
  const [avatar, setAvatar] = useState();
  // the state variable of the userId will be used to get the posts of the specific user. Used in the second axios request.
  const [userId, setUserId] = useState();
  // userPosts will be set to an array with all the posts of the specific user. Will be set in the second axios request.
  const [userPosts, setUserPosts] = useState([]);

  const getUsersPosts = () => {
    axios
      .get(
        // besides the general API keys the content_type user is required with the value of the state variable name to find the unique user.
        `${process.env.REACT_APP_API_ENDPOINT}?access_token=${process.env.REACT_APP_API_KEY}&content_type=user&fields.name=${name}`
      )
      .then((res) => {
        //the response is the unique user. Check it in the console.
        console.log(res);
        console.log(res.data.items[0].fields.name);
        // here the unique avatar-url of the user will be set. Will be reused in the view to show the users Profile pic.
        setAvatar(res.data.items[0].fields.avatarLink);
        // here the unique userId is set which will be reused to find his specific posts
        setUserId(res.data.items[0].sys.id);
        //Although the variable avatar can be displayed in the HTML, here it is still not reset. What is the reason?
        //console.log("This is avatar link: ", avatar);
      })
      .catch((error) => console.error(error));
  };

  const getUserPosts2 = () => {
    axios
      .get(
        //ISSUE TO BE FIXED: This request gets all the posts of the user, but it still doesn't can take the variable userId somehow. For testing the Id of Pikachu is used.
        `${process.env.REACT_APP_API_ENDPOINT}?access_token=${process.env.REACT_APP_API_KEY}&content_type=post&fields.user.sys.id=${userId}`
      )
      .then((res) => {
        // Setting the variable userPosts equal the request which has all the posts of this user.
        setUserPosts(res.data.items);
        // here you can check that all user's post are in the response.
        //console.log("All user's posts", res.data.items);
        // ISSUE TO BE FIXED: somehow the variable userPosts is here not set already. Check it in the console.
        //But it works in the HTML.
        //console.log("UserPosts =", userPosts);
        //Another testing of the response.
        // console.log(res.data.items[0].fields.title);
      });
  };

  useEffect(() => getUsersPosts(), []);
  useEffect(() => getUserPosts2(), [userId]);

  return (
    <div>
      <div className="view-user-flex">
        <div className="view-user-info">
          <img className="view-user-avatar" src={avatar} alt={name} />
          <h2 className="view-user-center">{name}</h2>
          <p className="view-user-center">
            {Pluralize("post", userPosts.length, true)}
          </p>
          <div className="view-user-line"></div>
        </div>
      </div>
      <PostGrid postsAll={userPosts} />
    </div>
  );
}
