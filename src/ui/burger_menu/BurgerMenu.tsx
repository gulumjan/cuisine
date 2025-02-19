"use client";
import React, { useState } from "react";
import "./BurgerMenu.css";
import Link from "next/link";
import { useLanguageStore } from "@/store/UseLanguageStore";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguageStore();
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const translate = (key: string) => {
    const translations = {
      en: {
        interior: "Interior",
        aboutUs: "About Us",
        menu: "Menu",
        contact: "Contact",
      },
      ru: {
        interior: "Интерьер",
        aboutUs: "О нас",
        menu: "Меню",
        contact: "Контакты",
      },
    };

    return translations[language as keyof typeof translations][
      key as keyof (typeof translations)["en"]
    ];
  };

  const switchLanguage = (lang: "en" | "ru") => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`burger-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
        <div className="top_line"></div>
        <ul>
          <li>
            <Link href="/#Interior">
              <p
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
              >
                {translate("interior")}
              </p>
            </Link>
          </li>
          <li>
            <Link href="/#AboutUs">
              <p
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
              >
                {translate("aboutUs")}
              </p>
            </Link>
          </li>
          <li>
            <Link href="/menu">
              <p
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
              >
                {translate("menu")}
              </p>
            </Link>
          </li>
          <li>
            <Link href="/#Contact">
              <p
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
              >
                {translate("contact")}
              </p>
            </Link>
          </li>

          <div className="under_switch">
            <button
              onClick={() => switchLanguage("en")}
              className={`lang-btn ${language === "en" ? "active" : ""}`}
            >
              EN
            </button>
            <button
              onClick={() => switchLanguage("ru")}
              className={`lang-btn ${language === "ru" ? "active" : ""}`}
            >
              RU
            </button>
            <button
              onClick={() => {
                router.push("/resultDatas");
                setIsOpen(false);
              }}
            >
              <IoSearch />
            </button>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default BurgerMenu;
