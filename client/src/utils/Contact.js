import axios from 'axios'

const Data = {
  // getGiphy: search => axios.get(`/api/giphy/${search}`),
  // getGifs: () => axios.get('/api/gifs'),
  addData: data => axios.post('/api/feedback', data),
  // deleteGif: id => axios.delete(`/api/gifs/${id}`)
}

export default Data
