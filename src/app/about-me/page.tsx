import './page.scss';

import { Metadata } from 'next';
import Image from 'next/image';

import mainPhoto from 'public/about-me-top-right.png';

import Hamburger from '@/components/hamburger/hamburger';
import Header from '@/components/Header/Header';

export const metadata: Metadata = {
  title: 'Обо мне',
};

export default function AboutMe() {
  return (
    <div className="about-me">
      <Header logo="black" color="black" />
      <Hamburger color="black" />

      <div className="about-me__main-wrapper">
        <div className="about-me__main">
          <Image className="about-me__photo" src={mainPhoto} alt="my photo" />
          <div className="about-me__descr">
            <h1>Я - Полина Миконович.</h1>
            <h2>SMM-специалист c 2019 года</h2>
            <div>
              Мобильная съемка для меня - это про живые кадры, про «тот самый» момент, про стиль,
              комфорт, мобильность и скорость. Мои клиенты получают готовые фото в течении 24 часов
              после съёмки. Моя задача показывать вашу уникальную красоту и самые чистые эмоции.
            </div>
            <div>
              Работаю с абсолютно разными нишами: визажисты, стилисты, магазины сумок, аксессуаров,
              массажисты, косметологи, логопеды, магазины автозапчастей, мягкой мебели, напольных
              покрытий и т.д. Так же являюсь соавтором INST.MK «Продающий профиль за 1 час».
            </div>

            <div>
              Я самоучка. Я не действую шаблонно, я действую по своему опыту. Делаю то, что помогает
              мне продавать разные товары и услуги в разных нишах.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
