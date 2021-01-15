import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ViewPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://cdn.contentful.com/spaces/wwsh9kp1nfrc/environments/master/entries?access_token={token}&content_type=post&sys.id=" +
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