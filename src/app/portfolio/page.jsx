import React from 'react';
import styles from "./page.module.css";

import Button from "@/components/Button/Button";
// import { headers } from "next/headers";

// import { items } from "@/../public/portfolio/data.js";
import { notFound } from "next/navigation";
import SlidingImages from '@/components/Sliding/Slidingwindow';
export const metadata = {
  title: "Cyan Contact Information",
  description: "This is Contact Page",
};

async function getData() {
  // const host = headers().get("host");
  // console.log(host);
  const res = await fetch("https://homepage-related.s3.us-west-1.amazonaws.com/data.json", {//http:jsonplaceholder.typicode.com/posts
    cache: "no-store",
  });
  // console.log("shit",res);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Category = async({ params }) => {
    const data = await getData();
    // const data = rawdata.application;
    // console.log(data);
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Not Just Another Portfolio: </h1><h1>A Collection of My Favored Creations which I Cherished and Polished with Love.</h1>
        {/* <h1 className={styles.catTitle}>{params.category}</h1> */}
        
        {data.map((item) => (
          <div className={styles.item} key={item.id}>

            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
              {/* <Button text="See More" url={`/blog/${item._id}`} /> */}
              <Button url={item.link} text="KNOW &nbsp;   MORE ~" />
            </div>
            <div className={styles.imgContainer}>
                <SlidingImages data={item}/>
             </div>
          </div>
        ))}
      </div>
    );
  };


export default Category;









