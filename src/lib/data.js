export const getAllBooks =async () =>{
    const res = await fetch("https://online-book-borrowing-platformm-wit.vercel.app/books.json");
    const books = await res.json();
    return books;
} 