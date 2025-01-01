import React from 'react'
import scss from "./About.module.scss";
import welcomeLogoLeft from "../../../../../assets/abdurakhman_logos/restoranlogos2.svg";
import Image from "next/image";
import about_img1 from "../../../../../assets/abdurakhman_proj_images/restoran img1.svg";
import about_img2 from "../../../../../assets/abdurakhman_proj_images/restoran img2.svg";

const About = () => {
  return (
    <section className={scss.Main}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.head}>
            <Image width={40} height={40} src={welcomeLogoLeft} alt="" />
            <h2>About Us</h2>
          </div>

          <div className={scss.top}>
            <h1>
              A Journey Throught <br /> Cafesio Flavors
            </h1>
            <div className="container_for_description_about">
              <p>
                Try dishes that will open up new tastes for you and delight your
                eyes with their appearance. Here you will find a cozy
                atmosphere, excellent service and attention to each guest. Book
                a table now and enjoy a unique experience of taste discovery!
              </p>
            </div>
          </div>
          <div className={scss.bottom}>
            <Image src={about_img1} alt='' width={700} height={500} quality={90} />
            <Image src={about_img2} alt='' width={700} height={500} quality={90} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;