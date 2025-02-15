import CategoriesList from "@/components/CategoriesList";
import Image from "next/image";
import { postData } from "@/data";
import Startupcard from "@/components/Startupcard";

export default function Home() {
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Create Events, Join Events, <br />
          Post Freely, Grab Notes !
        </h1>
        <p className="sub-heading !max-w-3xl font-work-sans font-bold">
          Create Events, Join the Fun, Post Your Thoughts, and Collect Notes Effortlessly.
        </p>
      </section>
      <section className="section_container" > 
        <p className="text-30-bold text-center font-work-sans font-extrabold">All Post </p>
        <section className=" ml-96 mt-20">
        <CategoriesList/>
        </section>
        {/* <ul className="mt-7 card_grid">
          {postData && postData.length > 0 ? (
            postData.map((post: StartupCardType, index: number) => (
              <Startupcard key={post.id} post={post} />
            ))
          ) : (
            <p className="no_results">No Posts Found</p>
          )}
        </ul> */}
      </section>



      

    </>
  );
}

{/* <h1 className="uppercase text-white px-6 py-3 font-work-sans font-extrabold sm:text-[54px] sm:leading-[64px] text-[36px]  max-w text-center my-5">Home</h1> */}