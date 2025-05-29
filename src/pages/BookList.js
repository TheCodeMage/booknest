import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../api/books';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBooks().then(data => {
            setBooks(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Loading books...</div>;
    }

    return (
        <div>
            <h2>Book List</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {books.map(book => (
                    <li key={book.id} style={{ marginBottom: '20px' }}>
                        <Link to={`/books/${book.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <h3>{book.title}</h3>
                            <p>by {book.author}</p>
                            <img src={book.coverImage} alt={book.title} style={{ width: '100px' }} />
                            <p>${book.price.toFixed(2)}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
