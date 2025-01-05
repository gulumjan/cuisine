"use client";
import { FC } from "react";
import scss from "./SearchMain.module.scss";
import { menus } from "@/datas/categories";
import Image from "next/image";
import SearchBar from "./Search";

const SearchMain: FC = () => {
  return (
    <section className={scss.SearchMain}>
      <div className="container">
        <div className={scss.content}>
          <h1>Foods</h1>

          <div className={scss.search}>
            <SearchBar />
          </div>
          <div className={scss.foodList}>
            {menus["Desserts"] &&
              menus["Desserts"].map((el, idx) => (
                <div className={scss.foodCard} key={idx}>
                  <Image src={el.url} width={200} height={180} alt={el.name} />
                  <div className={scss.foodInfo}>
                    <p className={scss.foodName}>{el.name}</p>
                    <p className={scss.foodDescription}>{el.composition}</p>
                    <p className={scss.foodPrice}>{el.price}</p>
                  </div>
                </div>
              ))}
            {menus["Cold Drinks"] &&
              menus["Cold Drinks"].map((el, idx) => (
                <div className={scss.foodCard} key={idx}>
                  <Image src={el.url} width={200} height={180} alt={el.name} />
                  <div className={scss.foodInfo}>
                    <p className={scss.foodName}>{el.name}</p>
                    <p className={scss.foodDescription}>{el.composition}</p>
                    <p className={scss.foodPrice}>{el.price}</p>
                  </div>
                </div>
              ))}
            {menus["Hot Drinks"] &&
              menus["Hot Drinks"].map((el, idx) => (
                <div className={scss.foodCard} key={idx}>
                  <Image src={el.url} width={200} height={180} alt={el.name} />
                  <div className={scss.foodInfo}>
                    <p className={scss.foodName}>{el.name}</p>
                    <p className={scss.foodDescription}>{el.composition}</p>
                    <p className={scss.foodPrice}>{el.price}</p>
                  </div>
                </div>
              ))}
            {menus["Fast Foods"] &&
              menus["Fast Foods"].map((el, idx) => (
                <div className={scss.foodCard} key={idx}>
                  <Image src={el.url} width={200} height={180} alt={el.name} />
                  <div className={scss.foodInfo}>
                    <p className={scss.foodName}>{el.name}</p>
                    <p className={scss.foodDescription}>{el.composition}</p>
                    <p className={scss.foodPrice}>{el.price}</p>
                  </div>
                </div>
              ))}
            {menus["Eastern Cuisine"] &&
              menus["Eastern Cuisine"].map((el, idx) => (
                <div className={scss.foodCard} key={idx}>
                  <Image src={el.url} width={200} height={180} alt={el.name} />
                  <div className={scss.foodInfo}>
                    <p className={scss.foodName}>{el.name}</p>
                    <p className={scss.foodDescription}>{el.composition}</p>
                    <p className={scss.foodPrice}>{el.price}</p>
                  </div>
                </div>
              ))}
            {menus["National Food"] &&
              menus["National Food"].map((el, idx) => (
                <div className={scss.foodCard} key={idx}>
                  <Image src={el.url} width={200} height={180} alt={el.name} />
                  <div className={scss.foodInfo}>
                    <p className={scss.foodName}>{el.name}</p>
                    <p className={scss.foodDescription}>{el.composition}</p>
                    <p className={scss.foodPrice}>{el.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchMain;
