import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todoReducer";
import { registerRootComponent } from 'expo';
export default configureStore({
   reducer: {
       listTodoStore: todoReducer
   }
});