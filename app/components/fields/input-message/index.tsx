import React, { useCallback, useRef } from "react";
import {
  InputMessageSendButton,
  InputMessageStyled,
  InputMessageTextArea,
} from "./styled";
import { SendIcon } from "@/icons/send";
import { useTheme } from "styled-components";

export interface InputMessageProps {
  placeholder?: string;
  disabled?: boolean;
  onInput?: (e: React.FormEvent) => unknown;
  onSubmit?: () => unknown;
}

export const InputMessage: React.FC<InputMessageProps> = ({
  placeholder,
  disabled,
  onInput,
  onSubmit,
}) => {
  const theme = useTheme();

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit?.();
    },
    [onSubmit]
  );

  const handleInputClick = useCallback(() => {
    textAreaRef.current?.focus();
  }, [textAreaRef.current]);

  return (
    <InputMessageStyled
      $disabled={disabled}
      onSubmit={handleSubmit}
      onClick={handleInputClick}
    >
      <InputMessageTextArea
        ref={textAreaRef}
        placeholder={placeholder}
        disabled={disabled}
        onInput={onInput}
      />
      <InputMessageSendButton $disabled={disabled} onClick={onSubmit}>
        <SendIcon width={30} height={30} fill={theme.colors.grayScale.gray4} />
      </InputMessageSendButton>
    </InputMessageStyled>
  );
};
