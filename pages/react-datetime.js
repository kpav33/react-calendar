import React from "react";
import Link from "next/link";

import styles from "../styles/Datetime.module.css";
import "react-datetime/css/react-datetime.css";

import Datetime from "react-datetime";

export default function ReactDatetime() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "10px", margin: "20px 10px" }}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/clone">
          <a>Clone</a>
        </Link>
        <Link href="/react-datetime">
          <a>React-datetime</a>
        </Link>
      </nav>
      <div className={styles.center}>
        <Datetime />
      </div>
    </div>
  );
}
