import { Link } from "react-router-dom"
import { BsCart3 } from "react-icons/bs";
import style from '../../style/exploreComponentsStyle/exploreHeader.module.css'

export default function Header(){
    return(
        <div className={style.container}>
            <Link to="/">
             <span className={style.text}>
                To The HomePage
             </span>
            </Link>
            <Link to='/cart'>
               <BsCart3 className={style.cart} />
            </Link>
        </div>
    )
}