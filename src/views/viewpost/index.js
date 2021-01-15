import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ViewPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://cdn.contentful.com/spaces/wwsh9kp1nfrc/environments/master/entries?access_token=6JzF_q1CD1Htat5n-3DjPBwGuw5B1lbevCKfiqogqX4&content_type=post&sys.id=" +
          id
      )
      .then((response) => {
        setPost(response.data.items[0].fields);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  
  return <div>{JSON.stringify(post)}</div>;
}