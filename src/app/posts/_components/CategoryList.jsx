import Link from "next/link";

async function CategoryList() {
  // await new Promise((res) => setTimeout(() => res(), 1000));

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();

  return (
    <ul className="space-y-4">
      <Link href={"/posts"}>همه</Link>
      {categories.map((category) => (
        <li key={category._id}>
          <Link href={`/posts/category/${category.slug}`}>
            {category.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
