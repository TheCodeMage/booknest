import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between">
                <Link to="/" className="text-xl font-bold">BookNest</Link>
                <div>
                    <Link to="/books" className="mr-4 hover:underline">Books</Link>
                    <Link to="/cart" className="hover:underline">Cart</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
