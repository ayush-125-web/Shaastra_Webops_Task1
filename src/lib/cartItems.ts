type cart ={
    id: number,
    name: string,
    quantity:number,
    href: string,
    price: string,
    imageSrc: string,
    imageAlt: string,
}


const cartItems:cart[]=[
    {id: 1,
    name: 'Earthen Bottle',
    quantity:1,
    href: '#',
    price: '$48',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
    id: 3,
    name: 'Focus Paper Refill',
    quantity:1,
    href: '#',
    price: '$89',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    }
];
export default cartItems;