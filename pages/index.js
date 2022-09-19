// import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import CalendarContainer from "../components/CalendarContainer";

export default function Home() {
  // const [value, onChange] = useState(new Date());

  // const arrayDates = [
  //   "2022-09-28T22:00:00.000Z",
  //   "2022-10-01T22:00:00.000Z",
  //   "2022-10-18T22:00:00.000Z",
  //   "2022-11-05T23:00:00.000Z",
  // ];

  // const selectDate = () => {
  //   arrayDates.push(value.toISOString());
  //   console.log(arrayDates);
  //   console.log(value);
  // };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <CalendarContainer
        // arrayDates={arrayDates}
        // selectDate={selectDate}
        // value={value}
        // onChange={onChange}
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
