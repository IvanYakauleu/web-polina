'use client';

interface ICardProps {
    title: string;
    items: string[];
    modal: () => void;
}


export default function Card(props: ICardProps) {

    function renderItems(arr: string[]) {
        const newArrr = arr.map((item, num) => {
            if (item === 'Видео-reels в подарок') {
                return  <li key={num}><span>{item}</span></li>
            } else {
                return <li key={num}>{item}</li>
            }
        })

        return newArrr;
        }

    const items = renderItems(props.items);

    return (
        <div className="my-services__item">
            <div className='my-services__item-title'>{props.title}</div>
            <ul>
                {items}
            </ul>
            <button onClick={props.modal}>Записаться</button>
        </div>
    )
}