import { CategoriesData } from "@/data";
import Link from 'next/link';

export default function CategoriesList() {
    return (
        <div className="flex gap-2 text-sm flex-wrap">
        
            {CategoriesData && CategoriesData.map((category) => (
                <Link className="relative border-2  border-gray-800 bg-transparent py-2.5 px-5 font-work-sans font-extrabold uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100" key={category.id} href={`/categories/${category.name}`}>
                    {category.name}
                </Link>
            ))}
        </div>
    );
}