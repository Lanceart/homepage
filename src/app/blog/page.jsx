
import { headers } from "next/headers";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
async function getData() {
    const host = headers().get("host");
    const res = await fetch(`http://${host}`+"/api/posts", {
      cache: "force-cache",
    });
  
    return res.json();
  }

  
const Blog = async() => {
    
    const data  = await getData();
    return(
        <div className={styles.mainContainer}>
      {data.map((item) => (
        <>
        {item.externalArticle ? (
  <a
    href={item.content}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.container}
    key={item._id}
  >
    <div className={styles.imageContainer}>
      <Image
        src={item.img}
        alt=""
        width={400}
        height={250}
        className={styles.image}
      />
    </div>
    <div className={styles.content}>
      <h1 className={styles.title}>{item.title}</h1>
      <p className={styles.desc}>{item.desc}</p>
    </div>
  </a>
) : (
  <Link
    href={`/blog/${item._id}`}
    className={styles.container}
    key={item._id}
  >
    <div className={styles.imageContainer}>
      <Image
        src={item.img}
        alt=""
        width={400}
        height={250}
        className={styles.image}
      />
    </div>
    <div className={styles.content}>
      <h1 className={styles.title}>{item.title}</h1>
      <p className={styles.desc}>{item.desc}</p>
    </div>
  </Link>
)}

        <hr className={styles.articleSeparator} />
        </>
      ))}
    </div>
    );
};

export default Blog;