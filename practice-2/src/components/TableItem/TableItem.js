import styles from "./TableItem.module.scss";

export default function TableItem({ item }) {
  return (
    <tr className={ styles[ "trow" ] }>
      <td className={styles["tcol"]} aria-label="UserId">{ item.userId }</td>
      <td className={styles["tcol"]} aria-label="Id">{ item.id }</td>
      <td className={styles["tcol"]} aria-label="Title">{ item.title }</td>
      <td className={styles["tcol"]} aria-label="Body">{ item.body }</td>
    </tr>
  );
}