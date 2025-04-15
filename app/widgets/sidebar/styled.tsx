import { styled } from "styled-components";

export const SidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray1};
  @media (width >= ${({ theme }) => theme.size.maxTablet}px) {
    width: 320px;
  }
`;
