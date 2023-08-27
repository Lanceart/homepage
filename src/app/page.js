import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design your digtial products.</h1>
        <p className={styles.desc}>Turing your Idea into Reality. We bring together the teams from the global tech industry.</p>
        <Button url="/portfolio" text="See our Works" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='' className={styles.img} /> 
        {/* <Image width={500} height={500} src='https://images.pexels.com/photos/9589493/pexels-photo-9589493.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' alt='' className={styles.img} />  */}
      </div>
      
    </div>
  );
};
