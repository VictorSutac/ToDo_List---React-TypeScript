import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./feature/todoList";
import formReducer from "./feature/formSlice";
import themeReducer from "./feature/themesList";
import { loadFromLocalStorage, saveToLocalStorage } from "./helpers/storege";



export const store = configureStore({
  reducer: {
    todoList: todoReducer,
    form: formReducer, 
    themesList: themeReducer,
  },
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
