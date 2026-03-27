import "./Form.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setValue, clearValue } from "../../feature/formSlice";

export const Form = (props: { createNewToDo: Function }) => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.form.value);

  const formSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (value) {
      props.createNewToDo(value);
      dispatch(clearValue()); // очистка input
    }
  };

  return (
    <div className="form-wrapper">
      <form action="#" onSubmit={formSubmit}>
        <label>
          <input
            value={value}
            type="text"
            onChange={(e) => dispatch(setValue(e.target.value))}
          />
          <button></button>
        </label>
      </form>
    </div>
  );
};

// import { useState } from "react";
// import "./Form.scss";

// export const Form = (props: { createNewToDo: Function }) => {
//   const [text, setText] = useState<string>("");

//   // let createText = "";
//   const formSubmit = (event: React.SyntheticEvent) => {
//     event.preventDefault();
//     if (text) {
//       props.createNewToDo(text);
//       setText(""); // чтобы убрать текст из инпута на страничке
//       //value={text} - добавили в инпут
//     }
//   };
//   //   const changeText = (event: ChangeEvent<HTMLInputElement>) => {
//   //     createText = event.target.value;
//   //   };
//   // удалили функцию по ненадоности

//   return (
//     <div className="form-wrapper">
//       <form action="#" onSubmit={formSubmit}>
//         <label>
//           <input
//             value={text}
//             type="text"
//             onChange={(e) => setText(e.target.value)}
//           />
//           <button></button>
//         </label>
//       </form>
//     </div>
//   );
// };
