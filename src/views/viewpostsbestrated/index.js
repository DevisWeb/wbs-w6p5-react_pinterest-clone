import { useEffect, useState } from "react";
import axios from "axios";
// import PostCard from "../../components/postcard";
import Rating from "../../components/rating";

export default function ViewPostsBestRated() {
  const [rating, setRating] = useState(null);
  const [input, setInput] = useState("");
  const query = `${process.env.REACT_APP_API_ENDPOINT}?access_token=${process.env.REACT_APP_API_KEY}&content_type=post&fields.rating`;

  useEffect(() => {
    axios
      .get(`${query}=5`)
      .then((data) => {
        //console.log(data.data.items[0].fields.user.sys.id);
        setRating(data.data.items);
      })
      .catch((err) => console.log(err));
  }, []);
  // Event
  const searchValue = (e) => {
    //console.log(e.target.value);
    setInput(e.target.value);
  };

  const getPostsByRating = (e) => {
    e.preventDefault();
    axios
      .get(`${query}=${input}`)
      .then((data) => {
        setRating(data.data.items);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h3>Filter Posts by rating *****</h3>
      <div>
        {/* <label htmlFor="rating">Show all posts rated with: </label> */}
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
      </div>
      <ul>
        {/* {rating &&
          rating.map((selectedPosts) => (
            <PostCard
              key={selectedPosts.sys.id}
              id={selectedPosts.fields.user.sys.id}
              title={selectedPosts.fields.title}
              description={selectedPosts.fields.description}
              rating={selectedPosts.fields.rating}
              src={`${selectedPosts.fields.imageLink}`}
              alt={`Link: ${selectedPosts.fields.imageLink}`}
            />
          ))} */}
        {rating &&
          rating.map((selectedPosts) => (
            <li key={selectedPosts.sys.id}>
              <h3>{selectedPosts.fields.title}</h3>
              <img
                src={`${selectedPosts.fields.imageLink}`}
                alt={`Link: ${selectedPosts.fields.imageLink}`}
              />
              <p>{selectedPosts.fields.description}</p>

              {/* <p>Rating: {selectedPosts.fields.rating}</p> */}
              <Rating rating={selectedPosts.fields.rating} />

              <span>User-ID: {selectedPosts.fields.user.sys.id}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

// Test-Code for PostCard component:

// import Rating from "../../components/rating";

// export default function PostCard({ title, description, src, rating, id }) {
//   return (
//     <div>
//       <h3>{title}</h3>
//       <img src={src} alt={title} />
//       <p>{description}</p>
//       {/* <p>{rating}</p> */}
//       <Rating rating={rating} />
//       <span>{id}</span>
//     </div>
//   );
// }
