import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Navbar = ({ text }) => {
  // const title = text;
  return (
    <div className={styles.main}>
      <Link className={styles.links} href="/register/">
        REGISTER
      </Link>
      <div className={styles.title}>{text}</div>
      <Link className={styles.links} href="/login/">
        LOGIN
      </Link>
    </div>
  );
};

export default Navbar;