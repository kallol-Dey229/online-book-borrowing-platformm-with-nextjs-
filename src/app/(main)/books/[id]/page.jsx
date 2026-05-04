
import BorrowButton from "@/components/BorrowButton";
import { getAllBooks } from "@/lib/data";
import Image from "next/image";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";




const BooksDetails = async ({ params }) => {
    const { id } = await params;
    const books =await getAllBooks();
    const { image_url, title, author, category, description, available_quantity } = books.find(b => b.id.toString() === id);


    const session = await auth.api.getSession({
            headers: await headers(),
        });

        
    
    return (
<div>
    {
        session?.user ? (
            <div className="flex gap-5 p-5 bg-base-100 shadow-sm mx-5 md:mx-30 lg:mx-65 mt-20">
            <figure className="mt-10 md:mt-0">
                <Image  src={image_url} alt={title} height={2000} width={2000}></Image>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Author: {author}</p>
                <p>Type: {category}</p>
                <p>Available: {available_quantity}</p>
                <p>{description}</p>

                <BorrowButton title={title}></BorrowButton>
                
            </div>
        </div>
        ) : (
            redirect('/login')
        )
    }
</div>
    );
};

export default BooksDetails;



        