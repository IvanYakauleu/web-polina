import './page.scss';

import { Metadata } from 'next';
import Services from './Services';
import Header from '@/components/Header/Header';

export const metadata: Metadata = {
    title: "Услуги",
    description: "Предоставляемые услуги"
}

export default function MyServices() {

    return (
        <>
        <div className="my-services">
            <Header logo='black' color='black'/>
            <Services/>
        </div>
        </>
    )
}