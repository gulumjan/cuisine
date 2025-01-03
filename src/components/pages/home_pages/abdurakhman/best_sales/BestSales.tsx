"use client";

import React, { useState } from "react";
import scss from "./BestSales.module.scss";
import Image from "next/image";
import bestSalesImg1 from "../../../../../assets/abdurakhman_proj_images/best sales img1.svg";
import bestSalesImg2 from "../../../../../assets/abdurakhman_proj_images/best sales img2.svg";
import bestSalesArrowRight from "../../../../../assets/abdurakhman_proj_images/best sales arrow.svg";
import welcomeLogoLeft from "../../../../../assets/abdurakhman_logos/restoranlogos2.svg";
import { useLanguageStore } from "@/store/UseLanguageStore";

const images = [
  {
    src: bestSalesImg1,
    alt: "Chef preparing gourmet dish",
  },
  {
    src: bestSalesImg2,
    alt: "Chef garnishing plate",
  },
  {
    src: bestSalesImg1,
    alt: "Chef preparing gourmet dish",
  },
  {
    src: bestSalesImg2,
    alt: "Chef garnishing plate",
  },
];

const BestSales = () => {
  const { language } = useLanguageStore();
  const [currentSlide, setCurrentSlide] = useState(0);

  const translate = (key: string) => {
    const translations = {
      en: {
        bestSellers: "Best Sellers",
        title: "You Only Reserve\nException",
        description:
          "Each location has a menu that’s curated just for them. See what’s new at your Cafesio, and you’ll find Cafesio Covent Garden moments.",
      },
      ru: {
        bestSellers: "Лучшие продажи",
        title: "Вы только резервируете\nИсключение",
        description:
          "Каждое место имеет меню, которое специально для него. Посмотрите, что нового в вашем Cafesio, и вы найдете моменты Cafesio Covent Garden.",
      },
    };

    return (
      translations[language as keyof typeof translations][
        key as keyof (typeof translations)["en"]
      ] || key
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={scss.main}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.head}>
            <Image width={41} height={41} src={welcomeLogoLeft} alt="" />
            <span className={scss.label}>{translate("bestSellers")}</span>
          </div>
          <div className="container_for_about_journey">
            <h1 className={scss.title}>{translate("title")}</h1>
          </div>
          <p className={scss.description}>{translate("description")}</p>
        </div>

        <div className={scss.imageGallery}>
          <div className={scss.sliderContainer}>
            <div
              className={scss.sliderTrack}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className={scss.imageWrapper}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={400}
                    className={scss.image}
                  />
                </div>
              ))}
            </div>
            <button
              className={scss.nextButton}
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <Image
                src={bestSalesArrowRight}
                alt="Next slide"
                width={34}
                height={34}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSales;
