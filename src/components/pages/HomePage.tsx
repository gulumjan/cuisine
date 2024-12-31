import React from "react";
import WelcomePage from "./home_pages/abdurakhman/WelcomePage/WelcomePage";
import About from "./home_pages/abdurakhman/about/About";
import BestSales from "./home_pages/abdurakhman/best_sales/BestSales";
import MainMenu from "./home_pages/gulumjan/main_menu/MainMenu";
import ModernInterior from "./home_pages/gulumjan/modern_interior/ModernInterior";
import Contact from "./home_pages/gulumjan/contact/Contact";

const HomePage = () => {
  return <> 
  <WelcomePage/>
  <About/>
  <BestSales/>
  <MainMenu/>
  <ModernInterior/>
  <Contact/>
  </>;
};

export default HomePage;