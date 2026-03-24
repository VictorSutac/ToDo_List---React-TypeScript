import { useState } from "react";
import "./Form.scss";

export const Form = (props: { createNewToDo: Function }) => {
  const [text, setText] = useState<string>("");

  // let createText = "";
  const formSubmit = () => {
    if (text) {
      props.createNewToDo(text);
      setText(""); // чтобы убрать текст из инпута на страничке
      //value={text} - добавили в инпут
    }
  };
  //   const changeText = (event: ChangeEvent<HTMLInputElement>) => {
  //     createText = event.target.value;
  //   };
  // удалили функцию по ненадоности

  return (
    <div className="form-wrapper">
      <form action="#" onSubmit={formSubmit}>
        <label>
          <input
            value={text}
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
          <button></button>
        </label>
      </form>
    </div>
  );
};
