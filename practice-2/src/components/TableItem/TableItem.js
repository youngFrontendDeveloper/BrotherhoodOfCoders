import styles from "./TableItem.module.scss";

export default function TableItem({ item }) {
  return (
    <tr className={ styles[ "table__row" ] }>
      <td className={styles["table__col"]} aria-label="UserId">{ item.userId }</td>
      <td className={styles["table__col"]} aria-label="Id">{ item.id }</td>
      <td className={styles["table__col"]} aria-label="Title">{ item.title }</td>
      <td className={styles["table__col"]} aria-label="Body">{ item.body }</td>
    </tr>
  );
}