"use client";

import React from 'react';
import scss from "./WelcomePage.module.scss";
import welcomeLogoRight from "../../../../../assets/abdurakhman_logos/restoranlogos1.svg";
import welcomeLogoLeft from "../../../../../assets/abdurakhman_logos/restoranlogos2.svg";
import Image from "next/image";
import point from "../../../../../assets/abdurakhman_logos/restoran icon point.svg";
import phone from "../../../../../assets/abdurakhman_logos/restoran icon phone.svg";
import { useLanguageStore } from "@/store/useLanguageStore"; 

const WelcomePage = () => {
  const { language } = useLanguageStore(); 

  const translate = (key: string) => {
    const translations = {
      en: {
        delicious: 'Delicious',
        italianCuisine: 'Italian Cuisine',
        placeDescription: 'Classic steak & delicious with delightfully unexpected twists. The Restaurant\'s sunny decor was inspired by the diners.',
        reserveTable: 'RESERVE YOUR TABLE',
        location: 'Location',
        locationDescription: '1200-275, Portugal',
        hotline: 'Hotline',
        phoneNumber: '+771219900',
      },
      ru: {
        delicious: 'Вкусно',
        italianCuisine: 'Итальянская кухня',
        placeDescription: 'Классический стейк с неожиданными и вкусными поворотами. Солнечный декор ресторана был вдохновлен столовыми.',
        reserveTable: 'ЗАБРОНИРУЙТЕ СТОЛИК',
        location: 'Местоположение',
        locationDescription: '1200-275, Португалия',
        hotline: 'Горячая линия',
        phoneNumber: '+771219900',
      },
    };

    return translations[language as keyof typeof translations][key as keyof typeof translations['en']] || key;
  };

  return (
    <section className={scss.Main}>
      <div className={scss.background_photo}></div>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.WelcomPage}>
            <div className={scss.block1}>
              <div className={scss.left}>
                <Image width={41} height={41} src={welcomeLogoLeft} alt="" />
              </div>
              <div className={scss.center}>
                <p>{translate('delicious')}</p> 
              </div>
              <div className={scss.right}>
                <Image width={41} height={41} src={welcomeLogoRight} alt="" />
              </div>
            </div>

            <div className={scss.place_name}>
              <h1>{translate('italianCuisine')}</h1> 
            </div>

            <div className={scss.place_desc}>
              <div className="container_for_description">
                <p>{translate('placeDescription')}</p> 
              </div>
            </div>

            <div className={scss.block2}>
              <div className={scss.top}></div>
              <button>{translate('reserveTable')}</button> 
              <div className={scss.bottom}></div>
            </div>
          </div>
        </div>

        <div className={scss.Welcome_bottom}>
          <div className={scss.bottom_left}>
            <h4>{translate('location')}</h4> 
            <div className={scss.box_div}></div>
            <Image width={20} height={20} src={point} alt="" />
            <span>{translate('locationDescription')}</span> 
          </div>

          <div className={scss.bottom_right}>
            <h4>{translate('hotline')}</h4> 
            <div className={scss.box_div}></div>
            <Image width={20} height={20} src={phone} alt="" />
            <span>{translate('phoneNumber')}</span> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomePage;
