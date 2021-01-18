import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserLink from "../../components/userlink";
import axios from "axios";
import "./styles.css";

export default function ViewPost() {
  const { id } = useParams();
  const [postData, setPostData] = useState({ isLoading: true, data: null });
  const [userData, setUserData] = useState({ isLoading: true, data: null });

  //request a post from server and then execute the callback with it as argument
  const requestPostById = (id, onSuccess, onError) => {
    axios
      .get(
        `${process.env.REACT_APP_API_ENDPOINT}?access_token=${process.env.REACT_APP_API_KEY}&content_type=post&sys.id=${id}`
      )
      .then((response) => {
        console.log(response);
        onSuccess(response.data.items[0].fields);
      })
      .catch(onError);
  };

  //request a user from server and then execute the callback with it as argument
  const requestUserById = (id, onSuccess, onError) => {
    axios
      .get(
        `${process.env.REACT_APP_API_ENDPOINT}?access_token=${process.env.REACT_APP_API_KEY}&content_type=user&sys.id=${id}`
      )
      .then((response) => {
        onSuccess(response.data.items[0].fields);
      })
      .catch(onError);
  };

  //request the post
  useEffect(() => {
    setPostData({ isLoading: true, data: null });
    requestPostById(
      id,
      (post) => {
        setPostData({ isLoading: false, data: post });
      },
      () => {
        setPostData({ isLoading: false, data: null });
      }
    );
  }, []);

  //if the post state recieved data, request the user
  useEffect(() => {
    if (postData.data) {
      setUserData({ isLoading: true, data: null });
      requestUserById(
        postData.data.user.sys.id,
        (user) => setUserData({ isLoading: false, data: user }),
        () => setUserData({ isLoading: false, data: null })
      );
    }
  }, [postData.data]);

  return (
    <div className="view-post">
      {postData.isLoading ? (
        <>loading...</>
      ) : !postData.data ? (
        <>nothing here</>
      ) : (
        <>
          <img className="view-post-image" src={postData.data.imageLink}></img>
          <div className="view-post-content">
            <h2>{postData.data.title}</h2>
            <p>{postData.data.description}</p>
            <hr></hr>
            {userData.isLoading ? (
              <>loading...</>
            ) : (
              <UserLink user={userData.data} />
            )}
          </div>
        </>
      )}
    </div>
  );
}
