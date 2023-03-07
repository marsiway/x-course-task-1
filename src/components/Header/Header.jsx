import { Link } from "react-router-dom";
import imgCart from './../../datas/img/cart.svg';
import imgUser from './../../datas/img/user.png';
import { getValueFromStorageSignin } from '../../storage/signin-storage';
import "./Header.css"

const Header = ({ countCartItems, userName, onSignOut }) => {
    return (
        <header className="header-container">
                <Link to="/">
                    <div className="header-container-left">
                            <h1>JS BAND STORE / Moloshna Mariia</h1>
                    </div>
                </Link>
                {getValueFromStorageSignin() === "true" &&
                    <div className="header-container-right"> 
                        <Link to="/cart">
                            <span style={{"background": "#cf5c36"}}>{countCartItems}</span>
                            <img src={imgCart} alt="cart" />   
                        </Link>                   
                        <Link to="/signin" onClick={onSignOut}><span id="signout">SignOut</span></Link>              
                        <div className="userAcc">
                        <div className="circle">
                        </div>
                        <div>
                            <h2>{userName}</h2>
                        </div> 
                        </div>   
                    </div>
                }
        </header>
    );
}

export default Header;