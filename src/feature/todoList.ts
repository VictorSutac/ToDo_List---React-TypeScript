import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ToDo } from "../models/todo-item";
import { toast } from "react-toastify";

export interface TodoState {
  todos: ToDo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    createAction: (state, action: PayloadAction<string>) => {
      const newToDo: ToDo = {
        id: state.todos.length,
        text: action.payload,
        isDone: false,
      };
      state.todos = [...state.todos, newToDo];
      // setTodos([...todos, newToDo]); // доюавляем новые элементы в список
      toast.success("Задача добавлена ✅");
    },

    updateAction: (state, action: PayloadAction<ToDo>) => {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
      state.todos = newTodos;

      toast.info("Статус обновлён 🔄");
    },
    deleteAction: (state, action: PayloadAction<ToDo>) => {
      const newTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id,
      );
      state.todos = newTodos;

      toast.error("Задача удалена ❌");
    },
  },
});

export const { createAction, updateAction, deleteAction } = todoSlice.actions;

export default todoSlice.reducer;
