import Link from "next/link";
import Image from "next/image";
// Adjust the path according to your project structure

export default function Navbar() {
    return (
        <>
            <header className="px-5 py-3 text-black shadow-sm font-work-sans">
                <nav className="flex justify-between items-center">
                    <Link href="/">
                        <Image src="/logo.png" width={180} height={40} alt="College Connect" />
                    </Link>
                    <div className='flex-grow flex justify-center items-center'>
                        <ul className='hidden md:flex gap-7 text-black'>
                            <li><a href="#Header" className="relative border-2  border-gray-800 bg-transparent py-2.5 px-5 font-extrabold uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">Home</a></li>
                            <li><a href="#Header" className="relative border-2  border-gray-800 bg-transparent py-2.5 px-5 font-extrabold uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">Events</a></li>
                            <li><a href="#Header" className="relative border-2  border-gray-800 bg-transparent py-2.5 px-5 font-extrabold uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">Notes</a></li>
                            <li><a href="#Header" className="relative border-2  border-gray-800 bg-transparent py-2.5 px-5 font-extrabold uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">Contact</a></li>
                        </ul>
                    </div>
                    <button className="relative border-2  border-gray-800 bg-transparent py-2.5 px-5 font-extrabold uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">Login</button>
                </nav>
            </header>
        </>
    );
}
