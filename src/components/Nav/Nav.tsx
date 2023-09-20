import './Nav.scss';
import Link from '../../../node_modules/next/link';

export default function Nav(props: any) {

        return (
        <nav className='nav'>
        <ul className='nav__list'>
            <li className="nav__list-item" style={{color: props.color}}><Link href='/'>Главная</Link></li>
            <li className="nav__list-item"><Link href='/about-me'>Обо мне</Link></li>
            <li className="nav__list-item"><Link href='/portfolio'>Портфолио</Link></li>
            <li className="nav__list-item"><Link href='/my-services'>Услуги</Link></li>
            <li className="nav__list-item"><Link href='/reviews'>Отзывы</Link></li>	
        </ul>
    </nav>
    )
}