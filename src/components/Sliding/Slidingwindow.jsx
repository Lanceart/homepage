'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import Image from "next/image";
// import './SlidingImages.css'; // 包含样式的 CSS 文件

const SlidingImages = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? data.image.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === data.image.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <button className={styles.leftbutton} onClick={goToPrevious}>{"<"}</button>
      <div>
      <div className={styles.imgContainer}>
            <Image
                className={styles.img}
                fill={true}
                src={data.image[currentIndex]}
                alt=""
            />
        </div>
        
      </div>
      <button className={styles.rightbutton} onClick={goToNext}>{">"}</button>
    </>
  );
};

export default SlidingImages;
