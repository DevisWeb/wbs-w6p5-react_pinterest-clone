import axios from "axios";

const urlPost = `${process.env.REACT_APP_API_ENDPOINT}?access_token=${process.env.REACT_APP_API_KEY}&content_type=post`;
const urlUser = `${process.env.REACT_APP_API_ENDPOINT}?access_token=${process.env.REACT_APP_API_KEY}&content_type=user`;

const Api = {
  post: {
    getSearchResults: (search) => axios.get(`${urlPost}&query=${search}`),
    getAll: () => axios.get(`${urlPost}`),
    getById: (id) => axios.get(`${urlPost}&sys.id=${id}`),
    getByUser: (userId) => axios.get(`${urlPost}&fields.user.sys.id=${userId}`),
    getByOrder: () =>
      axios.get(`${urlPost}&order=-fields.rating,-sys.updatedAt`),
    getByOrderRatingFiveFour: () =>
      axios.get(
        `${urlPost}&fields.rating[in]=5,4&order=-fields.rating,-sys.updatedAt`
      ),
    getByRating: (ratingInt) =>
      axios.get(`${urlPost}&fields.rating=${ratingInt}`),
  },
  user: {
    getByName: (name) => axios.get(`${urlUser}&fields.name=${name}`),
    getById: (id) => axios.get(`${urlUser}&sys.id=${id}`),
  },
};

export default Api;
