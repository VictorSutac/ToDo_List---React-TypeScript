import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const ToDoList = styled.li<{ $done: boolean }>`
  width: 100%;
  min-height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 14px 16px;
  margin-bottom: 12px;

  border-radius: 16px;

  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};

  backdrop-filter: blur(10px);

  transition: all 0.25s ease;
  animation: ${fadeIn} 0.3s ease;
  opacity: ${({ $done }) => ($done ? 0.6 : 1)};
  transform: ${({ $done }) => ($done ? "scale(0.98)" : "scale(1)")};

  &:hover {
    transform: ${({ $done }) =>
      $done ? "scale(0.98) translateY(-3px)" : "scale(1) translateY(-3px)"};
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const ToDoListText = styled.span<{ $done: boolean }>`
  color: ${({ theme }) => theme.colors.text};
  font-size: 15px;
  font-weight: 500;

  text-decoration: ${({ $done }) => ($done ? "line-through" : "none")};
`;

export const ToDoListContrtols = styled.div`
  display: flex;
  gap: 10px;
`;

export const ToDoListContrtol = styled.button<{ icon: string }>`
  width: 40px;
  height: 40px;

  border-radius: 10px;
  border: none;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  background-image: url(${(props) => props.icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px;

  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;


