import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchUser } from '../services/users'

const initialState = {
  value: {},
  loading: false,
}

export const fetchUserByName = createAsyncThunk(
  'users/fetchByName',
  async (username) => {
    const response = await fetchUser(username)
    return response.data
  }
)

export const todoSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchUserByName.pending]: (state, action) => {
      state.loading = true
    },
    [fetchUserByName.fulfilled]: (state, action) => {
      state.loading = false
      state.value = action.payload
    },
    [fetchUserByName.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
  }
})

const reducer = todoSlice.reducer

export default reducer
