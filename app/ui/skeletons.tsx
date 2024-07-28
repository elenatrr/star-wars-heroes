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

export function HeroesListSkeleton() {
  return (
    <div className="animate-pulse h-full">
      <div className="h-8 bg-gray-300 rounded w-full mb-4"></div>
      <div className="h-8 bg-gray-300 rounded w-full mb-4"></div>
      <div className="h-8 bg-gray-300 rounded w-full mb-4"></div>
      <div className="h-8 bg-gray-300 rounded w-full mb-4"></div>
      <div className="h-8 bg-gray-300 rounded w-full mb-4"></div>
      <div className="h-8 bg-gray-300 rounded w-full mb-4"></div>
      <div className="h-8 bg-gray-300 rounded w-full mb-4"></div>
      <div className="h-8 bg-gray-300 rounded w-full mb-4"></div>
      <div className="h-8 bg-gray-300 rounded w-full mb-4"></div>
    </div>
  )
}