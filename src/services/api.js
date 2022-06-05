import axios from 'axios'

const api = axios.create({
  baseURL: 'https://us-central1-api-irrigacao.cloudfunctions.net/api'
})

export default api;

