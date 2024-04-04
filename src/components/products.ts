import phoneId1 from '@images/celular-1.png';
import phoneId2 from '@images/celular-2.png';
import phoneId3 from '@images/celular-3.png';
import phoneId4 from '@images/celular-4.png';
import headphoneId1 from '@images/headphone-1.png';
import headphoneId2 from '@images/headphone-2.png';
import headphoneId3 from '@images/headphone-3.png';
import headphoneId4 from '@images/headphone-4.png';
import watchId1 from '@images/watch-1.png';
import watchId2 from '@images/watch-2.png';
import watchId3 from '@images/watch-3.png';
import watchId4 from '@images/watch-4.png';

export interface Products {
    id: string;
    image: string;
    title: string;
    cost: number;
}

export const dataPhones: Products[] = [
    {
        id: 'iphone-13-rosa',
        image: phoneId1,
        title: 'Iphone 13 rosa', 
        cost: 4000,
    },
    {
        id: 'iphone-13-branco',
        image: phoneId2,
        title: 'Iphone 13 branco', 
        cost: 4000,
    },
    {
        id: 'iphone-13-preto',
        image: phoneId3,
        title: 'Iphone 13 preto', 
        cost: 4000,
    },
    {
        id: 'galaxy-S20-lilas',
        image: phoneId4,
        title: 'Galaxy S20 lilás', 
        cost: 4000,
    },
];

export const dataHeadphones: Products[] = [
    {
        id: 'headphone-haylou-branco',
        image: headphoneId1,
        title: 'Headphone Haylou Branco', 
        cost: 300,
    },
    {
        id: 'headphone-edifier-preto',
        image: headphoneId2,
        title: 'Edifier W820NB PLUS Preto', 
        cost: 300,
    },
    {
        id: 'headphone-logitech-branco',
        image: headphoneId3,
        title: 'Headphone Gamer LOGITECH G Branco', 
        cost: 300,
    },
    {
        id: 'headphone-edifier-marfim',
        image: headphoneId4,
        title: 'Headphone Edifier cor Marfim', 
        cost: 300,
    },
];

export const dataWatch: Products[] = [
    {
        id: 'smartwatch-bege',
        image: watchId1,
        title: 'Smart Watch HS54C Bege', 
        cost: 200,
    },
    {
        id: 'smartwatch-rosa',
        image: watchId2,
        title: 'Smart Watch Kaymcixs Rosa', 
        cost: 200,
    },
    {
        id: 'smartwatch-branco',
        image: watchId3,
        title: 'Smart Watch Amazfit Bip 5  Branco', 
        cost: 200,
    },
    {
        id: 'smartwatch-preto',
        image: watchId4,
        title: 'Smart Watch Amazfit Bip 3 Preto', 
        cost: 200,
    },
];