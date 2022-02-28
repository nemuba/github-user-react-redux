import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchReposUser, fetchUser } from '../services/users'

const initialState = {
  value: {},
  repositories: [],
  loading: false,
  error: {}
}

export const fetchUserByName = createAsyncThunk(
  'users/fetchByName',
  async (username) => {
    try {
      const data = await fetchUser(username)
      return {
        status: data?.status,
        data: data?.data
      }
    } catch (error) {
     return {
        status: error?.response?.status,
        message: error?.response?.data?.message || error?.message
      }
    }
  }
)

export const fetchReposUserByName = createAsyncThunk(
  'users/fetchReposByName',
  async (username) => {
    try {
      const data = await fetchReposUser(username)
      return {
        status: data?.status,
        data: data?.data
      }
    } catch (error) {
      return {
        status: error?.response?.status,
        message: error?.response?.data?.message || error?.message
      }
    }
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
      state.value = state.value
    },
    [fetchUserByName.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.value = payload.status === 200 ? payload.data : {}
      state.error = payload.status !== 200 ? payload : {}
    },
    [fetchUserByName.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [fetchReposUserByName.pending]: (state, action) => {
      state.loading = true
    },
    [fetchReposUserByName.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.repositories = payload.status === 200 ? payload.data : {}
      state.error = payload.status !== 200 ? payload : {}
    },
    [fetchReposUserByName.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    }
  }
})

const reducer = todoSlice.reducer

export default reducer
