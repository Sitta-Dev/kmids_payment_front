import axios from 'axios'

export default() => {
  return axios.create({
    // baseURL: `http://103.233.193.62:8083/`
    baseURL: `http://localhost:8083/`
  })
}