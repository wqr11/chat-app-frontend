import React, { useCallback, useRef } from "react";
import {
  SearchCloseButton,
  SearchField,
  SearchIconStyled,
  SearchStyled,
} from "./styled";

export interface SearchProps {
  placeholder: string;
  onInput: (e: React.FormEvent) => unknown;
  onClear: () => unknown;
  onSubmit: () => unknown;
}

export const Search: React.FC<SearchProps> = React.memo(
  ({ placeholder, onClear, onInput, onSubmit }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = useCallback(
      (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit();
      },
      [onSubmit]
    );

    const handleInputClick = useCallback(() => {
      inputRef.current?.focus();
    }, [inputRef.current]);

    return (
      <SearchStyled onSubmit={handleSubmit} onClick={handleInputClick}>
        <SearchIconStyled />
        <SearchField
          ref={inputRef}
          onInput={onInput}
          placeholder={placeholder}
        />
        <SearchCloseButton onClick={onClear} />
      </SearchStyled>
    );
  }
);
