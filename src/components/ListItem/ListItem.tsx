import { ToDo } from "../../models/todo-item";
import { Item } from "./ListItem.styled";

export const ListItem = ({ todo }: { todo: ToDo }) => {
  return (
    <Item $done={todo.isDone} href={`/list/${todo.id}`}>
      {todo.text}
    </Item>
  );
};