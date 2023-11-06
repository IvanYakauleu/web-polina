'use client';
import './modal.scss';
import Image from 'next/image';
import closeBlack from 'public/close-black.svg';

import { FormEvent, useState } from 'react';

interface IModalProps {
  display: 'block' | 'none';
  modal: () => void;
}
interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function Modal({ display, modal }: IModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      });
    setFormData({ name: '', email: '', phone: '' });
    modal();
  };
  return (
    <div className="overlay" style={{ display }}>
      <div id="consultation" className="modal">
        <div className="modal__close" onClick={modal}>
          <Image src={closeBlack} width={25} height={25} alt="close modal" />
        </div>
        <div className="modal__subtitle">Просто заполните форму заявки</div>
        <div className="modal__descr">и я перезвоню вам в ближайшее время</div>
        <form action="#" id="consultation-second" className="feed-form" onSubmit={handleSubmit}>
          <input
            name="name"
            required
            placeholder="Ваше имя"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="phone"
            required
            placeholder="Ваш телефон"
            type="number"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            name="email"
            required
            placeholder="Ваш E-mail"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <button className="button button_submit">заказать кОНСУЛЬТАЦИЮ</button>
        </form>
      </div>
    </div>
  );
}
