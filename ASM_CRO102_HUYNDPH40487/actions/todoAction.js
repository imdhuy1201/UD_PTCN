// actions/todoAction.js
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Fetch todos from API
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get(
    "https://66616d4163e6a0189fe9c73c.mockapi.io/Users"
  );
  return response.data;
});

// Add a new todo to API
export const addTodoToAPI = createAsyncThunk(
  "todos/addTodo",
  async (newTodo) => {
    const response = await axios.post(
      "https://66616d4163e6a0189fe9c73c.mockapi.io/Users",
      newTodo
    );
    return response.data;
  }
);

// Delete a todo from API
export const deleteTodoFromAPI = createAsyncThunk(
  "todos/deleteTodo",
  async (id) => {
    await axios.delete(
      `https://66616d4163e6a0189fe9c73c.mockapi.io/Users/${id}`
    );
    return id;
  }
);
