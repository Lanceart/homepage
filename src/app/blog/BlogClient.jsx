"use client";

import React from "react";
import { FixedSizeList as List } from "react-window";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function BlogClient({ data }) {
  const Row = ({ index, style }) => {
    const item = data[index];
    return (
      <div style={style}>
        {item.externalArticle ? (
          <a href={item.content} target="_blank" rel="noopener noreferrer" className={styles.container}>
            <div className={styles.imageContainer}>
              <Image src={item.img} alt="" width={400} height={250} className={styles.image} />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </a>
        ) : (
          <Link href={`/blog/${item._id}`} className={styles.container}>
            <div className={styles.imageContainer}>
              <Image src={item.img} alt="" width={400} height={250} className={styles.image} />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </Link>
        )}
        <hr className={styles.articleSeparator} />
      </div>
    );
  };

  return (
    <div className={styles.mainContainer}>
      <List height={800} itemCount={data.length} itemSize={320} width="100%">
        {Row}
      </List>
    </div>
  );
}
