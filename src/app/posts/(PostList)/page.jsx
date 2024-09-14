import { Suspense } from "react";
import Loading from "../loading";
import PostList from "../_components/PostList";

export const revalidate = 15;
export const experimental_ppr = true;

async function BlogPage() {
  return (
    <div className="">
      <h1>لیست پست ها</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic
        assumenda odio molestiae sint et accusantium quibusdam reiciendis
        tenetur recusandae enim aut ab aperiam quidem totam optio modi minus
        fugit a saepe, magnam voluptatem sequi suscipit nam! Optio neque
        excepturi deserunt, labore magnam incidunt impedit fugit, ipsa autem
        ipsum repudiandae voluptate explicabo. Odio optio voluptates esse dolor
        doloremque tempore perferendis.
      </p>
      <Suspense fallback={<Loading />}>
        <PostList />
      </Suspense>
    </div>
  );
}
export default BlogPage;
