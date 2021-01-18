import { useEffect, useState } from "react";
import axios from "axios";
// import PostCard from "../../components/postcard";

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
        <label for="rating">Show all posts rated with: </label>

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
      {rating &&
        rating.map((selectedPosts) => (
          <div>
            {
              <div>
                <br />
                <h3>{selectedPosts.fields.title}</h3>
                <img
                  src={`${selectedPosts.fields.imageLink}`}
                  alt={`Link: ${selectedPosts.fields.imageLink}`}
                />
                <p>{selectedPosts.fields.description}</p>
                <p>Rating: {selectedPosts.fields.rating}</p>
                <span>User-ID: {selectedPosts.fields.user.sys.id}</span>
              </div>
            }
            {/* <PostCard
              key={selectedPosts.fields.user.sys.id}
              id={selectedPosts.fields.user.sys.id}
              title={selectedPosts.fields.title}
              description={selectedPosts.fields.description}
              rating={selectedPosts.fields.rating}
              src={`${selectedPosts.fields.imageLink}`}
              alt={`Link: ${selectedPosts.fields.imageLink}`}
            /> */}
          </div>
        ))}
    </div>
  );
}

// Test-Code for PostCard component:

// export default function PostCard({ title, description, src, rating, id }) {
//     return (
//       <div>
//         <br />
//         <h3>{title}</h3>
//         <img src={src} alt={title} />
//         <p>{description}</p>
//         <p>{rating}</p>
//         <span>{id}</span>
//       </div>
//     );
//   }
