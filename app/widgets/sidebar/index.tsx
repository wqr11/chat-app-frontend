import { ChatItem } from "@/components/chat";
import { Search } from "@/components/fields/search";
import { SidebarStyled } from "./styled";

export const Sidebar = () => (
  <SidebarStyled>
    <Search />
    <ChatItem></ChatItem>
    <ChatItem></ChatItem>
  </SidebarStyled>
);
