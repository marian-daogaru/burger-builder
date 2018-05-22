import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burger-tutorial-49b01.firebaseio.com/',
})

export default instance
