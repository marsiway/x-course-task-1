import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import BookCard from '../BookCard/BookCard';
import { getValueFromStorageSignin } from '../../storage/signin-storage';
import SeacrhIcon from './../../datas/img/analytics.png';
import jsonData from '../../datas/data/books.json';
import './Book_list.css';

const Book_list = () => {    
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState(jsonData.books);

    const options = [
        { value: '0', label: 'Select book price' },
        { value: '10', label: 'Price < 10$' },
        { value: '20', label: 'Price < 20$' },
        { value: '30', label: 'Price < 30$' },
        { value: '40', label: 'Price < 40$' },
        { value: '50', label: 'Price < 50$' },
      ];

    const searchBooks = (searchTerm) => {
      if (searchTerm.length === 0) {
        setBooks(jsonData.books);
      } else {
        setBooks(
            jsonData.books.filter(
                book => book.title.toLowerCase().includes(searchTerm.toLowerCase())
        ));
      }
    }

    const searchBooksByPrice = (price) => {
        if (searchTerm.trim().length === 0) {
            setBooks(jsonData.books.filter(book => book.price < price));
        } else {
            setBooks(jsonData.books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()) && book.price < price));
        }
    }

    if (getValueFromStorageSignin() === "false") {
        return (
            <Navigate to="/signin"/>
        );
    }

    return ( 
        <main className='container'>
            <div className="searchselect">
                <div className='search'>
                    <input 
                        placeholder="Search for books by name"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <img 
                        src={SeacrhIcon}
                        alt="search icon"
                        onClick={() => searchBooks(searchTerm)}
                    />
                </div>
                <div className="select">
                    <select onChange={(e) => {searchBooksByPrice(e.target.value)}}>
                        {options.map(option => (
                            <option key={Math.random(0, 100)} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
            </div>
            {books.length > 0
                ? (
                    <div className="container">
                        {books.map(book => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No books found</h2>
                    </div>
                )
            }
        </main>
    );    
}
 
export default Book_list;
