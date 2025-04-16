import { Outlet } from "react-router";

import { Sidebar } from "@/widgets/sidebar";
import { ChatsLayoutStyled } from "./styled";
import { AuthModal } from "@/features/modals/auth";
import { Notifications } from "@/entities/notifications/ui";

export const ChatsLayout = () => {
  return (
    <ChatsLayoutStyled>
      <Sidebar />
      <AuthModal />
      <Notifications />
      <Outlet />
    </ChatsLayoutStyled>
  );
};
