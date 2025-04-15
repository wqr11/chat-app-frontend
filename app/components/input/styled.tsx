import { styled } from "styled-components";
import { CloseIcon } from "@/icons/close";
import { SearchIcon } from "@/icons/search";
import { SendIcon } from "@/icons/send";

export const InputSearchStyled = styled.form`
  padding: 12px 36px;
  background-color: ${({ theme }) => theme.colors.base.white};
  border-radius: 10px;
  outline: 2px dashed transparent;
  color: ${({ theme }) => theme.colors.grayScale.gray4};
  position: relative;
  &:hover {
    outline-color: ${({ theme }) => theme.colors.grayScale.gray4};
    *::placeholder {
      opacity: 1;
    }
  }
  button {
    display: none;
  }
  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.grayScale.gray4};
    button {
      display: flex;
    }
  }
`;

export const InputSearchField = styled.input.attrs({
  type: "text",
  placeholder: "asdasd",
})`
  all: unset;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScale.gray4};
    opacity: 0.6;
  }
  transition: all 0.1s ease-out;
`;

export const InputSearchIcon = styled(SearchIcon).attrs({
  width: 16,
  height: 16,
})`
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  top: 0;
  left: 12px;
`;

export const InputSearchCloseButton = styled.button.attrs({
  children: <CloseIcon width={14} height={14} />,
})`
  all: unset;
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  top: 0;
  right: 12px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
  &:active {
    transform: translateY(1px);
  }
`;

export const InputMessageStyled = styled.form`
  margin-top: auto;
  padding: 18px 26px;
  padding-right: 108px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
  outline: 1px solid ${({ theme }) => theme.colors.grayScale.gray2};
  position: relative;
  &:hover {
    outline: 2px dashed ${({ theme }) => theme.colors.grayScale.gray4};
  }
  &:focus-within {
    outline: 3px solid ${({ theme }) => theme.colors.grayScale.gray4};
  }
`;

export const InputMessageTextArea = styled.textarea.attrs({
  rows: 3,
  cols: 32,
  wrap: "wrap",
  placeholder: "Yomae",
})`
  all: unset;
  width: 100%;
  max-width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.base.black};
`;

export const InputMessageSendButton = styled.button.attrs({
  children: <SendIcon width={30} height={30} />,
})`
  all: unset;
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  top: 0;
  right: 38px;
  svg path {
    stroke: ${({ theme }) => theme.colors.grayScale.gray4};
    fill: ${({ theme }) => theme.colors.grayScale.gray4};
  }
  &:hover {
    cursor: pointer;
    svg circle {
      fill: ${({ theme }) => theme.colors.grayScale.gray2};
    }
  }
  &:active {
    transform: translateY(1px);
    filter: brightness(0.8);
    transition: transform 0.3 ease-out;
  }
  transition: all 0.1s ease-out;
`;
