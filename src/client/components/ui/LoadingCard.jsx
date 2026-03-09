export const LoadingCard = () => (
  <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 animate-pulse">
    <div className="space-y-4">
      <div className="h-6 bg-gray-200 rounded-lg w-1/3"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
      <div className="pt-2">
        <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
      </div>
    </div>
  </div>
);

export const LoadingCards = ({ count = 3 }) => (
  <div className="space-y-4">
    {Array.from({ length: count }).map((_, i) => (
      <LoadingCard key={i} />
    ))}
  </div>
);
