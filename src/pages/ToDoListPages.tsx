import { useState } from "react";
import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-item";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
export const ToDoListPages = () => {
  const [todos, setTodos] = useState<ToDo[]>([
    // {
    //   id: 0,
    //   text: "Первая задача",
    //   isDone: false,
    // },
    // {
    //   id: 1,
    //   text: "Вторая задача",
    //   isDone: true,
    // },
    // {
    //   id: 2,
    //   text: "Третья задача",
    //   isDone: true,
    // },
  ]);
  //const todos: ToDo[] = [];

  const createNewToDo = (text: string) => {
    const newToDo: ToDo = {
      id: todos.length,
      text: text,
      isDone: false,
    };
    setTodos([...todos, newToDo]); // доюавляем новые элементы в список
    toast.success("Задача добавлена ✅");
  };
  const updateToDo = (toDoItem: ToDo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === toDoItem.id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(newTodos);

    toast.info("Статус обновлён 🔄");
  };
  const deleteToDo = (toDoItem: ToDo) => {
    const newTodos = todos.filter((todo) => todo.id !== toDoItem.id);
    setTodos(newTodos);

    toast.error("Задача удалена ❌");
  };
  return (
    <>
      
      <Form createNewToDo={createNewToDo} />
      <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />

      <ToastContainer
        position="top-right"
        autoClose={300}
        hideProgressBar={false}
      />
    </>
  );
};

// по итогам мы взяли всю вёрстку и перенесли в компонент
// создали компонент Header и перенесли в него вёрстку
// создали компонент ToDoList и перенесли в него вёрстку
// создали компонент Form и перенесли в него вёрстку

////////////////////////
// создали одноимённую функцию,
// которая будет возвращать некую вёрстку
// создали компонет который возвращает вёрстку
// экспортировали в index.tsx
//root.render(
//   <React.StrictMode>
//     <ToDoList />
//   </React.StrictMode>,
// );
//
// в место <div>...</div>
// <React.Fragment> ...  </React.Fragment>
// так же нужно импортировать React
// а лучше без контента и наименований
// писать <> ... </>
// тогда и не нужно импортировать React
// так будет более современно
// это всё для того чтобы возвращать
// не один родительский блок а несколько


//npm i react-router-dom  - установить библиотеку react-router-dom
// для перехода между страницами приложения
