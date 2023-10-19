import React from "react";
import styles from "./page.module.css"
import Image from "next/image";
const Footer = () =>{
    return(
        <div className={styles.container}>
            <div>©2023 Cyan. All rights reserved.</div>
            <div>
                <div className={styles.social}>
                    {/* <Image src="/1.png"  width={30} height={30} className={styles.icon} alt="Lama Dev" /> */}
                    
                    {/* <Image src="/3.png"  width={30} height={30} className={styles.icon} alt="Lama Dev" /> */}
                    {/* <Image src="/4.png"  width={30} height={30} className={styles.icon} alt="Lama Dev" /> */}
                    <a href="https://github.com/Lanceart">
                    <Image src="/icon_github.jpg"  width={30} height={30} className={styles.icon} alt="Lama Dev" />
                    </a>

                    

                    <a href="https://drive.google.com/file/d/18hk47bw9DRWmAcn_VvTlR0ZElI7G6lTY/view?usp=drive_link">
                    <Image src="/icon_resume.png"  width={30} height={30} className={styles.icon} alt="Lama Dev" />
                    </a>

                    <a href="https://www.linkedin.com/in/linqingcyanli">
                    <Image src="/icon_linkedin.png"  width={30} height={30} className={styles.icon} alt="Lama Dev" />
                    </a>
                    <a href="">
                    <Image src="/2.png"  width={30} height={30} className={styles.icon} alt="Lama Dev" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;