import axios from 'axios'
import auth from './auth'

export function APIRequest(options, authenticate = true) {
  const headers = options.headers ? options.headers : {}
  const authorization = authenticate
    ? { Authorization: `${localStorage.getItem('token')}` }
    : {}
  const defaultOption = {
    baseURL: 'http://localhost:8000',
    headers: Object.assign(
      {},
      { 'Content-Type': 'application/json' },
      headers,
      authorization,
    ),
  }
  const mergedOption = Object.assign({}, options, defaultOption)

  return axios(mergedOption)
}

export default {
  auth,
  APIRequest,
}