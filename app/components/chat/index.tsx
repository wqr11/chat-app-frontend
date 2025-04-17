import React, { useCallback } from "react";

import { ChatStyled, ChatName, ChatLeft } from "./styled";
import { IChat } from "@/shared/types/db";

import { useUnit } from "effector-react";
import { chatModel } from "@/entities/chats";

export interface ChatItemProps {
  chat: Omit<IChat, "messages" | "users">;
}

export const ChatItem: React.FC<ChatItemProps> = React.memo(({ chat }) => {
  const setActiveChatId = useUnit(chatModel.setActiveChatId);

  const handleClick = useCallback(() => {
    setActiveChatId(chat.id);
  }, [chat.id, setActiveChatId]);

  return (
    <ChatStyled onClick={handleClick}>
      <ChatLeft>
        <ChatName>{chat.name}</ChatName>
      </ChatLeft>
    </ChatStyled>
  );
});
