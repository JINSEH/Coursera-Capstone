import styles from "../../modules/hero.module.css";
import menu from "../../images/hero.png";

export default function Hero() {
  return (
    <section className={styles.herosection}>
      <section className={styles.textSection}>
        <h1>Little Lemon</h1>
        <p>Chicago</p>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
      </section>
      <section className={styles.imageSection}>
        <img src={menu} alt="Hero Menu" />
      </section>
    </section>
  );
}
