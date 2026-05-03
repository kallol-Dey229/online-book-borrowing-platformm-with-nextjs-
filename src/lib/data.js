export const getAllBooks =async () =>{
    const res = await fetch("https://raw.githubusercontent.com/kallol-Dey229/online-book-borrowing-platform-with-nextjs/main/public/books.json");
    const books = await res.json();
    return books;
}