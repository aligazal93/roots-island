export default function LoadingCard() {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
        <div className="absolute inset-0 rounded-full border-4 border-t-primary border-transparent animate-spin" />
      </div>
    </div>
  );
}