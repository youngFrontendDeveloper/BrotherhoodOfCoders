"use client";

import styles from "./page.module.scss";
import Table from "@/components/Table/Table";
import { getPosts } from "@/services/getPosts";
import Search from "@/components/Search/Search";
import { usePosts } from "@/services/usePosts";

export default function Home() {
  // const data = await getPosts();
  const { data, isLoading, error } = usePosts();

  return (
    <section className={ styles.home }>

      <h1 className={ styles[ "home__title" ] }>Практическое задание №2</h1>

      <Search />

      {
        isLoading ? <p>Loading...</p> :
          error ? <p>Извините, произошла ошибка</p> :
            <Table data={ data } />
      }


    </section>
  );
}
