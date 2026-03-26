import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/style.scss";
import "./assets/scss/normalize.scss";
import { ToDoListPages } from "./pages/ToDoListPages";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePages";
import { HelmetProvider } from "react-helmet-async";
import { ToDo } from "./models/todo-item";
import { NotFound } from "./pages/404";
import { ItemDescription } from "./pages/itemDescriprion";
import { Layout } from "./layouts/Layout";

const todos: ToDo[] = [
  {
    id: 0,
    text: "Купить питцу",
    isDone: false,
  },
  {
    id: 1,
    text: "Купить хлеб",
    isDone: true,
  },
  {
    id: 2,
    text: "Купить молоко",
    isDone: false,
  },
  {
    id: 3,
    text: "Купить масло",
    isDone: true,
  },
];

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <HomePage todos={todos} />,
        },
        {
          path: "/todo",
          element: <ToDoListPages />,
        },
        {
          path: "/list/:id",
          element: <ItemDescription todos={todos} />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  { basename: "/app/" },
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
);
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//     {/* <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage todos={todos} />}></Route>
//         <Route
//           path="/list/:id"
//           element={<ItemDescription todos={todos} />}
//         ></Route>
//         <Route path="/todo" element={<ToDoListPages />}></Route>
//         <Route path="/*" element={<NotFound />}></Route>
//       </Routes>
//     </BrowserRouter> */}
//   </React.StrictMode>,
// );

//
// также есть необходимые импорты
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//
//<BrowserRouter> //👉 Это "обёртка", которая включает маршрутизацию
////////////////////следит за адресной строкой (/, /about и т.д.)
/////////////////// позволяет React "переключать страницы" без перезагрузки
//   <Routes>
/////////////////// 👉 Контейнер для всех маршрутов
/////////////////// 📌 Он говорит:
/////////////////// "вот список всех страниц, выбери подходящую"
//     <Route path="/" element={<ToDoListPages />}></Route>
/////////////////// 👉 Один конкретный маршрут
/////////////////// Разбираем:
/////////////////// 🔹 path="/"
// 👉 это URL
// / → главная страница
// /about → другая страница
// /login → ещё одна
// 🔹 element={<ToDoListPages />}
// 👉 что показывать
// 📌 Если пользователь зашёл на /
/////////////////// → отрисуется компонент: <ToDoListPages />
// </BrowserRouter>
//Это роутинг (навигация) в React через библиотеку react-router-dom.
// 👉 Он решает:
// какой компонент показать в зависимости от URL
// 👉 Логика:
// пользователь открывает сайт
// URL = /
// React находит path="/"
// показывает <ToDoListPages />
