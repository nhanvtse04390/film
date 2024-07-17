import Link from 'next/link';
import styles from '@/app/styles/Header.module.css'; // CSS module for styling

const Header = () => (
    <header className="bg-blacknpm  text-white py-4">
        <div className="container mx-auto flex items-center justify-between pl-2 pr-2">
            <div className="flex items-center">
                <Link href="/" className="text-xl font-bold hover:text-gray-300">
                    MovieApp
                </Link>
                <nav className="ml-6 space-x-4">
                    <Link href="/" className="hover:text-gray-300">
                        Home
                    </Link>
                    <Link href="/movies" className="hover:text-gray-300">
                        Movies
                    </Link>
                    <Link href="/about" className="hover:text-gray-300">
                        About Us
                    </Link>
                </nav>
            </div>
            <div className="flex items-center">
                <input type="text" placeholder="Search..."
                       className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-cyan-950"/>
                <button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Search</button>
            </div>
        </div>
    </header>
);

export default Header;