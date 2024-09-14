import { Spinner } from "@/ui/Spinner";

function Loading() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <span className="text-lg text-secondary-500">
        در حال بارگذاری اطلاعات پست
      </span>
      <Spinner />
    </div>
  );
}
export default Loading;
