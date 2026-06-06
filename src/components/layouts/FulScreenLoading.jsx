export default function FullScreenLoader() {
  return (
    <div
      className="fixed inset-0 z-[99999999999999] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/bg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Spinner */}
      <div className="relative z-10">
        <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
      </div>
    </div>
  );
}