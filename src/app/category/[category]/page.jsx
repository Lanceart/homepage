import React from "react";
import { headers } from "next/headers";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Link from "next/link";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

async function getDatas(category) {
  const host = headers().get("host");
  // console.log(host);
  const res = await fetch(`http://${host}`+`/api/catelog?tag=${category}`, {//http:jsonplaceholder.typicode.com/posts
    cache: "no-store",
  });
  // console.log(res);
  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }

  return res.json();
}

const getData = (cat) => {

  
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = async({ params }) => {
  const data = await getDatas(params.category);
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <>
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
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
        <hr className={styles.articleSeparator} />
        </>
      ))}
    </div>
  );
};

export default Category;
