import About from "../components/home/About";
import Hero from "../components/home/Hero";
import Specials from "../components/home/Specials";
import Testimonials from "../components/home/Testimonials";
import styles from "../modules/home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </div>
  );
}
