import Image from "next/image"
import Link from "next/link"
interface PostProps {
    id:string,
    author:string,
    date:string,
    thumbnail?:string,
    authorEmail?:string,
    image?:string,
    title:string,
    content:string,
    category?:string,
    description:string,
    links?:string[],

}




export default function Post({
    id,
    author, 
    description, 
    links, 
    date: datePublished, 
    title, 
    content, 
    category, 
    thumbnails, 
    authorEmail, 
    image,
}: PostProps){
    return(
        <>
        
        <li  className="startup_card group">
            <div className="flex-between">
                <p className="startup_card_date">
                    {title}
                </p>
            </div>
            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${id}`}></Link>
                    <p className="text-16-medium line-clamp-1">{author}</p>
                </div>
            </div>
        </li>

        
        </>
    )
}