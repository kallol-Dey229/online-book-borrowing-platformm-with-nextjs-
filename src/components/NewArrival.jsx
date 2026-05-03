import Marquee from 'react-fast-marquee';
import { BsDot } from 'react-icons/bs';

const NewArrival =async () => {
    // const res = await fetch("http://localhost:3000/books.json");
    // const books = await res.json();
    return (
        
            <div className='flex justify-between gap-4 items-center bg-gray-200 px-2 py-4 mx-5 md:mx-30 lg:mx-65'>
                <button className='bg-red-700 text-white rounded-sm'>New Arrival</button>
                {/* <Marquee pauseOnHover={true}>
                    { books.map(book => book.new_arrival === true && (<span className='flex items-center' key={book.id}>{book.title} <BsDot /></span>) ) }| Special Discount on Memberships...
                </Marquee> */}
            </div>
        
    );
};

export default NewArrival;