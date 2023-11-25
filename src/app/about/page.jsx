import React from "react";
import styles from './page.module.css'
import Image from "next/image";
import Button from "@/components/Button/Button";
import Me from "/public/me.png"
const About = () => {
    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
            <Image fill={true} src='https://images.pexels.com/photos/9589493/pexels-photo-9589493.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' alt='' className={styles.img} />
            <div className={styles.imgText}>
                <h1  className={styles.imgTitle}>Linqing Li</h1>
                <h2 className={styles.imgDesc}>Full-stack software engineer</h2> 
            </div>
            <div className={styles.imgMe}><Image src={Me} height={230} /></div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Skills</h1>
                    <p>
                    Software development and system programming. Proficient in Java and C++. Quickly adapt to new emerging Front end
frameworks like ReactJS, VueJS, Back end framework like ExpressJS, NodeJS, and AWS related cloud services. Experience
developing applications in a collaborative team environment and strong analy tical and problem solving skills.
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who am I</h1>
                    <p>
                        Hello, I&apos;m <b className={styles.text_color}>Linqing</b>, or you can call me <b className={styles.text_color}>Cyan</b>. I am a graduate student in Computer Science interested in 💻 <b className={styles.text_color_golden}>Software Development</b> 🌐, 
                        and 🖼️ <b className={styles.text_color_golden}>Computer Graphics </b>🎨.   🌟 Recently, I&apos;ve been incredibly passionate about discovering career opportunities related to these fields! 💼🔍. Feel free to contact me at <b className={styles.text_color_orange}>lli260@ucr.edu</b>
                    </p>
                    <Button url="/portfolio" text="See my works" />
                </div>

            </div>

        </div>
    )
}

export default About;