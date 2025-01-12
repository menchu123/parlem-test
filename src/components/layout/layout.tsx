import { ReactNode } from "react";
import { MainContainer, AppLayout } from "./layout.style";
import Search from "../clientList/filters";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <AppLayout>
      <header>
        Clients
        <Search />
      </header>
      <MainContainer>{children}</MainContainer>
    </AppLayout>
  );
};

export default Layout;
