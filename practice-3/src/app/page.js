"use client";

import styles from "./page.module.scss";

import { useEffect, useState } from "react";

import Table from "@/components/Table/Table";
import SearchForm from "@/components/SearchForm/SearchForm";
import { usePosts } from "@/services/usePosts";


export default function Home() {
  const { data, isLoading, error, } = usePosts();
  const [ posts, setPosts ] = useState( data || [] );

  useEffect( () => {
    setPosts( data );
  }, [ data ] );

  const getFoundWords = (arr) => {
    setPosts( arr );
  };

  return (
    <section className={ styles.home }>
      <h1 className={ styles[ "home__title" ] }>Практическое задание №3</h1>

      <SearchForm getFoundWords={ getFoundWords } />

      {
        isLoading ? <p>Loading...</p> :
          error ? <p>Извините, произошла ошибка</p> :
            <Table data={ posts } />
      }

    </section>
  );
}
