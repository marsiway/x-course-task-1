import { Navigate, Link, useParams } from 'react-router-dom';
import { getValueFromStorageSignin } from '../../storage/signin-storage';
import AddToCartForm from '../AddCart/AddCart';
import jsonData from '../../datas/data/books.json';
import './Specific_Book.css';

const Specific_Book = ({ onChangeCountCartItems }) => {
    const params = useParams();
    const book = jsonData.books[params.bookID - 1];

    const correctId = (bookId) => {
        if ( bookId === 0 ) {
            return jsonData.books.length;
        } else if (bookId === jsonData.books.length + 1) {
            return 1;
        } else {
            return bookId % (jsonData.books.length + 1);
        }
    }

    if (getValueFromStorageSignin() === "false") {
        return (
            <Navigate to="/signin"/>
        );
    }

    return (
        <main className="book">
            <div className="pagination-container">
                <Link to={'/books/' + correctId(book.id - 1) }>&lt;&lt;</Link>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <Link to={'/books/' + correctId(book.id + 1) }>&gt;&gt;</Link>
            </div>
            <div className="container">
                <div>
                    <img 
                        src={book.image !== "" ? book.image : "https://via.placeholder.com/400"} 
                        alt={book.title}
                    />
                </div>
                <div className='info'>
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                    <p>{book.shortDescription}</p>
                </div>
                <div>
                    <AddToCartForm book={book} onChangeCountCartItems={onChangeCountCartItems}/>
                </div>
            </div>
            <div className="container">
                <p>{book.description}</p>
            </div>
        </main> 
     );
}
 
export default Specific_Book;
