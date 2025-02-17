import CategoriesList from "@/components/CategoriesList";
import Image from "next/image";
import { postData } from "@/data";
import Startupcard from "@/components/Startupcard";
import Post from "@/components/Post";

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
          <section>
          {postData && postData.length > 0 ? (
              postData.map((post) => (
                <Post
                  key={post.id}
                  id={post.id}
                  author={post.author}
                  description={post.description}
                  links={post.links || []}
                  datePublished={post.datePublished}
                  title={post.title}
                  content={post.content}
                  category={post.category}
                  thumbnail={post.thumbnails || []}
                  authorEmail={'test@gmail.com'}
                  image={post.image}
                />
              ))
            ) : (
              <div>No Post to Display</div>
            )}
        </section>

      </section>

    </>
  );
}







                {/* <ul className="mt-7 card_grid">
          {postData && postData.length > 0 ? (
            postData.map((post: StartupCardType) => (
              <Startupcard key={post.id} post={post} />
            ))
          ) : (
            <p className="no_results">No Posts Found</p>
          )}
        </ul> */}