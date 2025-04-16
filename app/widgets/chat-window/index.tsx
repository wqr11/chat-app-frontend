import React, { useMemo } from "react";
import { useTheme } from "styled-components";
import { InputMessage } from "@/components/fields/input-message";
import { Message } from "@/components/message";
import { ReturnIcon } from "@/icons/return";
import {
  ChatWindowChatBar,
  ChatWindowChatBarName,
  ChatWindowChatBarReturnButton,
  ChatWindowChats,
  ChatWindowEmptyMessageStyled,
  ChatWindowEmptyMessageText,
  ChatWindowEmptyMessageTitle,
  ChatWindowInput,
  ChatWindowStyled,
} from "./styled";
import { IChat, IUser } from "@/shared/types/db";

export interface ChatWindowProps {
  user?: IUser;
  chat?: IChat;
}

export const ChatWindow: React.FC<ChatWindowProps> = React.memo(
  ({ user, chat }) => {
    const theme = useTheme();

    const emojiNode = useMemo(() => {
      const emojis = [
        "😃",
        "😅",
        "🙂",
        "🙃",
        "😉",
        "😊",
        "🥰",
        "😍",
        "😘",
        "😜",
      ];

      return emojis[Math.floor(Math.random() * 10)];
    }, []);

    const messagesNode = useMemo(
      () =>
        chat?.messages.map((msg) => (
          <Message
            key={msg.id}
            $variant={user?.id === msg.author.id ? "user" : "companion"}
            author={msg.author.name ?? "Неизвестный"}
          >
            {msg.content}
          </Message>
        )),
      [chat?.messages]
    );

    return (
      <ChatWindowStyled>
        {chat && (
          <ChatWindowChatBar>
            <ChatWindowChatBarReturnButton>
              <ReturnIcon
                width={24}
                height={24}
                fill={theme.colors.grayScale.gray4}
                bg={theme.colors.grayScale.gray2}
              />
            </ChatWindowChatBarReturnButton>
            <ChatWindowChatBarName>{chat?.name}</ChatWindowChatBarName>
          </ChatWindowChatBar>
        )}
        {chat ? (
          <>
            <ChatWindowChats>{messagesNode}</ChatWindowChats>
            <ChatWindowInput>
              <InputMessage />
            </ChatWindowInput>
          </>
        ) : (
          <ChatWindowEmptyMessageStyled>
            <ChatWindowEmptyMessageTitle>
              Привет {emojiNode}
            </ChatWindowEmptyMessageTitle>
            <ChatWindowEmptyMessageText>
              Выберите чат, чтобы начать общение
            </ChatWindowEmptyMessageText>
          </ChatWindowEmptyMessageStyled>
        )}
      </ChatWindowStyled>
    );
  }
);
