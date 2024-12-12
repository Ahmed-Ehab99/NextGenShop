import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl space-y-10 px-5 py-10">
      <div className="flex flex-col gap-10 md:flex-row lg:gap-20">
        <div className="basis-2/5">
          <Skeleton className="aspect-square w-[464px]" />
        </div>
        <div className="basis-3/5 space-y-5">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-14 w-28" />
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-7 w-40" />
          <Skeleton className="h-16 w-48" />
          <Skeleton className="h-16 w-56" />
        </div>
      </div>
    </main>
  );
}