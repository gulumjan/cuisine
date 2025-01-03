"use client";
import { FC } from "react";
import scss from "./Contact.module.scss";
import leftIcon from "@/assets/Frame 10.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Contact: FC = () => {
  return (
    <section id="Contact" className={scss.Contact}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.contentText}>
            <div className={scss.main}>
              <Image width={51} height={14} src={leftIcon} alt="photo" />
              <h1>Visit Restaurant</h1>
            </div>
            <h3>
              Join Us for <br /> Happy Hours
            </h3>
            <div className={scss.same}>
              <h4>Your neighborhood</h4>
              <p>
                225$. Lake Ave. Suite 1150 <br /> Bishkek, Kyrgyzstan
              </p>
            </div>
            <div className={scss.same}>
              <h4>Opening hours:</h4>
              <p>Mon-Thu: 10:00 am - 01:00 am</p>
              <p>Fri-Sun: 10:00 am - 02:00 am</p>
            </div>
            <div className={scss.btn}>
              <hr />
              <button className={scss.formContact}>
                PURCHASE GIFT CARD <FaArrowRight />
              </button>
              <hr />
            </div>
          </div>
          <div className={scss.contentBlock}>
            <div className={scss.contentBlockText}>
              <h4>Contact Info</h4>
              <div className={scss.logo}>
                <PiPhoneCallFill className={scss.ico} />
                <p>+996 312 123456</p>
              </div>
              <div className={scss.logo}>
                <IoMailUnreadOutline className={scss.ico} />
                <p>contact@bishkek.example</p>
              </div>
              <div className={scss.icons}>
                <FaTelegramPlane className={scss.ico} />
                <FaSquareInstagram className={scss.ico} />
              </div>
            </div>
            <div className={scss.map}>
              <iframe
                className={scss.cart}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.670015518168!2d74.58255517561444!3d42.87980860210807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9ba3daadfbb%3A0x4e7a5fa037f5fd93!2sMotion%20Web%20IT%20academy!5e0!3m2!1sru!2skg!4v1735896783412!5m2!1sru!2skg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
