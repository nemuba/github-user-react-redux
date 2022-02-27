import axios  from 'axios'

const fetchUser = async (username) => {
  try{
    const data = await axios.get(`https://api.github.com/users/${username}`)

    return {
      status: data?.response?.status,
      data: data?.data
    }
  }catch(err){
    return {
      status: err?.response?.status,
      data: err?.response?.data,
      message: err?.message
    }
  }
}

export { fetchUser }
