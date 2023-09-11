import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/bottom.png'
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>tomorrow we will run faster, stretch out our arms farther ... </h1>
        <p className={styles.desc}>Code in My Veins, Nature as My Muse, Art as My Love Language, and Poetry for Soulful Laughter.</p>
        <Button url="/about" text="ABOUT &nbsp;   ME ~" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='' className={styles.img} /> 
        {/* <Image width={500} height={500} src='https://images.pexels.com/photos/9589493/pexels-photo-9589493.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' alt='' className={styles.img} />  */}
      </div>
      <div>
        
        
      </div>
    </div>
  );
};
