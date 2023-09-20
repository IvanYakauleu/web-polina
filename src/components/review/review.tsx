import Image from "next/image"

interface IReviewProps {
    photo: string;
    name: string;
    descr: string;
}

export default function Review(props: IReviewProps) {
    return (
        <div className="review">
            <Image className="review__photo" src='../../../public/client1.jpg' width={100} height={100} alt="client photo"/>
            <div className="review__wrapper">
                <div className="review__name">{props.name}</div>
                <div className="review__descr">{props.descr}</div>
            </div>
        </div>  
    )
}