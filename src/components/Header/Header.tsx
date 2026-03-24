
import classes from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <a href="/" className={classes.link}>ToDo</a>
      </div>
    </header>
  );
};



////
//
//import classes from "./Header.module.scss";
// перенесли часть стилей в Header.module.scss
// чтобы перенести туда часть стилей
// переименовали header className="header" в header className={classes.header}
// для того чтобы не задеть другие стили
// а нашей переменной в браузере добавился _Префикс 

///////

// ранее мы создали фаил Header.scss и 
// залил туда стили но потом мы удалили его 
// тк создали файл Header.module.scss
// и перенесли стили в него
// и создали в нем переменную classes {classes.header или classes.link}
// ## 🧱 <header className={classes.header}>
// → создаём блок "шапка сайта"
// * header → HTML тег (верх страницы)
// * className → класс (в React вместо class)
// * classes.header → стиль из CSS-модуля
// ---
// ## 📦 <div className={classes.container}>
// → контейнер внутри шапки
// * div → просто блок
// * container → обычно для выравнивания/ширины
// ---
// ## 🔗 <a href="/" className={classes.link}>
// → ссылка на главную страницу
// * a → ссылка
// * href="/" → перейти на главную
// * className → стиль ссылки
// ---
// ## 📝 ToDo
// → текст ссылки (что видит пользователь)
// ---


