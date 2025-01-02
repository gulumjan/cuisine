import React, { FC, ReactNode } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import scss from "./LayoutSite.module.scss";

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