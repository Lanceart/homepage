"use client";

import React, { useState, useEffect } from "react";
import { FixedSizeList as List } from "react-window";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function BlogClient({ data }) {
  const [visibleData, setVisibleData] = useState([]);

  useEffect(() => {
    // 模拟分批渲染，避免初始化卡顿
    let batchSize = 5;
    let index = 0;

    function loadBatch() {
      setVisibleData(prev => [...prev, ...data.slice(index, index + batchSize)]);
      index += batchSize;
      if (index < data.length) {
        setTimeout(loadBatch, 50); // 每 50ms 加载下一批
      }
    }
    loadBatch();
  }, [data]);

  const Row = ({ index, style }) => {
    const item = visibleData[index];
    if (!item) {
      return <div style={style}>Loading...</div>;
    }
    return (
      <div style={style}>
        {item.externalArticle ? (
          <a href={item.content} target="_blank" rel="noopener noreferrer" className={styles.container}>
            <div className={styles.imageContainer}>
              <Image src={item.img} alt="" width={400} height={250} className={styles.image} loading="lazy" />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </a>
        ) : (
          <Link href={`/blog/${item._id}`} className={styles.container}>
            <div className={styles.imageContainer}>
              <Image src={item.img} alt="" width={400} height={250} className={styles.image} loading="lazy" />
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
      <List
        height={800}
        itemCount={visibleData.length}
        itemSize={320}
        width="100%"
      >
        {Row}
      </List>
    </div>
  );
}
