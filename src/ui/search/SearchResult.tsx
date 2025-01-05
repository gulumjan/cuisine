"use client";
import { useEffect, useState } from "react";
import { menus } from "@/datas/categories";
import Image from "next/image";
import styles from "./SearchResult.module.scss";
import { useParams } from "next/navigation";
import SearchBar from "./Search";

type MenuItem = {
  name: string;
  price: string;
  composition?: string;
  extras?: { name: string; price: string }[];
  drinks?: { name: string; price: string }[];
  url: string;
  image?: string;
  description?: string;
};

const SearchResult = () => {
  const { query } = useParams();
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    if (query) {
      const searchQuery = query.toString().toLowerCase();
      const filtered = Object.values(menus)
        .flat()
        .filter((item) => item.name.toLowerCase().includes(searchQuery));
      setFilteredItems(filtered);
    } else {
      setFilteredItems(Object.values(menus).flat());
    }
  }, [query]);

  return (
    <section className={styles.SearchResult}>
      <div className="container">
        <h1>Search Results for </h1>
        <div className={styles.search}>
          <SearchBar />
        </div>
        <div className={styles.foodList}>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => (
              <div className={styles.foodCard} key={idx}>
                {item.url && (
                  <Image
                    src={item.url}
                    width={200}
                    height={180}
                    alt={item.name}
                    className={styles.foodImage}
                  />
                )}
                <div className={styles.foodInfo}>
                  <p className={styles.foodName}>{item.name}</p>
                  <p className={styles.foodDescription}>{item.composition}</p>
                  <p className={styles.foodPrice}>{item.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className={styles.noResults}>No results found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
