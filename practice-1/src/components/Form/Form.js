"use client";

import styles from "./Form.module.scss";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { useEffect, useRef, useState } from "react";

const nameRegExp = /[a-zA-zа-яА-яёЁ]$/;
const phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
// const phoneRegExp = /^\+?[78]?[-(\s]?\d{3}[-)\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;
const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Form() {
  const [ name, setName ] = useState( "" );
  const [ phone, setPhone ] = useState( "" );
  const [ email, setEmail ] = useState( "" );
  const [ file, setFile ] = useState( "" );
  const [ fieldActivity, setFieldActivity ] = useState( "ecology" );
  const [ webSite, setWebSite ] = useState( "" );
  const [ vk, setVk ] = useState( "" );
  const [ classmates, setClassmates ] = useState( "" );
  const [ facebook, setFacebook ] = useState( "" );
  const [ instagram, setInstagram ] = useState( "" );
  const [ youtube, setYoutube ] = useState( "" );
  const [ director, setDirector ] = useState( "" );
  const [ errorMessage, setErrorMessage ] = useState( {
    name: "",
    // phone: "",
    // email: ""
  } );
  const nameRef = useRef();

  // console.log(name);
  // console.log(phone);
  // console.log(email);
  // console.log(fieldActivity);

  // Проверка на валидацию
  const validateValue = (reg, value) => {
    return reg.test( value );
  };

  //Устанавливаю фокус после первого рендеринга
  useEffect( () => {
    nameRef.current?.focus();
  }, [] );

  const handleSubmit = (e) => {
    e.preventDefault();

    if( ( name && validateValue( nameRegExp, name ) ) && ( phone && validateValue( phoneRegExp, phone ) ) && ( email && validateValue( emailRegExp, email ) ) && fieldActivity ) {
      setErrorMessage({})
      console.log( "ok" );
      const data = {
        name,
        phone,
        fieldActivity,
        webSite,
        vk,
        classmates,
        facebook,
        instagram,
        youtube,
        director,
      };
      console.log( data );
    } else if( !name ) {
      setErrorMessage( (prevState)=>{ ...prevState, name: "Пожалуйста заполните это поле" } );

    }

  };

  return (
    <form className={ styles.form } onSubmit={ handleSubmit }>
      <div className={ styles[ "form__item-wrap" ] }>

        <div className={ styles[ "form__item" ] }>
          <label className={ `${ styles[ "form__libel" ] } ${ styles[ "form__libel--required" ] }` } htmlFor="name">
            Название организации
          </label>
          <input
            ref={ nameRef }
            type="text"
            className={ styles[ "form_input" ] }
            id="name"
            placeholder="ООО Ромашка"
            onChange={ (e) => {
              setName( e.target.value );
            } }
          />
          {
            errorMessage.name && <p>{errorMessage.name}</p>
          }
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
            onChange={ (e) => setPhone( e.target.value ) }

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
            onChange={ (e) => setEmail( e.target.value ) }
          />
        </div>
      </div>

      <div className={ `${ styles[ "form__item--file" ] }` }>
        <label
          className={ `${ styles[ "form__libel" ] } ${ styles[ "form__libel-file" ] } ${ styles[ "form__libel--required" ] }  ` }
          htmlFor="file"
        >Логотип (jpeg, png)

          <div className={ styles[ "form__avatar-wrap" ] }>
            <Image src="/images/avatar.jpg" className={ styles[ "form__avatar-img" ] } fill alt="Аватар пользователя" />
            <div className={ styles[ "form__avatar-shading" ] }><p
              className={ styles[ "form__avatar-text" ] }
            >Выберите<br /> файл</p></div>
          </div>

        </label>
        <input
          id="file"
          type="file"
          accept="image/png, image/jpeg"
          className={ styles[ "form_input-file" ] }
          // onChange={ (e) => setFile( e.tatget.value ) }
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
          onChange={ (e) => setFieldActivity( e.target.value ) }
        >
          <option value="ecology">Экология</option>
          <option value="programming">Программирование</option>
          <option value="art">Искусство</option>
        </select>
      </div>

      <div className={ `${ styles[ "form__item" ] } ${ styles[ "form__item--relative" ] }` }>
        <input
          type="text"
          className={ `${ styles[ "form_input" ] } ${ styles[ "globe" ] }` }
          placeholder="avc.ru"
          onChange={ (e) => setWebSite( e.target.value ) }
        />
      </div>

      <div className={ `${ styles[ "form__item" ] } ${ styles[ "form__item--relative" ] }` }>
        <input
          type="text"
          className={ `${ styles[ "form_input" ] } ${ styles[ "vk" ] }` }
          placeholder="vk.com/shans"
          onChange={ (e) => setVk( e.target.value ) }
        />
      </div>

      <div className={ `${ styles[ "form__item" ] } ${ styles[ "form__item--relative" ] }` }>
        <input
          type="text"
          className={ `${ styles[ "form_input" ] } ${ styles[ "classmates" ] }` }
          placeholder="ok.com/shans"
          onChange={ (e) => setClassmates( e.target.value ) }
        />
      </div>

      <div className={ `${ styles[ "form__item" ] } ${ styles[ "form__item--relative" ] }` }>
        <input
          type="text"
          className={ `${ styles[ "form_input" ] } ${ styles[ "facebook" ] }` }
          placeholder="facebook.com/shans"
          onChange={ (e) => setFacebook( e.target.value ) }
        />
      </div>

      <div className={ `${ styles[ "form__item" ] } ${ styles[ "form__item--relative" ] }` }>
        <input
          type="text"
          className={ `${ styles[ "form_input" ] } ${ styles[ "instagram" ] }` }
          placeholder="instagram.com/shans"
          onChange={ (e) => setInstagram( e.target.value ) }
        />
      </div>

      <div className={ `${ styles[ "form__item" ] } ${ styles[ "form__item--relative" ] }` }>
        <input
          type="text"
          className={ `${ styles[ "form_input" ] } ${ styles[ "youtube" ] }` }
          placeholder="youtube.com/shans"
          onChange={ (e) => setYoutube( e.target.value ) }
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
          onChange={ (e) => setDirector( e.target.value ) }
        />
      </div>
      <Button type="submit" text="Стать партнёром проекта" btnClass="" />
      <Button type="reset" text=" Отменить" btnClass="button--reset" />
    </form>
  );
}