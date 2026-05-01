import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos: [
    { id: 1, task: "Learn Redux", isDone: false }  // fixed keys to match too
  ]
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo);  // ✅ now works
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);  // ✅
    },

    markAsDone: (state, action) => {
      // ❌ .map() returns a new array but you're not returning it, and each
      //    callback returns undefined — use find() instead
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = true;  // ✅ Immer lets you mutate directly
      }
    },
  },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;