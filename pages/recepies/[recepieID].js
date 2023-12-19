import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import { getDataFromSQL } from "../api/recepies/listOfRecepies";

import classes from "@/styles/recepies/recepie.module.css";

const RecepiePage = ({ document }) => {
  const router = useRouter();

  return (
    <div className={classes.Recepie}>
      <Image
        src={document.imageURL}
        alt={document.name}
        width={768}
        height={300}
        className={classes.Recepie__Image}
      />
      <h1 className={classes.Recepie__Header}>{document.name}</h1>
      <p>{document.text}</p>
    </div>
  );
};

export default RecepiePage;

export async function getServerSideProps(context) {
  const documents = await getDataFromSQL();

  const document = documents.find(
    (document) => document.id === context.params.recepieID
  );

  if (!document) {
    return {
      notFound: true,
    };
  }

  const { _id, ...rest } = document;
  const serializableDocument = rest;

  return {
    props: {
      document: serializableDocument,
    },
  };
}
