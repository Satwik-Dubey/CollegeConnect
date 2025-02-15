import Image from 'next/image';
export default function SignInBtns(){
    return(
        <>
            <h1 className="text-center text-3xl font-work-sans font-bold mt-72 ">Sign In </h1>
            <div className='mt-10 p-4 flex flex-col items-center justify-center gap-4'>
                <button className="flex items-center relative -top-1 -left-1 bg-black py-4 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
                    <span className='mr-5'>
                        <Image src={"/social.png"} alt="Google" width={30} height={30} />
                    </span>
                    Sign In with Github
                </button>
                <button className="flex items-center relative -top-1 -left-1 bg-black py-4 mt-5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
                    <span className='mr-5'>
                        <Image src={"/google2.png"} alt="Google" width={30} height={30} />
                    </span>
                    Sign In with Google
                </button>
            </div>
        </>
    )
}