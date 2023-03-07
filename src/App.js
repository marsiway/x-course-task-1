import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin/Signin'
import Book_list from './components/Book_list/Book_list'
import Specific_Book from './components/Specific_Book/Specific_Book'
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { initialStorageSignin, getValueFromStorageSignin, setValueForStorageSignin } from './storage/signin-storage';
import { initialStorageUsername, getValueFromStorageUsername, setValueForStorageUsername } from './storage/username-storage';
import { getCountCartItemsInStorage, initialStorageCart } from './storage/cart-storage';
import './App.css';
import ErrorPage from './components/Home';

const App = () => {
  const [userSignin, setUserSignin] = useState(getValueFromStorageSignin());
  const [userName, setUserName] = useState(getValueFromStorageUsername());
  const [countCartItems, setCountCartItems] = useState(getCountCartItemsInStorage());

  const onSignIn = (userName) => {
    setValueForStorageSignin("true")
    setValueForStorageUsername(userName)
    setUserSignin(!userSignin);
    setUserName(userName);
  }

  const onSignOut = () => {
    setValueForStorageSignin("false");
    setValueForStorageUsername("");
    setUserSignin(!userSignin);
    setUserName("");
  }

  const onChangeCountCartItems = (one) => {
    setCountCartItems(countCartItems + one);
  }

  useEffect(() => {
    console.log("Initial Local Storage");
    initialStorageSignin();
    initialStorageUsername();
    initialStorageCart();
  }, []);

  return (
    <div className="app">
      <Header userName={userName} countCartItems={countCartItems} onSignOut={onSignOut}/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<Signin onSignIn={onSignIn}/>} />
          <Route path="/cart" element={<Cart onChangeCountCartItems={onChangeCountCartItems} />} />
          <Route path="/books" element={<Book_list/>} />
          <Route path="/books/:bookID" element={<Specific_Book onChangeCountCartItems={onChangeCountCartItems}/>} />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
