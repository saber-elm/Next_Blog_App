import Image from "next/image";
import Link from "next/link";

function CoverImage({ text, coverImageUrl, slug }) {
  return (
    <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden mb-8">
      <Link href={`/posts/${slug}`}>
        <Image
          src={coverImageUrl}
          fill
          alt={text}
          className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
        />
      </Link>
    </div>
  );
}
export default CoverImage;
