import styles from "./Form.module.scss";

export default function Search() {
  return (
    <>

      <form action="" className={ styles[ "form" ] }>
        <label htmlFor="search">Введите искомое слово</label>
        <input
          type="search"
          className={ styles[ "form__input" ] }
          id="search"
          placeholder="sunt aut facere"
        />
        <button type="submit" className={ styles[ "form__btn" ] }>Искать</button>
      </form>
    </>
  );
}