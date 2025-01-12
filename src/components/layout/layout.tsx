import { ReactNode } from "react";
import { MainContainer, AppLayout } from "./layout.style";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <AppLayout>
      <header>Clients</header>
      <MainContainer>{children}</MainContainer>
    </AppLayout>
  );
};

export default Layout;
