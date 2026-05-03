'use client'
import AllBooksLeftSidebar from "@/components/AllBooksLeftSidebar";
import BookCard from "@/components/BookCard";
import { useEffect, useState } from "react";

const AllBooksPage = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [searchedBook, setSearchedBook] = useState("");
    const [activeCategory, setActiveCategory] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/books.json")
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                setFilteredBooks(data);
            });
    }, []);

    const handleSearch = () => {
        const expectedBook = books.filter(book => book.title.toLowerCase().includes(searchedBook.toLowerCase()));

        setFilteredBooks(expectedBook);
    };

    return (
        <div className="mx-5 md:mx-30 lg:mx-65">

            <div className="mt-10 flex items-center gap-2">
                <input
                    value={searchedBook}
                    onChange={e => setSearchedBook(e.target.value)}
                    className="border border-black p-1.5"
                    placeholder="search books"
                    type="text"
                />
                <button onClick={handleSearch} className="btn btn-primary">
                    Search
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-4">

                
                <div>
                    <AllBooksLeftSidebar
                        books={books}
                        setFilteredBooks={setFilteredBooks}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                    />
                </div>

                
                <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-4">
                    {
                        filteredBooks.map(book => (
                            <BookCard key={book.id} book={book} />
                        ))
                    }
                </div>

            </div>

        </div>
    );
};

export default AllBooksPage;