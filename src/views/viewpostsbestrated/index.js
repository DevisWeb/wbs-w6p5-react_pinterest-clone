import { useEffect, useState } from "react";
import { Fragment } from "react";
import axios from "axios";
import PostGrid from "../../components/postgrid/";

export default function ViewPostsBestRated() {
  const [ratedPosts, setRatedPosts] = useState([]);
  const [input, setInput] = useState("");
  const query = `${process.env.REACT_APP_API_ENDPOINT}?access_token=${process.env.REACT_APP_API_KEY}&content_type=post&fields.rating`;

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_ENDPOINT}?access_token=${process.env.REACT_APP_API_KEY}&content_type=post&fields.rating=5`
      )
      .then((data) => {
        setRatedPosts(data.data.items); //console.log(data.data.items[0].fields.user.sys.id);
      })
      .catch((err) => console.log(err));
  }, []);

  // Event
  const searchValue = (e) => {
    setInput(e.target.value); //console.log(e.target.value);
  };

  const getPostsByRating = (e) => {
    e.preventDefault();
    axios
      .get(`${query}=${input}`)
      .then((data) => {
        setRatedPosts(data.data.items);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Fragment>
      <h3>Filter Posts by rating *****</h3>
      <p>
        <label htmlFor="rating">Show all posts rated with: </label>
        <select onChange={searchValue} name="rating" id="rating">
          <option value="5">5 *****</option>
          <option value="4">4 ****</option>
          <option value="3">3 ***</option>
          <option value="2">2 **</option>
          <option value="1">1 *</option>
        </select>
        {/* <input onChange={searchValue} type="text" /> */}
        <button onClick={getPostsByRating}>Search</button>
      </p>
      <PostGrid postsAll={ratedPosts} />
    </Fragment>
  );
}
