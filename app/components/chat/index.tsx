import { ChatStyled, ChatName, ChatLeft } from "./styled";

export interface ChatItemProps {
  id: string;
  children?: React.ReactNode;
}

export const ChatItem: React.FC<ChatItemProps> = ({
  id,
  children = "My chat name.",
}) => {
  return (
    <ChatStyled>
      <ChatLeft>
        <ChatName>{children}</ChatName>
      </ChatLeft>
    </ChatStyled>
  );
};
