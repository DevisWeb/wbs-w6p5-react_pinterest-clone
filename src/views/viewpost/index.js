import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ViewPost() {
  const { id } = useParams();
  const [postData, setPostData] = useState({isLoading: true, data: null});
  const [userData, setUserData] = useState({isLoading: true, data: null});

  //request a post from server and then execute the callback with it as argument
  const getPostById = (id, onSuccess, onError) => {
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
  const getUserById = (id, onSuccess, onError) => {
    axios
      .get(
        `${process.env.REACT_APP_API_ENDPOINT}?access_token=${process.env.REACT_APP_API_KEY}&content_type=user&sys.id=${id}`
      )
      .then((response) => {
        onSuccess(response.data.items[0].fields);

      })
      .catch(onError);
  };

  //request the post, then request user afterwards
  useEffect(() => {
    setPostData({isLoading: true, data: null});
    getPostById(
      id, 
      (post) => {
        setPostData({isLoading: false, data: post});
        setUserData({isLoading: true, data: null});
        getUserById(post.user.sys.id, (user) => {
          setUserData({isLoading: false, data: user});
        });
      },
      () => {
        setPostData({isLoading: false, data: null})
      });
  }, []);
  
  return <div>{JSON.stringify(post)}</div>;
}