import { styled, css } from "styled-components";
import { Typography } from "@/components/typography/styled";

export interface ChatStyledProps {
  $active?: boolean;
}

export const ChatStyled = styled.div<ChatStyledProps>`
  max-width: 100%;
  display: flex;
  align-items: center;
  gap: 26px;
  padding: 8px 18px;
  border-radius: 10px;
  border: 2px dashed transparent;
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
  &:hover {
    border-color: ${({ theme }) => theme.colors.grayScale.gray3};
    background-color: ${({ theme }) => theme.colors.grayScale.gray2};
    cursor: pointer;
  }
  &:active {
    opacity: 0.8;
    transform: translateY(1px);
  }
  transition: background-color 0.1s ease-out;
  user-select: none;
  -webkit-user-select: none;
  ${({ $active }) =>
    $active &&
    css`
      background-color: ${({ theme }) => theme.colors.grayScale.gray2};
    `}
`;

export const ChatLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 26px;
`;

export const ChatName = styled(Typography).attrs({
  $variant: "p-normal",
})``;

export const ChatAction = styled.button`
  all: unset;
  margin-left: auto;

  &:hover {
    cursor: pointer;
    svg circle {
      fill: ${({ theme }) => theme.colors.grayScale.gray3};
      stroke: ${({ theme }) => theme.colors.grayScale.gray3};
    }
  }
`;
