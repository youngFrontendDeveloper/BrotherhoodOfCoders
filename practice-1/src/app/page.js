import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <section className={styles.home}>
      <h1 className={styles["home__title"]}>Тестовое задание</h1>
      <p className={styles["home__text"]}>Стать участником проекта</p>
    </section>
  );
}
