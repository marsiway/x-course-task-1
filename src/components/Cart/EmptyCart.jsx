import imgCart from './../../datas/img/cart.svg';
import "./EmptyCart.css"

const EmptyCart = () => {
    return ( 
        <div className="cart-empty-container">
            <img src={imgCart} alt="cart" />
            <p>Cart empty...</p>
        </div>
    );
}
 
export default EmptyCart;