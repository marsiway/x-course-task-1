import { useState } from 'react';
import { addCartItemToStorage } from '../../storage/cart-storage.js';
import './AddCart.css';


const AddCart = ({ book, onChangeCountCartItems }) => {
    const [totalPrice, setTotalPrice] = useState(book.price);
    const [countBooks, setCountBooks] = useState(1);

    const handleChange = (e) => {
        const count = e.target.value;
        setCountBooks(count);
        const totalPrice = book.price * count;
        setTotalPrice(totalPrice);
    };

    const handleAddToCart = () => {
        const cartItem = {
            id: Math.random(1, 100),
            name: book.title,
            count: countBooks,
            totalPrice: totalPrice
        };
        addCartItemToStorage(JSON.stringify(cartItem));
        onChangeCountCartItems(1);
    }

    return ( 
        <form id="frmAddToCart">
            <fieldset className='field'>
                <span className="left">Price, $</span>
                <span>{book.price}</span>
            </fieldset>
            <fieldset className='field'>
                <span className="left">Count</span>
                <input 
                    type="number" 
                    min="1" 
                    max="42"
                    onChange={(e) => handleChange(e)}
                />
            </fieldset>
            <fieldset className='field'>
                <span className="left">Total price, $</span>
                <span>{totalPrice}</span>
            </fieldset>
            <fieldset className='field'>
                <button onClick={handleAddToCart} type="button">Add to cart</button>
            </fieldset>
    </form>
);
}
 
export default AddCart;