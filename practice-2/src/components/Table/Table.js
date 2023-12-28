import styles from "./Table.module.scss";

import TableItem from "@/components/TableItem/TableItem";

export default function Table({ data }) {
  return (
    <table className={ styles[ "table" ] }>
      <thead className={ styles[ "table__head" ] }>
      <tr className={styles["table__hrow" ]}>
        <th className={ styles[ "table__thcol" ] }>UserId</th>
        <th className={ styles[ "table__thcol" ] }>Id</th>
        <th className={ styles[ "table__thcol" ] }>Title</th>
        <th className={ styles[ "table__thcol" ] }>Body</th>
      </tr>
      </thead>
      {
        data.map( item => <TableItem item={ item } /> )
      }
    </table>
  );
}