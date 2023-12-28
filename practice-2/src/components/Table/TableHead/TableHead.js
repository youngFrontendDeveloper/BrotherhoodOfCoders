import { useState } from "react";

export default function TableHead({columns, handleSorting}) {
  const [ sortField, setSortField ] = useState( "" );
  const [ order, setOrder ] = useState( "asc" );

  const handleSortingChange = (key) => {
    console.log( key );
    const sortOrder = key === sortField && order === "asc" ? "desc" : "asc";
    setSortField( key );
    setOrder( sortOrder );
    handleSorting( key, sortOrder );
  };
  return (
    <thead>
    <tr>
      {columns.map(({ label, accessor, sortable }) => {
        return (
          <th
            key={accessor}
            onClick={sortable ? () => handleSortingChange(accessor) : null}
          >
            {label}
          </th>
        );
      })}
    </tr>
    </thead>
  );
}