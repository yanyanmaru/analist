import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="pt-4 px-4 border-solid border-2 bg-white rounded-xl shadow-lg"
        >
      {/* <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div> */}
      <h3 className="font-bold mb-3 leading-snug  text-center">
        
          {title}
        
      </h3>
      <p className="text-lg leading-relaxed mb-4 text-center">{excerpt}</p>
      {/* <Avatar name={author.name} picture={author.picture} /> */}
      <div className="text-sm text-gray-500 mb-4 text-center">
        <DateFormatter dateString={date} />
      </div>
    </Link>
  );
}
