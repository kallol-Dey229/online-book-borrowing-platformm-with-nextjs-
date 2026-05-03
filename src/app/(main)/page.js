import bannerImg from '@/assets/banner.png'
import BookCard from '@/components/BookCard';
import Link from 'next/link';
import { BsLightningChargeFill } from 'react-icons/bs';
import { FaBook, FaSearch } from 'react-icons/fa';
import { GrMoney } from 'react-icons/gr';
import 'animate.css';
import { getAllBooks } from '@/lib/data';

export default async function Home() {

 
  const books = await getAllBooks();

  return (
    <div className='mx-5 md:mx-30 lg:mx-65'>
      <div
        className="min-h-screen mt-10 flex items-center justify-center"
        style={{
          backgroundImage: `url(${bannerImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white text-center px-4">
          <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-bold">
            Welcome to, Online Book Borrowing Platform
          </h1>

          <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-7'>Find Your Next Read...</h2>

          <Link href={'/allbooks'}>
            <button className='btn btn-primary'>Browse Now</button>
          </Link>
        </div>
      </div>

      <h2 className='mt-20 font-bold text-2xl'>Top Books</h2>

      <div className='mt-10 grid grid-cols-2 md:grid-cols-3 gap-4'>
        {
          books.slice(0, 4).map(book => <BookCard key={book.id} book={book}></BookCard>)
        }
      </div>






<h2 className="mt-20 font-bold text-2xl">New Arrivals</h2>

<div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
  {books
    .filter(book => book.new_arrival === true)
    .slice(0, 3)
    .map(book => (
      <BookCard key={book.id} book={book} />
    ))}
</div>







 <div className="mt-20 bg-gray-100 py-10 rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-8">
        Our Platform in Numbers
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-blue-600">500+</h3>
          <p className="mt-2 text-gray-600">Books Available</p>
        </div>

        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-green-600">200+</h3>
          <p className="mt-2 text-gray-600">Active Users</p>
        </div>

        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-purple-600">1K+</h3>
          <p className="mt-2 text-gray-600">Books Borrowed</p>
        </div>

        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-red-600">24/7</h3>
          <p className="mt-2 text-gray-600">Support</p>
        </div>

      </div>
    </div>











      <h2 className="mt-20 font-bold text-2xl">Why Choose Us</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        <div className="p-4 bg-gray-100 rounded-xl flex items-center gap-2 text-center justify-center"><FaBook /> Huge Book Collection</div>
        <div className="p-4 bg-gray-100 rounded-xl flex items-center gap-2 text-center justify-center"><BsLightningChargeFill /> Fast Borrow Process</div>
        <div className="p-4 bg-gray-100 rounded-xl flex items-center gap-2 text-center justify-center"><GrMoney /> Free Access</div>
        <div className="p-4 bg-gray-100 rounded-xl flex items-center gap-2 text-center justify-center"><FaSearch /> Easy Search</div>
      </div>
    </div>
  );
}