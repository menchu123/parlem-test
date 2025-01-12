import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>Header</div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
