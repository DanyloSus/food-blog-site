import React from "react";

import classes from "@/styles/home-page.module.css";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className={classes.HomePage}>
      <h1 className={classes.HomePage__Header}>
        Welcome to Food Blog WebSite - Your Culinary Journey Begins Here
      </h1>
      <div className={classes.HomePage__Content}>
        <Image src="/logo.png" alt="logo" width={300} height={300} />
        <div>
          <p>🍽️ Indulge in a World of Flavor and Culinary Delights 🌮🍰</p>
          <p>
            Embark on a gastronomic adventure with [Your Website/Blog Name]. We
            invite you to explore a diverse tapestry of flavors, recipes, and
            culinary inspiration that will tantalize your taste buds and elevate
            your dining experience. Whether you're a seasoned chef, a passionate
            home cook, or someone just beginning to explore the world of food,
            our platform is designed to be your go-to resource for all things
            delicious.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
