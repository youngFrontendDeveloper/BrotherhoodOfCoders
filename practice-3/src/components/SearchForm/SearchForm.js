"use client";

import styles from "./SearchForm.module.scss";

import React, { useState } from "react";
import { usePosts } from "@/services/usePosts";


export default function SearchForm({ getFoundWords }) {
  const { data } = usePosts();
  const [ searchingWord, setSearchingWord ] = useState( "" );
  const [ warning, setWarning ] = useState( "" );

  const handleGetSearchingWord = (e) => {
    console.log( Number( e.target.value ) );
    if( !Number( e.target.value ) && e.target.value.length <= 2 ) {
      setWarning( "Введите более 2-х символов!" );
    } else {
      setWarning( "" );
      setSearchingWord( e.target.value );
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if( warning ) {
      return;
    } else {
      const foundArray = data?.filter( item => {
        return item[ "id" ].toString().includes( searchingWord ) || item[ "userId" ].toString().includes( searchingWord ) || item[ "title" ].includes( searchingWord ) || item[ "body" ].includes( searchingWord );
      } );

      getFoundWords( foundArray );
    }
  };

  const handleGetAllPosts = (e) => {
    e.preventDefault();

    getFoundWords( data );
    setWarning( "" );
  };

  return (
    <>
      <form action="" className={ styles[ "form" ] } onSubmit={ handleSearch }>
        <fieldset className={ styles[ "form__fieldset" ] }>
          <legend className={ styles[ "form__title" ] }>Поиск по id,user id, title и body</legend>
          <label htmlFor="search">Введите искомое слово:</label>
          <input
            type="search"
            className={ styles[ "form__input" ] }
            id="search"
            placeholder="sunt aut facere"
            onChange={ handleGetSearchingWord }
          />
          { warning && <p className={ `error ${ styles[ "form__warning" ] }` }>{ warning }</p> }
          <button
            type="submit"
            className={ styles[ "form__btn" ] }
          >Искать
          </button>
          <button
            type="button"
            className={ styles[ "form__btn" ] }
            onClick={ handleGetAllPosts }
          >Получить весь список
          </button>
        </fieldset>
      </form>
    </>
  );
}