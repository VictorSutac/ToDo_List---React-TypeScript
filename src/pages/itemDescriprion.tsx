import { useEffect, useState } from "react";
import { ToDo } from "../models/todo-item";
import { useNavigate, useParams } from "react-router-dom";

interface ComponentProps {
  todos: ToDo[];
}
export const ItemDescription = ({ todos }: ComponentProps) => {
  const { id } = useParams(); // достоёт параметры из url
  const navigate = useNavigate(); // достоёт навигацию
  const [todo, setTodo] = useState<ToDo>(); // достоёт состояние

  useEffect(() => {
    const searchTodo = todos.find((todo) => String(todo.id) === id);

    if (searchTodo) {
      setTodo(searchTodo);
    } else {
      navigate("/404");
    }
  }, [todos, id, navigate]);// при изменении состояния вызывается эффект 
  // и перезаписывается состояние todo и навигация navigate и id

  return (
    <div className="container">
      <h1>{todo?.text}</h1>
    </div>
  );
};
