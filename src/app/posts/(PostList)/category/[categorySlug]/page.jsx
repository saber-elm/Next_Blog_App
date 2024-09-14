import PostList from "app/posts/_components/PostList";

async function Category({ params }) {
  const { categorySlug } = params;
  console.log(categorySlug);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?categorySlug=${categorySlug}`
  );

  const { data } = await res.json();
  const { posts } = data || {};
  //   console.log({ posts });

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-lg text-secondary-600">
          پستی در این دسته بندی پیدا نشد!
        </p>
      ) : (
        <PostList />
      )}
    </div>
  );
}
export default Category;
