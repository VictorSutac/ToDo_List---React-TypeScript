import { useEffect, useState } from "react";
import { ToDo } from "../models/todo-item";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

// interface ComponentProps {
//   todos: ToDo[];
// }
// export const ViewListItem = ({ todos }: ComponentProps) - заменили
export const ViewListItem = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos);
  const { id } = useParams(); // достоёт параметры из url
  const navigate = useNavigate(); // достоёт навигацию
  const [todo, setTodo] = useState<ToDo>(); // достоёт состояние

  useEffect(() => {
    const searchTodo = todoList.find((todo) => String(todo.id) === id);

    if (searchTodo) {
      setTodo(searchTodo);
    } else {
      navigate("/404");
    }
  }, [todoList, id, navigate]);// при изменении состояния вызывается эффект 
  // и перезаписывается состояние todo и навигация navigate и id

  return (
    <div className="container">
      <h1>{todo?.text}</h1>
    </div>
  );
};
