"use client";
import React, { useState } from "react";
import "./BurgerMenu.css";
import Link from "next/link";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`burger-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link href="/trade">
              <p onClick={scrollToTop}>Interior</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p onClick={scrollToTop}>About Us</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p onClick={scrollToTop}>Menu</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p onClick={scrollToTop}>Contact</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default BurgerMenu;
