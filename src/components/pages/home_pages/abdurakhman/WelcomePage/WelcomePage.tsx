import React from 'react'
import scss from "./WelcomePage.module.scss"
import welcomeLogoRight from "../../../../../assets/abdurakhman_logos/restoranlogos1.svg";
import welcomeLogoLeft from "../../../../../assets/abdurakhman_logos/restoranlogos2.svg";
import Image from "next/image";
import point from "../../../../../assets/abdurakhman_logos/restoran icon point.svg"
import phone from "../../../../../assets/abdurakhman_logos/restoran icon phone.svg"

const WelcomePage = () => {
  return (
    <section className={scss.Main}>
      <div className={scss.background_photo}></div>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.WelcomPage}>
            <div className={scss.block1}>
              <div className={scss.left}>
                <Image width={40} height={40} src={welcomeLogoLeft} alt="" />
              </div>
              <div className={scss.center}>
                <p>Delicious</p>
              </div>
              <div className={scss.right}>
                <Image width={40} height={40} src={welcomeLogoRight} alt="" />
              </div>
            </div>

            <div className={scss.place_name}>
              <h1>Italian Cuisine</h1>
            </div>

            <div className={scss.place_desc}>
              <div className="container_for_description">
                <p>
                  Classic steak & delicious with delightfully unexpenced twists.
                  The Restaurant`s sunny decor was inspired by the diners
                </p>
              </div>
            </div>

            <div className={scss.block2}>
              <div className={scss.top}></div>
              <button>RESERVE YOUR TABLE</button>
              <div className={scss.bottom}></div>
            </div>
          </div>
        </div>



        <div className={scss.Welcome_bottom}>
          <div className={scss.bottom_left}>
            <h4>Location</h4>
            <div className={scss.box_div}></div>
            <Image width={20} height={20} src={point} alt="" />
            <span>1200-275,Portugal</span>
          </div>

          <div className={scss.bottom_right}>
          <h4>Hotline</h4>
            <div className={scss.box_div}></div>
            <Image width={20} height={20} src={phone} alt="" />
            <span>+771219900</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WelcomePage;