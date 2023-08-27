import React from "react";
import styles from "./page.module.css"
import Image from "next/image";
const Footer = () =>{
    return(
        <div className={styles.container}>
            <div>©2023 Cyan. All rights reserved.</div>
            <div>
                <div className={styles.social}>
                    <Image src="/1.png"  width={30} height={30} className={styles.icon} alt="Lama Dev" />
                    <Image src="/2.png"  width={30} height={30} className={styles.icon} alt="Lama Dev" />
                    <Image src="/3.png"  width={30} height={30} className={styles.icon} alt="Lama Dev" />
                    <Image src="/4.png"  width={30} height={30} className={styles.icon} alt="Lama Dev" />
                </div>
            </div>
        </div>
    )
}

export default Footer;