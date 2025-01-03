import { FC } from "react";
import scss from "./Footer.module.scss";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer: FC = () => {
  return (
    <section className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.navs}>
            <h1>Restaurant</h1>
            <nav>
              <Link href="#Interior">Interior</Link>
              <Link href="#AboutUs">About Us</Link>
              <Link href="menu">Menu</Link>
              <Link href="#Contact">Contacts</Link>
            </nav>
          </div>
          <div className={scss.icons}>
            <FaTelegramPlane className={scss.ico} />
            <FaSquareInstagram className={scss.ico} />
          </div>
        </div>
        <div className={scss.linear}></div>
        <h6>c 2023 Motion Study LLC</h6>
      </div>
    </section>
  );
};

export default Footer;
