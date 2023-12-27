import styles from "./Form.module.scss";
import Image from "next/image";

export default function Form() {
  return (
    <form className={ styles.form }>
      <div className={ styles[ "form__item-wrap" ] }>
        <div className={ styles[ "form__item" ] }>
          <label className={ `${ styles[ "form__libel" ] } ${ styles[ "form__libel--required" ] }` } htmlFor="name">
            Название организации
          </label>
          <input
            onFocus={ true }
            type="text"
            className={ styles[ "form_input" ] }
            id="name"
            placeholder="ООО Ромашка"
          />
        </div>
        <div className={ styles[ "form__item" ] }>
          <label className={ `${ styles[ "form__libel" ] } ${ styles[ "form__libel--required" ] }` } htmlFor="phone">
            Телефон
          </label>
          <input
            type="tel"
            className={ styles[ "form_input" ] }
            id="phone"
            placeholder="+7 933 848-34-33"
            // value="+7 933 848-34-33"
          />
        </div>
        <div className={ styles[ "form__item" ] }>
          <label className={ `${ styles[ "form__libel" ] } ${ styles[ "form__libel--required" ] }` } htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            className={ styles[ "form_input" ] }
            id="email"
            placeholder="mail@mail.ru"
          />
        </div>
      </div>
      <div className={ `${ styles[ "form__item--file" ] }` }>
        <label
          className={ `${ styles[ "form__libel" ] } ${ styles[ "form__libel-file" ] } ${ styles[ "form__libel--required" ] }  ` }
          htmlFor="file"
        >Логотип (jpeg, png)

          <div className={ styles[ "form__avatar-wrap" ] }>
            <Image src="/images/avatar.jpg" className={ styles[ "form__avatar-img" ] } fill />
            <div className={ styles[ "form__avatar-shading" ] }><p className={styles["form__avatar-text"]}>Выберите<br /> файл</p></div>
          </div>

        </label>
        <input
          id="file"
          type="file"
          accept="image/png, image/jpeg"
          className={ styles[ "form_input-file" ] }
        />
      </div>
      <div className={ `${ styles[ "form__item" ] } ${ styles[ "form__item--relative" ] }` }>
        <label
          className={ `${ styles[ "form__libel" ] } ${ styles[ "form__libel--required" ] }` } htmlFor="field-activity"
        >
          Направление
        </label>
        <select
          name="field-activity"
          id="field-activity"
          className={ styles[ "form_select" ] }
        >
          <option value="ecology">Экология</option>
          <option value="programming">Программирование</option>
          <option value="art">Искусство</option>
        </select>
      </div>
      {/********/ }
      <div className={ `${ styles[ "form__item" ] } ${ styles[ "form__item--relative" ] }` }>
        <input
          type="text"
          className={ `${ styles[ "form_input" ] } ${ styles[ "globe" ] }` }
          placeholder="avc.ru"
        />
      </div>
      <div className={ `${ styles[ "form__item" ] } ${ styles[ "form__item--relative" ] }` }>
        <input
          type="text"
          className={ `${ styles[ "form_input" ] } ${ styles[ "vk" ] }` }
          placeholder="vk.com/shans"
        />
      </div>
      <div className={ `${ styles[ "form__item" ] } ${ styles[ "form__item--relative" ] }` }>
        <input
          type="text"
          className={ `${ styles[ "form_input" ] } ${ styles[ "classmates" ] }` }
          placeholder="ok.com/shans"
        />
      </div>
      <div className={ `${ styles[ "form__item" ] } ${ styles[ "form__item--relative" ] }` }>
        <input
          type="text"
          className={ `${ styles[ "form_input" ] } ${ styles[ "facebook" ] }` }
          placeholder="facebook.com/shans"
        />
      </div>
      <div className={ `${ styles[ "form__item" ] } ${ styles[ "form__item--relative" ] }` }>
        <input
          type="text"
          className={ `${ styles[ "form_input" ] } ${ styles[ "instagram" ] }` }
          placeholder="instagram.com/shans"
        />
      </div>
      <div className={ `${ styles[ "form__item" ] } ${ styles[ "form__item--relative" ] }` }>
        <input
          type="text"
          className={ `${ styles[ "form_input" ] } ${ styles[ "youtube" ] }` }
          placeholder="youtube.com/shans"

        />
      </div>
      <div className={ styles[ "form__item" ] }>
        <label className={ styles[ "form__libel" ] } htmlFor="director">
          Руководитель
        </label>
        <input
          type="text"
          className={ styles[ "form_input" ] }
          id="director"
          placeholder="Иванов Иван Иванович"
        />
      </div>
      <button
        type="submit"
        className={ styles[ "form__btn" ] }
      >
        Стать партнёром проекта
      </button>
      <button
        type="reset"
        className={ `${ styles[ "form__btn" ] } ${ styles[ "form__btn-reset" ] }` }
      >
        Отменить
      </button>
    </form>
  );
}