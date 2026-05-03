export const getAllBooks =async () =>{
    const res = await fetch("http://localhost:3000/books.json");
    const books = await res.json();
    return books;
}