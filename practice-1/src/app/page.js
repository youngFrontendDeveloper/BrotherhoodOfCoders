"use client";

import styles from "./page.module.scss";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";

export default function Home() {
  const [ isOpen, setOpen ] = useState( false );

  const handleToggleModal = () => {
    setOpen( !isOpen );
  };

  const handleClose = () => {
    setOpen( false );
  };

  return (
    <section className={ styles.home }>
      <h1 className={ styles[ "home__title" ] }>Тестовое задание</h1>
      <p className={ styles[ "home__text" ] } onClick={ handleToggleModal }>Стать участником проекта</p>
      {
        isOpen && <Modal onClose={ handleClose } />
      }
    </section>
  );
}
