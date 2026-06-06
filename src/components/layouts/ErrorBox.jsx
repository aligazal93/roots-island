import { getDictionary } from "@/utils/getDictionary";

export default function ErrorState({ message, onRetry, locale }) {
      const dict = getDictionary(locale);
    
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative z-10 w-[90%] max-w-md bg-white rounded-2xl p-6 text-center shadow-xl animate-fadeIn">
        
        {/* Icon */}
        <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-red-100 text-red-500 text-2xl mb-4">
          ⚠️
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {message || "Something went wrong"}
        </h2>


        {/* Button */}
        {onRetry && (
          <button
            onClick={onRetry}
            className="w-full px-5 py-3 bg-primary text-white rounded-xl hover:opacity-90 transition"
          >
            {dict.tryAgain}
          </button>
        )}
      </div>
    </div>
  );
}