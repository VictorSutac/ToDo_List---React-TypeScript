import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Helmet } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const Layout = () => {

  const theme = useSelector((state: RootState) => state.themesList.theme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />
          <title>ToDo App</title>
        </Helmet>
        <GlobalStyles />
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
};
