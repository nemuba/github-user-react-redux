import axios  from 'axios'

const fetchUser = async (username) => {
  return await axios.get(`https://api.github.com/users/${username}`)
}

const fetchReposUser = async (username) => {
  return await axios.get(`https://api.github.com/users/${username}/repos`)
}

export { fetchUser, fetchReposUser }
