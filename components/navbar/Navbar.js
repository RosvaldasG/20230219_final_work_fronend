import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = ({ text }) => {
  // const tttt = () => {
  //   console.log("Hit");
  //   window.open("/register/", "", "width=300,height=300");
  // };
  return (
    <div className={styles.main}>
      <div className={styles.conatiner}>
        <Link className={styles.links} href="/register/">
          REGISTER
        </Link>

        <div className={styles.title}>{text}</div>
        <Link className={styles.links} href="/login/">
          LOGIN
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
