"use client";

import React, { useEffect } from "react";
import scss from "./About.module.scss";
import welcomeLogoLeft from "../../../../../assets/abdurakhman_logos/restoranlogos2.svg";
import Image from "next/image";
import about_img1 from "../../../../../assets/abdurakhman_proj_images/restoran img1.svg";
import about_img2 from "../../../../../assets/abdurakhman_proj_images/restoran img2.svg";
import { useLanguageStore } from "@/store/useLanguageStore";

const About = () => {
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    console.log("Current language in About:", language);
  }, [language]);

  const translations = {
    en: {
      aboutUs: "About Us",
      journeyText: "A Journey Through Cafesio Flavors",
      description:
        "Try dishes that will open up new tastes for you and delight your eyes with their appearance. Here you will find a cozy atmosphere, excellent service and attention to each guest. Book a table now and enjoy a unique experience of taste discovery!",
    },
    ru: {
      aboutUs: "О нас",
      journeyText: "Путешествие по вкусам Cafesio",
      description:
        "Попробуйте блюда, которые откроют для вас новые вкусы и порадуют глаз своим видом. Здесь вы найдете уютную атмосферу, отличное обслуживание и внимание к каждому гостю. Забронируйте столик сейчас и наслаждайтесь уникальным опытом открытия вкусов!",
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
    <section id="AboutUs" className={scss.Main}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.head}>
            <Image width={40} height={40} src={welcomeLogoLeft} alt="Logo" />
            <h2>{translate("aboutUs")}</h2>
          </div>

          <div className={scss.top}>
            <div className="container_for_about_journey">
              <h1>{translate("journeyText")}</h1>
            </div>
            <div className="container_for_description_about">
              <p>{translate("description")}</p>
            </div>
          </div>
          <div className={scss.bottom}>
            <Image
              src={about_img1}
              alt="About Image 1"
              width={700}
              height={500}
              quality={90}
            />
            <Image
              src={about_img2}
              alt="About Image 2"
              width={700}
              height={500}
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
