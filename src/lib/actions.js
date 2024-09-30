"use server";

import { createCommentApi } from "@/services/commentService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

// export async function createComment(postId, parentId, formData) {
export async function createComment(prevState, { postId, parentId, formData }) {
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);

  const rawFormData = {
    postId,
    parentId,
    text: formData.get("text"),
  };

  try {
    const { message } = await createCommentApi(rawFormData, options);
    revalidatePath("/posts/[slug]");
    return { message };
  } catch (err) {
    const error = err?.response?.data?.message;
    return { error };
  }
}
