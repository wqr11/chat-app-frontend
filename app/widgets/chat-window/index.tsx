import { Input } from "@/components/input";
import { ChatWindowStyled } from "./styled";

export const ChatWindow = () => {
  return (
    <ChatWindowStyled>
      <Input $variant="message" />
    </ChatWindowStyled>
  );
};
