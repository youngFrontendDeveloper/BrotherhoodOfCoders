"use client";

import styles from "./Table.module.scss";

import TableItem from "@/components/Table/TableItem/TableItem";
import { useState } from "react";
import TableHead from "@/components/Table/TableHead/TableHead";

export default function Table({ data }) {

  const [ arr, setArr ] = useState( data || [] );
  // console.log( arr );

  const handleSorting = (sortField, sortOrder) => {
    if( sortField ) {
      const sorted = [ ...data ].sort( (a, b) => {
        if( a[ sortField ] === null ) return 1;
        if( b[ sortField ] === null ) return -1;
        if( a[ sortField ] === null && b[ sortField ] === null ) return 0;
        return (
          a[ sortField ].toString().localeCompare( b[ sortField ].toString(), "en", {
            numeric: true,
          } ) * ( sortOrder === "asc" ? 1 : -1 )
        );
      } );
      setArr( sorted );
    }
  };

  const a = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
  ];


  const handleSort = () => {
    console.log( "click" );
    // const newData =[...data].sort((a,b)=> (a.name.toLowerCase < b.name.toLowerCase ? -1 : 1))
    const newData = [ ...a ].sort( (a, b) => ( a.title.toString().localeCompare( b.title.toString(), "ru", {
      numeric: true
    } ) ) );
    setArr( newData );
  };


  const columns = [
    { label: "User Id", accessor: "userId", sortable: true },
    { label: "Id", accessor: "id", sortable: true },
    { label: "Title", accessor: "title", sortable: true },
    { label: "Body", accessor: "body", sortable: true },

  ];

  return (
    <>
      <table className={ styles[ "table" ] }>
        <caption className={ styles[ "table__title" ] }>Posts</caption>
        <TableHead columns={ columns } handleSorting={ handleSorting } />
        {/*<thead className={ styles[ "table__head" ] }>*/ }
        {/*<tr className={ styles[ "table__hrow" ] }>*/ }
        {/*  <th*/ }
        {/*    aria-label="userId" className={ styles[ "table__thcol" ] } onClick={ () => handleSortingChange( "userId" ) }*/ }
        {/*    title="Сортировать"*/ }
        {/*  >UserId*/ }
        {/*  </th>*/ }
        {/*  <th*/ }
        {/*    aria-label="id" className={ styles[ "table__thcol" ] } onClick={ () => handleSortingChange( "id" ) }*/ }
        {/*    title="Сортировать"*/ }
        {/*  >Id*/ }
        {/*  </th>*/ }
        {/*  <th*/ }
        {/*    aria-label="title" className={ styles[ "table__thcol" ] } onClick={ () => handleSortingChange( "title" ) }*/ }
        {/*    title="Сортировать"*/ }
        {/*  >Title*/ }
        {/*  </th>*/ }
        {/*  <th*/ }
        {/*    aria-label="body" className={ styles[ "table__thcol" ] } onClick={ () => handleSortingChange( "body" ) }*/ }
        {/*    title="Сортировать"*/ }
        {/*  >Body*/ }
        {/*  </th>*/ }
        {/*</tr>*/ }
        {/*</thead>*/ }
        <tbody>
        {
          arr?.map( item => <TableItem item={ item } key={ item.id } /> )
        }
        </tbody>

      </table>
    </>

  );
}