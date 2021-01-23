import "./styles.css";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import PostGrid from "../../components/postgrid/";
import Rating from "../../components/rating/";
import Api from "../../api/";

export default function ViewPostsBestRated() {
  const [ratedPosts, setRatedPosts] = useState([]);
  const [input, setInput] = useState("5");

  useEffect(() => {
    if (input === "orderAllDescend") {
      Api.post
        .getByOrder()
        .then((response) => {
          setRatedPosts(response.data.items);
          // console.log(response.data.items);
        })
        .catch((error) => console.error(error));
    } else {
      Api.post
        .getByRating(input)
        .then((response) => {
          setRatedPosts(response.data.items);
          // console.log(response.data.items);
        })
        .catch((error) => console.error(error));
    }
  }, [input]);

  // Events
  const getValue = (e) => {
    setInput(e.target.value);
  };

  return (
    <Fragment>
      <div className="vp-byrating-wrapper">
        <h3 className="uppercase">Top rated posts</h3>
        <div className="vp-byrating-section flex">
          <label htmlFor="rating">Show posts rated:</label>
          <select
            className="cursor-pointer vp-byrating-select"
            onChange={getValue}
            name="rating"
            id="rating"
          >
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
            <option value="orderAllDescend">all</option>
          </select>
          <Rating className="starhover" rating={input} />
        </div>
      </div>
      <PostGrid postsAll={ratedPosts} order={input} />
    </Fragment>
  );
}
