"use client";
import {
  ArrowLeftIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

function NotFound() {
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
          <div>
            <QuestionMarkCircleIcon className="w-20 h-20 mx-28 mb-4 text-red-600" />
            <p className="text-xl font-bold text-red-600 mb-8">
              هیچ پستی با این مشخصات یافت نشد!
            </p>
            <Link
              href={"/posts"}
              className="flex items-center gap-x-2 text-secondary-500"
            >
              <span>انتقال به صفحه پست ها</span>
              <ArrowLeftIcon className="w-6 h-6 text-red-600" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
