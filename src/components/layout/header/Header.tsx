"use client";

import Link from "next/link";
import { FC, useEffect, useState } from "react";
import scss from "./Header.module.scss";
import BurgerMenu from "@/ui/burger_menu/BurgerMenu";
import { useLanguageStore } from "@/store/UseLanguageStore";
import SearchBar from "@/ui/search/Search";

const Header: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { language, setLanguage } = useLanguageStore();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1119);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    console.log("Language changed:", newLocale);
    setLanguage(newLocale);
  };

  const translate = (key: string) => {
    const translations = {
      en: {
        restaurant: "Restaurant",
        interior: "Interior",
        aboutUs: "About Us",
        menu: "Menu",
        contact: "Contact",
      },
      ru: {
        restaurant: "Ресторан",
        interior: "Интерьер",
        aboutUs: "О нас",
        menu: "Меню",
        contact: "Контакты",
      },
    };

    return (
      translations[language as keyof typeof translations]?.[
        key as keyof (typeof translations)["en"]
      ] || key
    );
  };

  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <Link href="/">
              <h1>{translate("restaurant")}</h1>
            </Link>
          </div>

          {isMobile ? (
            <BurgerMenu />
          ) : (
            <div className={scss.right}>
              <div className={scss.nav}>
                <ul>
                  <Link href="#Interior">
                    <li>{translate("interior")}</li>
                  </Link>
                  <Link href="#AboutUs">
                    <li>{translate("aboutUs")}</li>
                  </Link>
                  <Link href="/menu">
                    <li>{translate("menu")}</li>
                  </Link>
                  <Link href="#Contact">
                    <li>{translate("contact")}</li>
                  </Link>
                </ul>
              </div>

              <div className={scss.active_block}>
                <SearchBar />
                <div className={scss.lng_switch}>
                  <select
                    value={language}
                    onChange={handleLanguageChange}
                    className={scss.language_select}
                  >
                    <option value="en">EN</option>
                    <option value="ru">RU</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;