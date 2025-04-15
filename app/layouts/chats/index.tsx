import { Outlet } from "react-router";

import { Sidebar } from "@/widgets/sidebar";
import { ChatsLayoutStyled } from "./styled";

export const ChatsLayout = () => {
  return (
    <ChatsLayoutStyled>
      <Sidebar />
      <Outlet />
    </ChatsLayoutStyled>
  );
};
