// reducers/todoReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodoToAPI, deleteTodoFromAPI } from '../actions/todoAction';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    listTodo: [],
  },
  reducers: {
    // You can add additional reducers here if needed
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.listTodo = action.payload;
    });
    builder.addCase(addTodoToAPI.fulfilled, (state, action) => {
      state.listTodo.push(action.payload);
    });
    builder.addCase(deleteTodoFromAPI.fulfilled, (state, action) => {
      state.listTodo = state.listTodo.filter(todo => todo.id !== action.payload);
    });
  },
});

export default todoSlice.reducer;
