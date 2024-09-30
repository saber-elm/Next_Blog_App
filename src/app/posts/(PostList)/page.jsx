// import { Suspense } from "react";
// import Loading from "../loading";
import { cookies } from "next/headers";
import PostList from "../_components/PostList";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";
import queryString from "query-string";
import Search from "@/ui/Search";

// export const revalidate = 15;
// export const experimental_ppr = true;
// export const dynamic = "force-dynamic";

async function BlogPage({ searchParams }) {
  const queries = queryString.stringify(searchParams);
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  const posts = await getPosts(queries, options);
  const { q } = searchParams;

  return (
    <div>
      {posts.length > 0 ? (
        <h1 className="mb-8 text-lg text-secondary-700">لیست پست ها</h1>
      ) : (
        <p className="text-lg text-secondary-700">
          پستی با توجه به عبارت{" "}
          {<span className="font-bold">&quot;{q}&quot;</span>} یافت نشد!
        </p>
      )}

      {/* <Suspense fallback={<Loading />}> */}
      <PostList posts={posts} />
      {/* </Suspense> */}
    </div>
  );
}
export default BlogPage;
