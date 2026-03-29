import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setValue, clearValue } from "../../feature/formSlice";
import {
  FormControl,
  FormBlock,
  FormField,
  FormLabel,
  FormWrapper,
} from "./Form.styled";

import plusIcon from "../../assets/images/plus.png";
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
    <FormWrapper>
      <FormBlock action="#" onSubmit={formSubmit}>
        <FormLabel>
          <FormField
            value={value}
            type="text"
            onChange={(e) => dispatch(setValue(e.target.value))}
          />
          <FormControl icon={plusIcon} />
        </FormLabel>
      </FormBlock>
    </FormWrapper>
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
