export function HeroGraphSkeleton() {
  return (
    <div className="animate-pulse p-4 border-4 border-gray-300 rounded h-full">
      <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4"></div>
      <div className="flex justify-center gap-4 mb-4">
        <div className="h-8 bg-gray-300 rounded w-1/4"></div>
        <div className="h-8 bg-gray-300 rounded w-1/4"></div>
        <div className="h-8 bg-gray-300 rounded w-1/4"></div>
      </div>
      <div className="flex justify-center gap-4">
        <div className="h-8 bg-gray-300 rounded w-1/5"></div>
        <div className="h-8 bg-gray-300 rounded w-1/5"></div>
        <div className="h-8 bg-gray-300 rounded w-1/5"></div>
        <div className="h-8 bg-gray-300 rounded w-1/5"></div>
      </div>
    </div>
  );
}

export function HeroListSkeleton() {
  return (
    <div className="animate-pulse h-full skeleton-height flex flex-wrap md:flex-col gap-2 justify-center">
      <div className="h-9 bg-gray-300 rounded-full w-28 md:w-full mb-2"></div>
      <div className="h-9 bg-gray-300 rounded-full w-32 md:w-full mb-2"></div>
      <div className="h-9 bg-gray-300 rounded-full w-36 md:w-full mb-2"></div>
      <div className="h-9 bg-gray-300 rounded-full w-40 md:w-full mb-2"></div>
      <div className="h-9 bg-gray-300 rounded-full w-36 md:w-full mb-2"></div>
      <div className="h-9 bg-gray-300 rounded-full w-32 md:w-full mb-2"></div>
      <div className="h-9 bg-gray-300 rounded-full w-28 md:w-full mb-2"></div>
      <div className="h-9 bg-gray-300 rounded-full w-32 md:w-full mb-2"></div>
      <div className="h-9 bg-gray-300 rounded-full w-28 md:w-full mb-2"></div>
      <div className="h-9 bg-gray-300 rounded-full w-32 md:w-full mb-2"></div>
    </div>
  )
}