import Hero from "../components/home/Hero";
import Specials from "../components/home/Specials";
import styles from "../modules/home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <Specials />
    </div>
  );
}
