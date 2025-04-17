import { css, styled } from "styled-components";

export interface SidebarStyledProps {
  $activeChatExists?: boolean;
}

export const SidebarStyled = styled.div<SidebarStyledProps>`
  display: flex;
  flex-direction: column;
  padding-inline: 8px;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray1};
  @media (width >= ${({ theme }) => theme.size.maxTablet}px) {
    width: 320px;
  }
  ${({ $activeChatExists, theme }) => css`
    @media (width <= ${theme.size.maxMobile}px) {
      ${$activeChatExists
        ? css`
            display: none;
          `
        : css`
            flex-grow: 1;
          `}
    }
  `}
  overflow-y: auto;
  padding-bottom: 48px;
`;

export const SidebarSearch = styled.div`
  margin-top: 8px;
  position: sticky;
  top: 8px;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.modal};
`;
