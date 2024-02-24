import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <>
    <h2 className="mb-8 text-2xl md:text-3xl font-bold tracking-tighter leading-tight ">
        最新のメモ
      </h2>
    <section className="pt-4 px-4 border-solid border-2 bg-white rounded-xl shadow-lg mb-12">
      <Link
         as={`/posts/${slug}`}
         href="/posts/[slug]"
         className=""
       >
     <h3 className="font-bold mb-3 leading-snug  text-center">
       
         {title}
       
     </h3>
     <p className="text-lg leading-relaxed mb-4 text-center">{excerpt}</p>
     {/* <Avatar name={author.name} picture={author.picture} /> */}
     <div className="text-sm text-gray-500 mb-4 text-center">
       <DateFormatter dateString={date} />
     </div>
   </Link>
   </section>
   </>
  );
}
