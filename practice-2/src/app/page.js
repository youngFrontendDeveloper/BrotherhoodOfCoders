"use client";

import styles from "./page.module.scss";

import Table from "@/components/Table/Table";
import { usePosts } from "@/services/usePosts";

export default function Home() {
  const { data, isLoading, error } = usePosts();

  return (
    <section className={ styles.home }>

      <h1 className={ styles[ "home__title" ] }>Практическое задание №2</h1>

      {
        isLoading ? <p>Loading...</p> :
          error ? <p>Извините, произошла ошибка</p> :
            <Table data={ data } />
      }

    </section>
  );
}
