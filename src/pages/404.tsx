import { Link } from "react-router-dom";
import classes from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <div className={classes.notfound}>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to="/">На главную</Link>
    </div>
  );
};