import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
// import { Theme } from "../models/theme";

export const GlobalStyles = createGlobalStyle`
${normalize}
* {
    box-sizing: border-box;
}

body {
    transition: all 0.3s ease;
    background: ${({ theme }) => `
    linear-gradient(
    120deg,
    ${theme.colors.backgroundPrimary},
    ${theme.colors.backgroundSecondary}
    )`};
    padding: 50px 0 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.429;
    color: ${({ theme }) => theme.colors.text};
}


.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}`;
