"use client";
import { FC, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import scss from "./Contact.module.scss";
import leftIcon from "@/assets/Frame 10.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

// Fix default Leaflet icons using explicit URLs
L.Marker.prototype.options.icon = L.icon({
  iconUrl: "/leaflet/marker-icon.png", // Update the path
  shadowUrl: "/leaflet/marker-shadow.png", // Update the path
});

const Contact: FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView([42.8746, 74.5698], 13); // Coordinates for Bishkek

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([42.8746, 74.5698]).addTo(map).bindPopup("Welcome to Bishkek!");

    return () => {
      map.remove();
    };
  }, []);

  return (
    <section className={scss.Contact}>
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
              <div className={scss.cart} ref={mapRef} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
