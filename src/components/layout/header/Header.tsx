import { FC } from "react";
import scss from "./Header.module.scss";

const Header: FC = () => {
  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <h1>Restaurant</h1>
          </div>

          <div className={scss.nav}>
            <ul>
              <li>Interior</li>
              <li>About Us</li>
              <li>Menu</li>
              <li>Contact</li>
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
    </section>
  );
};

export default Header;