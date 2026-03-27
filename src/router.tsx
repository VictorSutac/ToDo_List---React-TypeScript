import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./pages/404";
import { ViewList } from "./pages/ViewList";
import { ToDoListPages } from "./pages/ToDoListPages";
import { ViewListItem } from "./pages/ViewListItem";


// const todos: ToDo[] = [
//   {
//     id: 0,
//     text: "Купить питцу",
//     isDone: false,
//   },
//   {
//     id: 1,
//     text: "Купить хлеб",
//     isDone: true,
//   },
//   {
//     id: 2,
//     text: "Купить молоко",
//     isDone: false,
//   },
//   {
//     id: 3,
//     text: "Купить масло",
//     isDone: true,
//   },
// ];

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { path: "/", element: <ToDoListPages /> }, // главная страница списка задач рисует ToDoListPages
        { path: "/list", element: <ViewList /> }, // список задач рисует ViewList   
        { path: "/list/:id", element: <ViewListItem  /> }, // конкретная задача рисует ViewListItem
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  // { basename: "/app/" },
);
