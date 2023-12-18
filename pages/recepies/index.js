import React from "react";

import classes from "@/styles/recepies/list-of-recepies.module.css";
import Image from "next/image";
import Link from "next/link";

const ListOfRecepies = () => {
  let sus = [];

  for (let i = 0; i < 8; i++) {
    sus.push(
      <div className={classes.ListPage__Card}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={365}
          height={365}
          className={classes.ListPage__Card__Image}
        />
        <h2 className={classes.ListPage__Card__Header}>Sussy</h2>
        <p className={classes.ListPage__Card__Paragraph}>
          Some Text Some Text Some Text Some Text Some Text Some Text Some Text
          Some Text Some Text Some Text Some Text
        </p>
        <Link href={`/recepies/${i}`}>
          <button className={classes.ListPage__Card__Button}>Explore</button>
        </Link>
      </div>
    );
  }

  return (
    <div className={classes.ListPage}>
      <h1 className={classes.ListPage__Header}>List Of Site Recepies</h1>
      <p>
        Here, you'll find a curated collection of mouthwatering recipes that
        span the culinary spectrum. From delectable appetizers to satisfying
        main courses, indulgent desserts to refreshing beverages, our recipe
        archive is a culinary journey waiting to be explored. Each recipe is
        thoughtfully crafted, accompanied by clear instructions, and adorned
        with vibrant visuals to inspire and guide you in the kitchen. Whether
        you're a seasoned chef or a kitchen novice, there's something for
        everyone on this page. Dive in, discover new flavors, and embark on a
        delicious adventure with our tried-and-true recipes that are sure to
        elevate your home-cooking game. Happy cooking!
      </p>
      <div className={classes.ListPage__Content}>{sus}</div>
    </div>
  );
};

export default ListOfRecepies;
