import { styled } from "styled-components";

export const ChatWindowStyled = styled.div`
  flex-grow: 1;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray2};
`;
