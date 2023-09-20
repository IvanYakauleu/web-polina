"use client"

import Card from '@/components/services-card/card';
import Modal from '@/components/modal/modal';
import { useState } from 'react';

export default function Services() {
    const [modalOpen, setOpenModal] = useState<"none" | "block">("none");
    
    function openModal() {
        setOpenModal("block");
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        setOpenModal("none");
        document.body.style.overflow = '';
      }

    return (
        <>
            <div className="my-services__wrapper">
                <Card title={'Мобильная съёмка'} modal={openModal} items={['Подбор референсов', 'Помощь в подборе локаций', 'Съёмка на телефон (1 час)', 'Рекомендации в подборе образов и реквизитов', 'Обработка фотографий (20-30 мин)', 'Все исходники (при необходимости)', 'Видео-reels в подарок']} />
                
                <Card title='Предметная контент-съёмка' modal={openModal} items={['Подбор референсов', 'Создание визуальной концепции', 'Съёмка на телефон (1-2 часа)', 'Выбор локации (съёмка может проводиться без вашего участия)', 'Все исходники (при необходимости)', 'Рекомендации по дополнительным реквизитам', 'Обработка фотографий в едином стиле', 'Составление ленты (минимум на 12 постов)', 'Рекомендации для дальнейшего ведения ленты', 'Видео-reels в подарок']}/>

                <Card title='Полная упаковка профиля' modal={openModal} items={['Подбор референсов', 'Помощь в подборе локаций', 'Создание визуальной концепции', 'Разбор профиля (выявление сильных и слабых сторон аккаунта)', 'Поиск моделей (при необходимости)', 'Рекомендации по образам и реквизитам', 'Обработка фотографий в едином стиле', 'Составление ленты (минимум на 12 постов)', 'Оформление хайлайтс (вечные сторис)', 'Съёмка на телефон (1-2 часа)', 'Рекомендации по аватарке, никнейму, главной “жирной” строке, оформление шапки профиля', 'Все исходники (при необходимости)', 'Рекомендации для дальнейшего ведения странички', 'Видео-reels в подарок']}/>

                <Card title='Контент-съёмка + создание визуала' modal={openModal} items={['Создание визуальной концепции', 'Обработка фотографий в едином стиле', 'Рекомендации по образам и реквизитам', 'Рекомендации для дальнейшего ведения ленты', 'Составление ленты (минимум на 12 постов)', 'Поиск моделей (при необходимости)', 'Помощь в подборе локаций', 'Съёмка на телефон (1-2 часа)', 'Все исходники (при необходимости)', 'Подбор референсов', 'Видео-reels в подарок']}/>

                <Card title='Консультация по ведению блога' modal={openModal} items={['Консультация (1 - 1.5 ч)', 'Формулы продающего сториттелинга', 'Выявление слабых и сильных сторон аккаунта', 'Ответы на все интересующие вопросы', 'Рекомендации по дальнейшему ведению блога', 'Онлайн/оффлайн формат', 'Разбор вашего профиля Instagram', 'О reels- как способ продвижения', 'О stories- как инструмент продаж', 'Как регулярно привлекать клиентов']}/>

                <Card title='Визуал из ваших фото' modal={openModal} items={['Отбор фотографий', 'Обработка фотографий в едином стиле с учётом ваших пожеланий', 'Создание уникальных картинок для вашей ленты (при необходимости)', 'Рекомендации по дальнейшей раскладке ленты', 'Создание визуала ленты (плавный переход от предыдущего визуала к новому)']}/>
            </div>
            <Modal display={modalOpen} modal={closeModal}/>
        </>
    )
}