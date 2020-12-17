import axios from 'axios'

const baseUrl = 'https://type.fit/api/quotes'

export function getAllQuotes() {
  return axios.get(`${baseUrl}`)
}
