"use client";

import Link from "next/link";
import { FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import scss from "./Header.module.scss";
import BurgerMenu from "@/ui/burger_menu/BurgerMenu";
import { useLanguageStore } from "@/store/UseLanguageStore";
import SearchBar from "@/ui/search/Search";

import { useLanguageStore } from "@/store/UseLanguageStore";
import { useRouter } from "next/navigation";

const BurgerMenu = dynamic(() => import("@/ui/burger_menu/BurgerMenu"), {
  ssr: false,
});
const Search = dynamic(() => import("@/ui/search/Search"), { ssr: false });


const Header: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { language, setLanguage } = useLanguageStore();
  const router = useRouter();
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1119);
    setIsMobile(window.innerWidth <= 1119);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
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
            <h1 onClick={() => router.push(`/`)}>{translate("restaurant")}</h1>
          </div>

          {!isMobile ? (
            <div className={scss.right}>
              <div className={scss.nav}>
                <ul>
                  <Link href="#Interior">{translate("interior")}</Link>
                  <Link href="#AboutUs">{translate("aboutUs")}</Link>
                  <Link href="/menu">{translate("menu")}</Link>
                  <Link href="#Contact">{translate("contact")}</Link>
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
          ) : (
            <BurgerMenu />
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
