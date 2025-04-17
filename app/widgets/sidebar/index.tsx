import React, { useMemo } from "react";
import { ChatItem } from "@/components/chat";
import { Search } from "@/components/fields/search";
import { SidebarSearch, SidebarStyled } from "./styled";
import { useUnit } from "effector-react";
import { chatModel } from "@/entities/chats";

export const Sidebar = React.memo(() => {
  const activeChat = useUnit(chatModel.$activeChat);
  const chats = useUnit(chatModel.$chatsWithoutMessages);

  const chatsNode = useMemo(
    () => chats.map((chat) => <ChatItem key={chat.id} chat={chat} />),
    [chats]
  );

  return (
    <SidebarStyled $activeChatExists={!!activeChat}>
      <SidebarSearch>
        <Search />
      </SidebarSearch>
      {chatsNode}
    </SidebarStyled>
  );
});
