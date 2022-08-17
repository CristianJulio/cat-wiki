import axios from 'axios'

export const rest = axios.create({
  baseURL: process.env.REACT_APP_CAT_API_URL,
  timeout: 1000,
  headers: {
    'x-api-key': `${process.env.REACT_APP_CAT_API_KEY}`
  }
});