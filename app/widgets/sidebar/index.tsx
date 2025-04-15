import { ChatItem } from "@/components/chat";
import { Input } from "@/components/input";
import { SidebarStyled } from "./styled";

export const Sidebar = () => (
  <SidebarStyled>
    <Input />
    <ChatItem></ChatItem>
    <ChatItem></ChatItem>
  </SidebarStyled>
);
