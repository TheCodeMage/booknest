import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookById } from '../api/books';

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBookById(id).then(data => {
            setBook(data);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <div>Loading book details...</div>;
    }

    if (!book) {
        return <div>Book not found.</div>;
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <img src={book.coverImage} alt={book.title} style={{ width: '150px' }} />
            <p>{book.description}</p>
            <p><strong>Price:</strong> ${book.price.toFixed(2)}</p>
        </div>
    );
};

export default BookDetail;
