import React, { useCallback, useMemo } from "react";
import {
  InputMessageSendButton,
  InputMessageStyled,
  InputMessageTextArea,
  InputSearchCloseButton,
  InputSearchField,
  InputSearchIcon,
  InputSearchStyled,
} from "./styled";

export interface InputProps {
  $variant: "search" | "message";
  placeholder: string;
  onInput: (e: React.FormEvent) => unknown;
  onClear: () => unknown;
  onSubmit: () => unknown;
}

export const Input: React.FC<InputProps> = React.memo(
  ({ $variant = "search", placeholder, onInput, onClear, onSubmit }) => {
    const handleSubmit = useCallback((e: React.FormEvent) => {
      e.preventDefault();
      onSubmit();
    }, []);

    const inputNode = useMemo(() => {
      switch ($variant) {
        case "search":
          return (
            <InputSearchStyled onSubmit={handleSubmit}>
              <InputSearchIcon />
              <InputSearchField onInput={onInput} placeholder={placeholder} />
              <InputSearchCloseButton onClick={onClear} />
            </InputSearchStyled>
          );
        case "message": {
          return (
            <InputMessageStyled onSubmit={handleSubmit}>
              <InputMessageTextArea
                placeholder={placeholder}
                onInput={onInput}
              />
              <InputMessageSendButton onClick={onSubmit} />
            </InputMessageStyled>
          );
        }
      }
    }, [$variant]);

    return <>{inputNode}</>;
  }
);
