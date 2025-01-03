"use client";

import { FC, useEffect, useState } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";
import BurgerMenu from "@/ui/burger_menu/BurgerMenu";
import Search from "@/ui/search/Search";

const Header: FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1120);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <Link href="/">
              <h1>Restaurant</h1>
            </Link>
          </div>

          {isMobile ? (
            <>
              {" "}
              <BurgerMenu />{" "}
            </>
          ) : (
            <>
              <div className={scss.right}>
                <div className={scss.nav}>
                  <ul>
                    <Link href="#Interior">
                      <li>Interior</li>
                    </Link>
                    <Link href="#AboutUs">
                      <li>About Us</li>
                    </Link>
                    <Link href="/menu">
                      <li>Menu</li>
                    </Link>
                    <Link href="#Contact">
                      <li>Contact</li>
                    </Link>
                  </ul>
                </div>

                <div className={scss.active_block}>
                  <Search />
                  <div className={scss.lng_switch}>
                    <p>EN</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
