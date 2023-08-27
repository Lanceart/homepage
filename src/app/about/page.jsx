import React from "react";
import styles from './page.module.css'
import Image from "next/image";
import Button from "@/components/Button/Button";
const About = () => {
    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
            <Image fill={true} src='https://images.pexels.com/photos/9589493/pexels-photo-9589493.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' alt='' className={styles.img} />
            <div className={styles.imgText}>
                <h1 className={styles.imgTitle}>Digital Story</h1>
                <h2 className={styles.imgDesc}>Handcrafting award winning digtial experience</h2>
            </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who are we</h1>
                    <p>
                        this is test. this is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis
                         is testthis is testthis is testthis is testthis is testthi
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who are we</h1>
                    <p>
                        this is test. this is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis
                         is testthis is testthis is testthis is testthis is testthi
                    </p>
                    <Button url="/contact" text="Contact" />
                </div>

            </div>

        </div>
    )
}

export default About;