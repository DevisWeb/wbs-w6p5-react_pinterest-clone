import axios from "axios";

const baseUrl = `${process.env.REACT_APP_API_ENDPOINT}?access_token=${process.env.REACT_APP_API_KEY}`;

const ApiHelpers = {
  posts: {
    getSearchResults: ({ search }) =>
      axios.get(`${baseUrl}&content_type=post&query=${search}`),
    getAll: () => axios.get(`${baseUrl}&content_type=post`),
    getById: ({ id }) => axios.get(`${baseUrl}&content_type=post&sys.id=${id}`),
  },
  user: {
    getUser: ({ name }) =>
      axios.get(`${baseUrl}&content_type=user&fields.name=${name}`),
  },
};

export default ApiHelpers;
