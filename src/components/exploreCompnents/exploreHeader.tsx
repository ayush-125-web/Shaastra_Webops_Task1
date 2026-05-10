import { Link } from "react-router-dom"
import { BsCart3 } from "react-icons/bs";
import style from '../../style/exploreComponentsStyle/exploreHeader.module.css'
import { useCart } from "../../lib/cartContext";

export default function Header(){
    const {cart}=useCart();
    return(
        <div className={style.container}>
            <Link to="/">
             <span className={style.text}>
                To The HomePage
             </span>
            </Link>
            <Link to='/cart'>
              <div className={style.cartIcon}>
                {cart.length!=0 && (
                    <div className={style.items}>{cart.length}</div>
                )}
               <BsCart3 className={style.cart} />
              </div>
               
            </Link>
        </div>
    )
}