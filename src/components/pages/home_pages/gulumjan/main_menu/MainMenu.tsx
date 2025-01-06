"use client";
import {
  default as leftIcon,
  default as rightIcon,
} from "@/assets/Frame 10.png";
import { categories, menuItems } from "@/datas/categories";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import scss from "./MainMenu.module.scss";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/store/UseLanguageStore";
import { IoCloseCircleOutline } from "react-icons/io5";

type MenuItem = {
  name: string;
  price: string;
  description: string;
};

type MenuItems = {
  Desserts: MenuItem[];
  "Hot Drinks": MenuItem[];
  "Cold Drinks": MenuItem[];
  "Fast Foods": MenuItem[];
  "National Food": MenuItem[];
  "Eastern Cuisine": MenuItem[];
};

const MainMenu = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<keyof MenuItems>(
    categories[0].name as keyof MenuItems
  );
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const selectedItemRef = useRef<HTMLDivElement>(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleCategoryClick = (categoryName: keyof MenuItems) => {
    if (selectedCategory !== categoryName) {
      setSelectedCategory(categoryName);
      setIsMenuVisible(true);
    }
  };

  const handleCloseSelectedItem = () => {
    setSelectedItem(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectedItemRef.current &&
        !selectedItemRef.current.contains(event.target as Node)
      ) {
        setSelectedItem(null);
        setIsMenuVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const language = useLanguageStore((state) => state.language) as "en" | "ru";

  useEffect(() => {
    console.log("Current language in About:", language);
  }, [language]);

  const translations = {
    en: {
      menu: "Main Menu",
      quality: "Exceptional Quality. Delightfully Delicious",
    },
    ru: {
      menu: "Главное Меню",
      quality: "Исключительное качество. Восхитительно вкусно",
    },
  };

  const translate = (key: keyof typeof translations.en) => {
    const lang = language as keyof typeof translations;
    return translations[lang]?.[key] || key;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setIsMenuVisible(false);
      } else {
        setIsMenuVisible(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={scss.menus}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className={scss.hero}
        >
          <Image width={51} height={14} src={leftIcon} alt="photo" />
          <h1>{translate("menu")}</h1>
          <Image width={51} height={14} src={rightIcon} alt="photo" />
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className={scss.heros}
        >
          <h2>{translate("quality")}</h2>
        </motion.div>

        <div className={scss.menucontainer}>
          {selectedItem && (
            <button
              className={scss.closeButton}
              onClick={handleCloseSelectedItem}
              aria-label="Close selected item"
            >
              <h1>
                <IoCloseCircleOutline />
              </h1>
            </button>
          )}

          <div className={scss.categoryMobile}>
            <div className={scss.hero}>
              <Image width={51} height={14} src={leftIcon} alt="photo" />
              <h1>Main Menu</h1>
              <Image width={51} height={14} src={rightIcon} alt="photo" />
            </div>
            <div className={scss.heros}>
              <h2>{translate("quality")}</h2>
            </div>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() =>
                  handleCategoryClick(category.name as keyof MenuItems)
                }
                className={`${scss.categorybutton} ${
                  selectedCategory === category.name ? scss.active : ""
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className={scss.categories}>
            {categories.map((category) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 11 } : {}}
                transition={{
                  delay: category.id * 0.1,
                  duration: 0.5,
                }}
                onClick={() =>
                  handleCategoryClick(category.name as keyof MenuItems)
                }
                className={`${scss.categorybutton} ${
                  selectedCategory === category.name ? scss.active : ""
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
          {/* // )} */}

          {isMenuVisible ? (
            <>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={scss.menuitems}
                >
                  <ul ref={ref}>
                    <button
                      className={scss.closeButton}
                      onClick={() => setIsMenuVisible(false)}
                      aria-label="Close selected item"
                    >
                      <IoCloseCircleOutline />
                    </button>
                    {menuItems[selectedCategory]?.map((item, index) => (
                      <motion.li
                        key={index}
                        className={scss.menuItem}
                        initial={{ opacity: 0, y: 15 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.5,
                        }}
                      >
                        <div className={scss.menuItemHeader}>
                          <h2>{item.name}</h2>
                          <div className={scss.dotLeader}></div>
                          <span>{item.price}</span>
                        </div>
                        <p>{item.description}</p>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            <></>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className={scss.btn}>
            <hr />
            <button
              onClick={() => router.push(`/menu`)}
              className={scss.formContact}
            >
              View Full Menu <FaArrowRight />
            </button>
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainMenu;
