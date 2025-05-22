import styles from "../../modules/specials.module.css";
import { Card, Image } from "@chakra-ui/react";

export default function Specials() {
  return (
    <>
      <section className={styles.specials}>
        <div id={styles.h1}>This weeks specials</div>
        <div id={styles.button}>
          <button>Online Menu</button>
        </div>
      </section>
      <section id={styles.cardContainer}>
        <Card.Root bg="gray.200" borderWidth={0} size="md">
          <Card.Header />
          <Card.Body />
          <Card.Footer />
        </Card.Root>
      </section>
    </>
  );
}
