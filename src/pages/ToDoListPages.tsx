import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-item";
import { ToastContainer } from "react-toastify";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { createAction, deleteAction, updateAction } from "../feature/todoList";

export const ToDoListPages = () => {
  // const [todos, setTodos] = useState<ToDo[]>([
  //   // {
  //   //   id: 0,
  //   //   text: "Первая задача",
  //   //   isDone: false,
  //   // },
  //   // {
  //   //   id: 1,
  //   //   text: "Вторая задача",
  //   //   isDone: true,
  //   // },
  //   // {
  //   //   id: 2,
  //   //   text: "Третья задача",
  //   //   isDone: true,
  //   // },
  // ]);
  //const todos: ToDo[] = [];

  const todoList = useSelector((state: RootState) => state.todoList.todos);
  const dispatch = useDispatch();

  const createNewToDo = (text: string) => {
    dispatch(createAction(text));
  };
  const updateToDo = (toDoItem: ToDo) => {
    dispatch(updateAction(toDoItem));
  };
  const deleteToDo = (toDoItem: ToDo) => {
    dispatch(deleteAction(toDoItem));
  };
  return (
    <>
      <Form createNewToDo={createNewToDo} />
      <ToDoList
        todos={todoList}
        updateToDo={updateToDo}
        deleteToDo={deleteToDo}
      />

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
