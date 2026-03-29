import styled from "styled-components";

export const Item = styled.a<{ $done: boolean }>`
  text-decoration: none;
  padding: 12px 16px;
  margin-bottom: 10px;

  display: block;
  border-radius: 14px;

  color: ${({ theme }) => theme.colors.text};

  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};

  backdrop-filter: blur(10px);

  transition: all 0.25s ease;

  opacity: ${({ $done }) => ($done ? 0.6 : 1)};
  text-decoration: ${({ $done }) => ($done ? "line-through" : "none")};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;
