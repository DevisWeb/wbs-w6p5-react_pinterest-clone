import axios from "axios";

const urlPost = `${process.env.REACT_APP_API_ENDPOINT}?access_token=${process.env.REACT_APP_API_KEY}&content_type=post`;
const urlUser = `${process.env.REACT_APP_API_ENDPOINT}?access_token=${process.env.REACT_APP_API_KEY}&content_type=user`;


const getEntryById = async (url, id) => {
  try {
    const response = await axios.get(`${url}&sys.id=${id}`);
    if (response.data.items.length !== 0) {
      return response.data.items[0].fields;
    }
  } catch (error) {
    console.error(error);
  }
};
const Api = {
  post: {
    getSearchResults: (search) => axios.get(`${urlPost}&query=${search}`),
    getAll: () => axios.get(`${urlPost}`),
    getById: (id) => getEntryById(urlPost, id),
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
    getById: (id) => getEntryById(urlUser, id),
  },
};

export default Api;
