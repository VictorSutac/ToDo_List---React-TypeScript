import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import "./ToDoList.scss";
import { ToDo } from "../../models/todo-item";
import { ToDoListContainer } from "./ToDoList.styled";


export const ToDoList = (props: {
  todos: ToDo[];
  updateToDo: Function;
  deleteToDo: Function;
}) => {
  // const todos: ToDo[] = []; - вынесли в компонет отдельно в ToDoListPages.tsx
  // const todo1: ToDo = {
  //   id: 0,
  //   text: "Первая задача",
  //   isDone: false,
  // };
  // const todo2: ToDo = {
  //   id: 0,
  //   text: "Вторая задача",
  //   isDone: true,
  // };

  const chekedList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={item.id}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };

  const unCheckedList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={item.id}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };

  return (
    <ToDoListContainer>
      <ul className="todo-list failed">{chekedList()}</ul>
      <ul className="todo-list completed">{unCheckedList()}</ul>
    </ToDoListContainer>
  );
};
