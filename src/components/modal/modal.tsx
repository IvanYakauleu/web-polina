"use client"; 
import './modal.scss';

import { FormEvent, useState } from 'react';
import axios from 'axios';


interface IModalProps {
  display: 'block' | "none";
  modal: () => void;
}
interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function Modal({display, modal}: IModalProps) {
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
        try {
          const response = await axios.post<{ message: string }>('http://localhost/bot.php', formData);
          console.log(formData)
          console.log('Ответ сервера:', response.data.message); 
        } catch (error) {
          console.error('Ошибка при отправке:', error);
        }
        
    }
      return (
        <div className="overlay" style={{display}}>
          <div id="consultation" className="modal">
            <div className="modal__close" onClick={modal}>&times;</div>
            <div className="modal__subtitle">Просто заполните форму заявки</div>
            <div className="modal__descr">и я перезвоню вам в ближайшее время</div>
            <form action="#" id="consultation-second" className="feed-form" onSubmit={handleSubmit}>
              <input
               name="name" 
               required
               placeholder="Ваше имя" 
               type="text" 
               value={formData.name}
               onChange={handleChange}/>
              <input 
              name="phone" 
              required
              placeholder="Ваш телефон" 
              type="number"
              value={formData.phone}
              onChange={handleChange}/>
              <input 
              name="email" 
              required 
              placeholder="Ваш E-mail" 
              type="email"
              value={formData.email}
              onChange={handleChange}/>
              <button className="button button_submit">заказать кОНСУЛЬТАЦИЮ</button>
            </form>
          </div>
        </div>
      );

}