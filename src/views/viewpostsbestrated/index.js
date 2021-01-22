import "./styles.css";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import axios from "axios";
import PostGrid from "../../components/postgrid/";
import Rating from "../../components/rating/";

export default function ViewPostsBestRated() {
  const [ratedPosts, setRatedPosts] = useState([]);
  const [input, setInput] = useState("5");

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

  // Events

  const onMouseEnter = (e) => {
    console.log(e.target.value);
  };

  const getValue = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
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
      <div className="vp-byrating-wrapper">
        <h3 class="uppercase">Top rated posts</h3>
        <div className="vp-byrating-section flex">
          <label htmlFor="rating">Show all posts rated with:</label>
          <select
            className="cursor-pointer vp-byrating-select"
            onMouseEnter={onMouseEnter}
            onChange={getValue}
            onMouseLeave={getPostsByRating}
            name="rating"
            id="rating"
          >
            <option value="5" selected>
              5
            </option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
          <Rating className="starhover" rating={input} />
        </div>
      </div>
      <PostGrid postsAll={ratedPosts} />
    </Fragment>
  );
}
