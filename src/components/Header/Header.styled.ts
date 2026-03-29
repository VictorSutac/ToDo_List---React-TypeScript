// import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderBlock = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background-color: #4682b4;
  display: flex;
  align-items: center;
`;

export const ContainerBlock = styled.div`
  max-width: 97%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

// export const StyledLink = styled(NavLink)`
//   text-decoration: none;
//   padding: 10px;
//   color: #fff;

//   &.active {
//     color: #ffffff33;
//   }
// `;

export const ToggleButton = styled.button<{ $isDark: boolean }>`
  position: absolute;
  right: 0;
  top: 50%;
  width: 60px;
  height: 30px;
  transform: translateY(-50%);

  border-radius: 30px;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  padding: 4px;

  background: ${({ $isDark, theme }) =>
    $isDark
      ? "linear-gradient(135deg, #1e293b, #0f172a)"
      : "linear-gradient(135deg, #4f8cff, #6c63ff)"};

  transition: all 0.3s ease;

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &::before {
    content: "";
    width: 22px;
    height: 22px;
    border-radius: 50%;

    background: white;

    transform: ${({ $isDark }) =>
      $isDark ? "translateX(30px)" : "translateX(0)"};

    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-50%) scale(1.05);
  }
`;
