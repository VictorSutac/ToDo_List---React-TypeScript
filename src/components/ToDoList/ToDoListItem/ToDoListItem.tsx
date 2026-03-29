import { ToDo } from "../../../models/todo-item";
import "./ToDoListItem.scss";
import { ToDoList, ToDoListContrtol, ToDoListContrtols, ToDoListText } from "./ToDoListItem.styled";

import checkIcon from "../../../assets/images/check.png";
import uncheckIcon from "../../../assets/images/uncheck.png";
import trashIcon from "../../../assets/images/trash.png";


export const ToDoListItem = (props: {
  toDoItem: ToDo;
  updateToDo: Function;
  deleteToDo: Function;
}) => {
  return (
    <ToDoList $done={props.toDoItem.isDone}>
      <ToDoListText $done={props.toDoItem.isDone}>{props.toDoItem.text}</ToDoListText>
      <ToDoListContrtols className="todo-list-item__buttons">
        <ToDoListContrtol
          icon={trashIcon}
          onClick={() => props.deleteToDo(props.toDoItem)}
        ></ToDoListContrtol>
        <ToDoListContrtol
          icon={props.toDoItem.isDone ? checkIcon : uncheckIcon}
          onClick={() => props.updateToDo(props.toDoItem)}
        ></ToDoListContrtol>
      </ToDoListContrtols>
    </ToDoList>
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
