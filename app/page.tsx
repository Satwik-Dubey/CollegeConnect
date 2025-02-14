import CategoriesList from "@/components/CategoriesList";
import Image from "next/image";

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
      </section>

      <section className=" my-10 ml-10">
        <CategoriesList/>
      </section>

      

    </>
  );
}

{/* <h1 className="uppercase text-white px-6 py-3 font-work-sans font-extrabold sm:text-[54px] sm:leading-[64px] text-[36px]  max-w text-center my-5">Home</h1> */}