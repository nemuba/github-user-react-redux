import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from './reducers/todo'
import UserReducer from './reducers/users'

export const store = configureStore({
  reducer: {
    todos: TodoReducer,
    user: UserReducer,
  },
})
