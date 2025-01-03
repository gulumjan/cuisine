"use client";
import { categories, menus } from "@/datas/categories";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import scss from "./Menu.module.scss";

type MenuItem = {
  name: string;
  price: string;
  composition?: string;
  extras?: { name: string; price: string }[];
  drinks?: { name: string; price: string }[];
  url: string;
};

type MenuType = keyof typeof menus;

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuType>(
    categories[0].name as MenuType
  );
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const selectedItemRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false});

  const handleCategory = useCallback(
    (categoryName: MenuType) => {
      if (!selectedItem) {
        setSelectedCategory(categoryName);
        setSelectedItem(null);
      }
    },
    [selectedItem]
  );

  const handleItemClick = useCallback(
    (item: MenuItem) => {
      if (!selectedItem) {
        setSelectedItem(item);
        window.scrollTo(0, 0);
      }
    },
    [selectedItem]
  );

  const handleCloseSelectedItem = () => setSelectedItem(null);

  useEffect(() => {
    const toggleScroll = (disableScroll: boolean) => {
      if (window.innerWidth <= 430) {
        document.body.classList.toggle("no-scroll", disableScroll);
      }
    };

  
    toggleScroll(Boolean(selectedItem));


    return () => document.body.classList.remove("no-scroll");
  }, [selectedItem]);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectedItemRef.current &&
        !selectedItemRef.current.contains(event.target as Node)
      ) {
        setSelectedItem(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="menu"
      className={scss.Menu}
    >
      <div className="container">
        <div className={scss.content}>
          <div className={scss.categoryMobile}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={scss.categories}
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 1, x: -100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: category.id * 0.1,
                    duration: 0.5,
                  }}
                  onClick={() => handleCategory(category.name as MenuType)}
                  className={`${scss.categorybutton} ${
                    selectedCategory === category.name ? scss.active : ""
                  }`}
                  aria-label={`Select ${category.name} category`}
                >
                  {category.name}
                </motion.button>
              ))}
            </motion.div>
          </div>
          <motion.div
            ref={selectedItemRef}
            key={selectedCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={scss.menuitems}
          >
      
            {selectedItem && (
              <motion.div
                className={scss.selectedItem}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <button
                  className={scss.closeButton}
                  onClick={handleCloseSelectedItem}
                  aria-label="Close selected item"
                >
                  <h1>
                    <IoCloseCircleOutline />
                  </h1>
                </button>
                <div className={scss.leftItems}>
                  <Image
                    width={329}
                    height={187}
                    src={selectedItem.url}
                    alt={selectedItem.name}
                  />
                  <div className={scss.notTogether}>
                    <div className={scss.together}>
                      <h2>{selectedItem.name}</h2>
                      <p>{selectedItem.composition}</p>
                    </div>
                    <h3>{selectedItem.price}</h3>
                  </div>
                </div>
                <div className={scss.rightItems}>
                  <h4>Extras:</h4>
                  <ul>
                    {selectedItem.extras?.map((extra, index) => (
                      <li key={index}>
                        <span>{extra.name}</span>
                        <span>{extra.price}</span>
                      </li>
                    ))}
                  </ul>
                  <h4 style={{ marginTop: "30px" }}>Drinks:</h4>
                  <ul>
                    {selectedItem.drinks?.map((drink, index) => (
                      <li key={index}>
                        <span>{drink.name}</span>
                        <span>{drink.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
            
            <motion.ul
              className={scss.alls}
              initial={{ y: 0 }}
              animate={{ y: selectedItem ? 50 : 0 }} 
              transition={{ duration: 0.5 }}
            >
              {menus[selectedCategory]
                ?.filter((item) => item !== selectedItem) 
                .map((item, index) => (
                  <motion.li
                    key={index}
                    className={scss.menuItem}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                    }}
                    style={{
                      cursor: selectedItem ? "auto" : "pointer",
                    }}
                    onClick={() => handleItemClick(item)}
                  >
                    <div className={scss.menuItemHeader}>
                      <Image
                        width={329}
                        height={187}
                        src={item.url}
                        alt={item.name}
                      />
                      <div className={scss.notTogether}>
                        <div className={scss.together}>
                          <h2>{item.name}</h2>
                          <p>{item.composition}</p>
                        </div>
                        <h3>{item.price}</h3>
                      </div>
                    </div>
                  </motion.li>
                ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Menu;
