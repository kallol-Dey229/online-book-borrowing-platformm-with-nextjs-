export const getAllBooks =async () =>{
    const res = await fetch("https://online-book-borrowing-pl-git-fb4010-kalloldey067-6979s-projects.vercel.app/books.json",{cache:"no-store"});
    const books = await res.json();
    return books; 
}