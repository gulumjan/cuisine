import React, { FC, ReactNode } from "react";
import Footer from "./footer/Footer";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";

interface iLayoutSiteProps {
  children: ReactNode;
}
const LayoutSite: FC<iLayoutSiteProps> = ({ children }) => {
  return (
    <div className={scss.LayoutSite}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSite;
