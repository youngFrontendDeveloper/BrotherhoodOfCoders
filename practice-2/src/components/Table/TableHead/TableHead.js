import styles from "./TableHead.module.scss";

import { useState } from "react";

export default function TableHead({ columns, handleSorting }) {
  // const [ sortField, setSortField ] = useState( "" );
  // const [ order, setOrder ] = useState( "asc" );

  // const handleSortingChange = (key) => {
  //
  //   const sortOrder = key === sortField && order === "asc" ? "desc" : "asc";
  //   setSortField( key );
  //   setOrder( sortOrder );
  //   handleSorting( key, sortOrder );
  // };
  return (
    <thead className={ styles[ "table__head" ] }>
    <tr>
      { columns.map( ({ label, accessor,  }) => {
        return (
          <th
            aria-label="userId"
            className={ styles[ "table__thcol" ] }
            key={ accessor }
            // onClick={ sortable ? () => handleSortingChange( accessor ) : null }
          >
            { label }
          </th>
        );
      } ) }
    </tr>
    </thead>
  );
}