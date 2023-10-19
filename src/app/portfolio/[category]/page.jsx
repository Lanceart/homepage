import React from "react";
import { headers } from "next/headers";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
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
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url={`/blog/${item._id}`} />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.img}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
