import axios from "axios";

const baseUrl = 'https://petstore.swagger.io/v2/';

export default axios.create({
  baseURL: baseUrl,
  headers: {
    // This is necessary to allow for CORS request
    'Content-Type': 'application/json'
  }
});

