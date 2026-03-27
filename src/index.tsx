import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/style.scss";
import "./assets/scss/normalize.scss";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./router";
import { store } from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
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
