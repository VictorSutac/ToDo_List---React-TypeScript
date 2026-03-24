import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { ToDoList } from "../components/ToDoList/ToDoList";

export const ToDoListPages = () => {
  return (
    <>
      <Header />
      <Form />
      <ToDoList />
    </>
  );
};

// по итогам мы взяли всю вёрстку и перенесли в компонент
// создали компонент Header и перенесли в него вёрстку
// создали компонент ToDoList и перенесли в него вёрстку
// создали компонент Form и перенесли в него вёрстку


////////////////////////
// создали одноимённую функцию,
// которая будет возвращать некую вёрстку
// создали компонет который возвращает вёрстку
// экспортировали в index.tsx
//root.render(
//   <React.StrictMode>
//     <ToDoList />
//   </React.StrictMode>,
// );
//
// в место <div>...</div>
// <React.Fragment> ...  </React.Fragment>
// так же нужно импортировать React
// а лучше без контента и наименований
// писать <> ... </>
// тогда и не нужно импортировать React
// так будет более современно
// это всё для того чтобы возвращать
// не один родительский блок а несколько
