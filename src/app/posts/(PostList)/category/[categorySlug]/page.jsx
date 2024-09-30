import { getPosts } from "@/services/postServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import PostList from "app/posts/_components/PostList";
import { cookies } from "next/headers";
import queryString from "query-string";

async function Category({ params, searchParams }) {
  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?categorySlug=${categorySlug}&${queries}`,
  //     options
  //   );
  //   const { data } = await res.json();
  //   const { posts } = data || {};

  const { categorySlug } = params;
  const queries =
    `categorySlug=${categorySlug}&` + queryString.stringify(searchParams);
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  const posts = await getPosts(queries, options);
  const { q } = searchParams;

  return (
    <div>
      {q && posts.length === 0 ? (
        <p className="text-lg text-secondary-700">
          پستی با توجه به عبارت{" "}
          {<span className="font-bold">&quot;{q}&quot;</span>} در این دسته بندی
          یافت نشد!
        </p>
      ) : posts.length === 0 ? (
        <p className="text-lg text-secondary-700">
          پستی در این دسته بندی پیدا نشد!
        </p>
      ) : (
        <PostList posts={posts} />
      )}

      {/* {posts.length === 0 ? (
        <p className="text-lg text-secondary-600">
          پستی در این دسته بندی پیدا نشد!
        </p>
      ) : (
        <PostList posts={posts} />
      )} */}
    </div>
  );
}
export default Category;
