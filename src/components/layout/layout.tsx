import { ReactNode } from "react";
import { MainContainer, AppLayout, AppTitle, Header } from "./layout.style";
import Search from "../clientList/filters";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <AppLayout>
      <Header>
        <AppTitle>Clientes - Parlem</AppTitle>
        <Search />
      </Header>
      <MainContainer>{children}</MainContainer>
    </AppLayout>
  );
};

export default Layout;
