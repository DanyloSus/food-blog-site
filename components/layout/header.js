import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

import classes from "./header.module.css";

const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;
  console.log(pathname);

  return (
    <header className={classes.Header}>
      <Link
        href="/"
        className={
          (pathname === "/"
            ? classes.Header__NavigationBlock__Link_Active
            : "") +
          " " +
          classes.Header__LogoBlock
        }
      >
        <Image src="/logo.png" alt="logo" width={75} height={75} />
        <p>Savor the Moments🍽️</p>
      </Link>
      <nav className={classes.Header__NavigationBlock}>
        <Link
          href="/recepies"
          className={
            pathname.includes("recepies")
              ? classes.Header__NavigationBlock__Link_Active
              : ""
          }
        >
          Recepies
        </Link>
        <Link
          href="/contact"
          className={
            pathname.includes("contact")
              ? classes.Header__NavigationBlock__Link_Active
              : ""
          }
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
