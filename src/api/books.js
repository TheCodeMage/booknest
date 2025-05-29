const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "A novel set in the Roaring Twenties, exploring themes of wealth, love, and the American Dream.",
        price: 10.99,
        coverImage: "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg"
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "A story of racial injustice and childhood innocence in the Deep South.",
        price: 8.99,
        coverImage: "https://images-na.ssl-images-amazon.com/images/I/81Otwki3IxL.jpg"
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        description: "A dystopian novel about totalitarianism and surveillance.",
        price: 9.99,
        coverImage: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg"
    }
];

export function fetchBooks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(books);
        }, 500);
    });
}

export function fetchBookById(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const book = books.find(b => b.id === parseInt(id));
            resolve(book);
        }, 500);
    });
}
