import { FC } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";

const Header: FC = () => {
  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <Link href="/">
                <h1>Restaurant</h1>
            </Link>
          </div>

          <div className={scss.right}>
          <div className={scss.nav}>
            <ul>
              <Link href="#Interior">
              <li>Interior</li>
              </Link>
              <Link href="#AboutUs">
              <li>About Us</li>
              </Link>
              <Link href="/menu">
                  <li>Menu</li>
              </Link>
              <Link href='#Contact'>
              <li>Contact</li>
              </Link>
            </ul>
          </div>

          <div className={scss.active_block}>
            <div className={scss.search}>
              <input type="text" placeholder="Search"/>
            </div>
            <div className={scss.lng_switch}>
              <p>EN</p>
            </div>
          </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Header;