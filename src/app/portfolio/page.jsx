import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/life" className={styles.item}>
          <span className={styles.title}>Life</span>
        </Link>
        <Link href="/portfolio/cs" className={styles.item}>
          <span className={styles.title}>Development</span>
        </Link>
        <Link href="/portfolio/poetry" className={styles.item}>
          <span className={styles.title}>Poetry</span>
        </Link>
        {/* <Link href="/portfolio/application" className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
        <Link href="/portfolio/application" className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
        <Link href="/portfolio/application" className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
         */}
      </div>
    </div>
  );
};

export default Portfolio;
