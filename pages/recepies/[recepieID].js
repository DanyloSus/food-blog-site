import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";

import classes from "@/styles/recepies/recepie.module.css";

const RecepiePage = () => {
  const router = useRouter();

  return (
    <div className={classes.Recepie}>
      <Image src="/logo.png" alt="logo" width={768} height={300} />
      <h1 className={classes.Recepie__Header}>{router.query.recepieID}</h1>
      <p>
        Aliquip elit esse occaecat enim nulla excepteur labore exercitation aute
        irure elit. In ex deserunt ad qui ad et veniam cupidatat proident.
        Dolore dolore ut consectetur consectetur est nostrud sunt aliquip cillum
        elit fugiat reprehenderit pariatur excepteur. Esse aute culpa sunt nisi
        qui sunt mollit esse ut officia irure tempor. Ullamco tempor
        reprehenderit velit eiusmod excepteur laborum nostrud sint irure amet.
        Esse laborum non non nulla reprehenderit nulla minim anim Lorem veniam.
        Pariatur consequat nulla amet duis ea voluptate ad amet ullamco non
        aliqua ipsum. Esse pariatur aute est duis elit esse et. Mollit dolor
        consequat quis commodo eiusmod adipisicing ex exercitation aute. In
        ullamco in sit esse occaecat deserunt ad laborum elit aliqua. Elit enim
        incididunt cupidatat officia tempor irure irure ullamco non laboris esse
        aliqua deserunt. Eu veniam culpa nostrud dolor veniam dolore incididunt
        proident labore tempor occaecat. Aliqua ut deserunt sit non labore.
        Ipsum proident minim duis id sint in elit ad fugiat sit voluptate enim
        do. Aliqua sint dolore nulla aliqua aliquip laborum veniam eu quis
        tempor. Sint labore labore aliqua commodo irure elit irure excepteur
        anim occaecat consequat. Do deserunt minim adipisicing sint eu sint
        mollit cillum sit cillum pariatur ea. Fugiat ex est proident id laboris
        elit enim id officia. Ut minim non deserunt id voluptate magna duis
        velit. Nulla amet consectetur duis sit cillum qui eu Lorem. Ex non anim
        ea anim.
      </p>
    </div>
  );
};

export default RecepiePage;
