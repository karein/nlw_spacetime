import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://10.1.133.10:3333',
})
