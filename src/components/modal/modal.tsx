"use client"; 
import './modal.scss';

import { FormEvent } from 'react';


interface IModalProps {
  display: 'block' | "none";
  modal: () => void;
}

export default function Modal({display, modal}: IModalProps) {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
      return (
        <div className="overlay" style={{display}}>
          <div id="consultation" className="modal">
            <div className="modal__close" onClick={modal}>&times;</div>
            <div className="modal__subtitle">Просто заполните форму заявки</div>
            <div className="modal__descr">и я перезвоню вам в ближайшее время</div>
            <form action="#" id="consultation-second" className="feed-form" onSubmit={handleSubmit}>
              <input name="name" required placeholder="Ваше имя" type="text"/>
              <input name="phone" required placeholder="Ваш телефон" type="number"/>
              <input name="email" required placeholder="Ваш E-mail" type="email"/>
              <button className="button button_submit">заказать кОНСУЛЬТАЦИЮ</button>
            </form>
          </div>
        </div>
      );

}