"use client";
import { FC } from "react";
import scss from "./SearchMain.module.scss";
import { menuItems } from "@/datas/categories";
import Image from "next/image";

const SearchMain: FC = () => {
  return (
    <section className={scss.SearchMain}>
      <div className="container">
        <div className={scss.content}>
          <h1>Foods</h1>

          <div className={scss.foodList}>
            {menuItems["Cold Drinks"] &&
              menuItems["Cold Drinks"].map((el, idx) => (
                <div className={scss.foodCard} key={idx}>
                  <Image
                    src={el.image}
                    width={200}
                    height={180}
                    alt={el.name}
                  />
                  <div className={scss.foodInfo}>
                    <p className={scss.foodName}>{el.name}</p>
                    <p className={scss.foodPrice}>{el.price}</p>
                  </div>
                  <p className={scss.foodDescription}>{el.description}</p>
                </div>
              ))}
            {menuItems["Hot Drinks"] &&
              menuItems["Hot Drinks"].map((el, idx) => (
                <div className={scss.foodCard} key={idx}>
                  <Image
                    src={el.image}
                    width={200}
                    height={180}
                    alt={el.name}
                  />
                  <div className={scss.foodInfo}>
                    <p className={scss.foodName}>{el.name}</p>
                    <p className={scss.foodPrice}>{el.price}</p>
                  </div>
                  <p className={scss.foodDescription}>{el.description}</p>
                </div>
              ))}
            {menuItems["Fast Foods"] &&
              menuItems["Fast Foods"].map((el, idx) => (
                <div className={scss.foodCard} key={idx}>
                  <Image
                    src={el.image}
                    width={200}
                    height={180}
                    alt={el.name}
                  />
                  <div className={scss.foodInfo}>
                    <p className={scss.foodName}>{el.name}</p>
                    <p className={scss.foodPrice}>{el.price}</p>
                  </div>
                  <p className={scss.foodDescription}>{el.description}</p>
                </div>
              ))}
            {menuItems["Eastern Cuisine"] &&
              menuItems["Eastern Cuisine"].map((el, idx) => (
                <div className={scss.foodCard} key={idx}>
                  <Image
                    src={el.image}
                    width={200}
                    height={180}
                    alt={el.name}
                  />
                  <div className={scss.foodInfo}>
                    <p className={scss.foodName}>{el.name}</p>
                    <p className={scss.foodPrice}>{el.price}</p>
                  </div>
                  <p className={scss.foodDescription}>{el.description}</p>
                </div>
              ))}
            {menuItems["National Food"] &&
              menuItems["National Food"].map((el, idx) => (
                <div className={scss.foodCard} key={idx}>
                  <Image
                    src={el.image}
                    width={200}
                    height={180}
                    alt={el.name}
                  />
                  <div className={scss.foodInfo}>
                    <p className={scss.foodName}>{el.name}</p>
                    <p className={scss.foodPrice}>{el.price}</p>
                  </div>
                  <p className={scss.foodDescription}>{el.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchMain;
