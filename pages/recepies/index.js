import React from "react";
import { getDataFromSQL } from "@/pages/api/recepies/listOfRecepies";

import classes from "@/styles/recepies/list-of-recepies.module.css";
import Image from "next/image";
import Button from "@/components/button";

const ListOfRecepies = (props) => {
  const blogs = props.documents;

  console.log(blogs.length);

  let blogElement = [];

  for (let i = 0; i < blogs.length; i++) {
    blogElement.push(
      <div className={classes.ListPage__Card} key={blogs[i].id}>
        <Image
          src={
            blogs[i].imageURL[0] !== "/" && blogs[i].imageURL[0] !== "h"
              ? "/logo.png"
              : blogs[i].imageURL[1] === "/"
              ? "/logo.png"
              : blogs[i].imageURL
          }
          alt={blogs[i].name}
          width={365}
          height={365}
          className={classes.ListPage__Card__Image}
        />
        <h2 className={classes.ListPage__Card__Header}>{blogs[i].name}</h2>
        <p className={classes.ListPage__Card__Paragraph}>{blogs[i].text}</p>
        <Button href={`/recepies/${blogs[i].id}`} text="Explore" />
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
      <Button href="/recepies/create" text="Create Your recepie" right />
      <div className={classes.ListPage__Content}>
        {blogElement.length ? blogElement : <h2>Create Your First Recipe</h2>}
      </div>
    </div>
  );
};

export default ListOfRecepies;

export async function getStaticProps() {
  const documents = await getDataFromSQL();

  const serializableDocuments = documents.map(({ _id, ...rest }) => rest);

  return {
    props: {
      documents: serializableDocuments,
    },
    revalidate: 10,
  };
}
