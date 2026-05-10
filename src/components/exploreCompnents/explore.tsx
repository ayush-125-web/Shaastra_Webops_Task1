import products from '../../lib/data'
import QuantitySelec from './quantitySelec'
import style from '../../style/exploreComponentsStyle/explore.module.css'
import Header from './exploreHeader'
import { useCart } from '../../lib/cartContext'
import {useState} from 'react'
import type {productType} from '../../lib/data'



export default function Explore() {
    const{addToCart}=useCart();
    const [addedId, setAddedId] = useState<number | null>(null);
    const [quantities, setQuantities] = useState<{ [id: number]: number }>({});

    const handleClick = (product:productType) => {
    addToCart(product,quantities[product.id]??1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1000); 
    };
     
  return (

    <>
      <Header></Header>

        <div className="bg-black">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
                <div key={product.id} className="group">
                <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                />
                <div className={style.container}>
                    <div className={style.info}>
                        <h3 className="mt-4 text-sm text-white-700">{product.name}</h3>
                        <p className="mt-1 text-lg font-medium text-white-900">${product.price}</p>
                    </div>
                    <QuantitySelec
                    onQuantityChange={(qty) =>
                        setQuantities((prev) => ({ ...prev, [product.id]: qty }))
                    }></QuantitySelec>
                </div>
                
                
                <button className={style.button} onClick={() => handleClick(product)}>{addedId==product.id ? "Added! ✓" : "ADD TO CART"}</button>
                </div>
            ))}
            </div>
        </div>
        </div>
    </>

    
  )
}