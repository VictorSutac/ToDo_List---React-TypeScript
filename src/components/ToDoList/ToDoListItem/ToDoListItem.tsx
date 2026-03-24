import { ToDo } from "../../../models/todo-item";
import "./ToDoListItem.scss";

export const ToDoListItem = (props: {
  toDoItem: ToDo;
  updateToDo: Function;
  deleteToDo: Function;
}) => {
  return (
    <li className="todo-list-item__wrapper">
      <span>{props.toDoItem.text}</span>
      <div className="todo-list-item__buttons">
        <button
          className="btn-trash"
          onClick={() => props.deleteToDo(props.toDoItem)}
        ></button>
        <button
          className={props.toDoItem.isDone ? "btn-check" : "btn-uncheck"}
          onClick={() => props.updateToDo(props.toDoItem)}
        ></button>
      </div>
    </li>
  );
};

//
//(props: {text:string}) - обозначили вводную данную типом строка
// <span>{props.text}</span> заменили вместо - Первый текс
// в фаиле ToDoLis.tsx добавили <ToDoListItem text="Мой текс"/>
// именно text - это атрибут который связан с ToDoLisItem.tsx - с пропсами
//
// Заемнили
//toDoItem = {todo1} в ToDoLis.tsx
//(props: {toDoItem: {id: number;text: string;isDone: boolean;};}) в ToDoLisItem.tsx
//<span>{props.toDoItem.text}</span> в ToDoLisItem.tsx
//
//Заменили на ToDo весь интервейс из папки Modules - ToDo.ts
