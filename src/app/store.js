import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,  // ✅ now state.todos = the array directly
  },
});