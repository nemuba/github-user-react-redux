import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add_todo: (state, {payload}) => {
      state.value = [...state.value, payload]
    },
    remove_todo: (state, {payload}) => {
      state.value = state.value.filter(todo => todo.id !== payload.id)
    },
  },
})

// Action creators are generated for each case reducer function
export const { add_todo, remove_todo } = todoSlice.actions

export default todoSlice.reducer
