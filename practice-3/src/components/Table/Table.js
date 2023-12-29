"use client";

import styles from "./Table.module.scss";

import React, { useEffect, useState } from "react";

import TableItem from "./TableItem/TableItem";
import TableHead from "./TableHead/TableHead";


export default function Table({ data }) {
  const [ arr, setArr ] = useState( [] );

  useEffect( () => {
    setArr( data );
  }, [ data ] );

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
        <tbody>
        {
          arr?.map( item => <TableItem item={ item } key={ item.id } /> )
        }
        </tbody>
      </table>
    </>

  );
}