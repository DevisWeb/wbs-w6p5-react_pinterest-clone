import { useEffect, useState } from "react";
import { Fragment } from "react";
import PostGrid from "../../components/postgrid/";
import Api from "../../api/";

export default function ViewPostsBestRated() {
  const [ratedPosts, setRatedPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    Api.post
      .getByRating(input)
      .then((response) => setRatedPosts(response.data.items))
      .catch((error) => console.error(error));
  }, [input]);

  // Event
  const searchValue = (e) => {
    setInput(e.target.value); //console.log(e.target.value);
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
        <button onClick={searchValue}>Search</button>
      </p>
      <PostGrid postsAll={ratedPosts} />
    </Fragment>
  );
}
