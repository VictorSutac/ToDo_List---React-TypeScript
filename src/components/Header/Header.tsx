import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";
import { ContainerBlock, HeaderBlock, ToggleButton } from "./Header.styled";
import { useDispatch } from "react-redux";
import { toggleThemeAction } from "../../feature/themesList";
import { useSelector } from "react-redux";
import { RootState } from "../../store";



export const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.themesList.theme);
  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? `${classes.link} ${classes.active}` : classes.link;
  };

  return (
    <HeaderBlock>
      <ContainerBlock>
        <NavLink to="/" className={getActiveClass}>
          Home
        </NavLink>
        <NavLink to="/list" className={getActiveClass}>
          ToDo
        </NavLink>

        {/* <a href="/" className={classes.link}>Home</a>
        <a href="/todo" className={classes.link}>ToDo</a> 
        // поменяли на Link 
        // NavLink - показывает какая из ссылок активная 
        // isActive -  показывает если ссылка активна или нет
        //  <NavLink to="/" className={({isActive}) => isActive ? classes.active : ''})}>
        //Home
        //</NavLink>
        // выносим функцию за пределы компонента */}
        <ToggleButton $isDark={theme.name === "dark"} onClick={()=> dispatch(toggleThemeAction())}> 
          
        </ToggleButton>
      </ContainerBlock>
    </HeaderBlock>
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
