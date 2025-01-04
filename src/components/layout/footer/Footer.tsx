"use client";
import { FC, useEffect } from "react";
import scss from "./Footer.module.scss";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { useLanguageStore } from "@/store/UseLanguageStore";

const Footer: FC = () => {
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    console.log("Current language in About:", language);
  }, [language]);

  const translations = {
    en: {
      restaurant: "Restaurant",
      interior: "Interior",
      aboutUs: "About Us",
      menu: "Menu",
      contact: "Contact",
      motion: `2025 Motion Study LLC`,
    },
    ru: {
      restaurant: "Ресторан",
      interior: "Интерьер",
      aboutUs: "О нас",
      menu: "Меню",
      contact: "Контакты",
      motion: "2025 Motion Учебный Центр ООО",
    },
  };

  const translate = (key: string) => {
    if (!translations[language as keyof typeof translations]) {
      console.warn(`Translation not found for language: ${language}`);
      return translations.en[key as keyof typeof translations.en] || key;
    }
    return (
      translations[language as keyof typeof translations][
        key as keyof typeof translations.en
      ] || key
    );
  };
  return (
    <section className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.navs}>
            <h1>{translate("restaurant")}</h1>
            <nav>
              <Link href="#Interior">{translate("interior")}</Link>
              <Link href="#AboutUs">{translate("aboutUs")}</Link>
              <Link href="menu">{translate("menu")}</Link>
              <Link href="#Contact">{translate("contact")}</Link>
            </nav>
          </div>
          <div className={scss.icons}>
            <FaTelegramPlane className={scss.ico} />
            <FaSquareInstagram className={scss.ico} />
          </div>
        </div>
        <div className={scss.linear}></div>
        <h6>{translate("motion")}</h6>
      </div>
    </section>
  );
};

export default Footer;
