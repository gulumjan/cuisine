"use client";
import { useEffect, useState } from "react";
import { menuItems } from "@/datas/categories";
import Image from "next/image";
import styles from "./SearchResult.module.scss";
import { useParams } from "next/navigation";

interface MenuItem {
  name: string;
  price: string;
  description: string;
  image: string;
}

const SearchResult = () => {
  const { query } = useParams();
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    if (query) {
      const searchQuery = query.toString().toLowerCase();
      const filtered = Object.values(menuItems)
        .flat()
        .filter((item) => item.name.toLowerCase().includes(searchQuery));

      setFilteredItems(filtered);
    }
  }, [query]);

  return (
    <section className={styles.SearchResult}>
      <div className="container">
        <h1>Search Results for </h1>
        <div className={styles.resultList}>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => (
              <div className={styles.resultCard} key={idx}>
                <Image
                  src={item.image}
                  width={200}
                  height={180}
                  alt={item.name}
                  className={styles.foodImage}
                />
                <div className={styles.foodInfo}>
                  <p className={styles.foodName}>{item.name}</p>
                  <p className={styles.foodPrice}>{item.price}</p>
                </div>
                <p className={styles.foodDescription}>{item.description}</p>
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
