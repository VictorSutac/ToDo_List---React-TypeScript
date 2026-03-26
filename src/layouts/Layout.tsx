import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header"
import { Helmet } from "react-helmet-async";

export const Layout = () => {
  return (
    <>
     <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <title>ToDo App</title>
      </Helmet>

      <Header />
      <Outlet />

    </>
  )
};
