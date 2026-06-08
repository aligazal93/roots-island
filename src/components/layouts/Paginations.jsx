import Link from "next/link";

export default function Pagination({ currentPage, totalPages, basePath }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const createHref = (page) => {
    return page === 1 ? basePath : `${basePath}?page=${page}`;
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <Link
        href={createHref(currentPage - 1)}
        aria-disabled={currentPage === 1}
        className={`flex h-10 min-w-10 items-center justify-center rounded-xl border px-4 text-custom14 font-bold transition-all duration-300 ${
          currentPage === 1
            ? "pointer-events-none border-gray-100 bg-gray-50 text-gray-300"
            : "border-gray-100 bg-white text-secondary hover:border-primary hover:bg-primary hover:text-white"
        }`}
      >
        السابق
      </Link>

      {pages.map((page) => (
        <Link
          key={page}
          href={createHref(page)}
          className={`flex h-10 w-10 items-center justify-center rounded-xl border text-custom14 font-bold transition-all duration-300 ${
            currentPage === page
              ? "border-primary bg-primary text-white shadow-md"
              : "border-gray-100 bg-white text-secondary hover:border-primary hover:bg-primary/10 hover:text-primary"
          }`}
        >
          {page}
        </Link>
      ))}

      <Link
        href={createHref(currentPage + 1)}
        aria-disabled={currentPage === totalPages}
        className={`flex h-10 min-w-10 items-center justify-center rounded-xl border px-4 text-custom14 font-bold transition-all duration-300 ${
          currentPage === totalPages
            ? "pointer-events-none border-gray-100 bg-gray-50 text-gray-300"
            : "border-gray-100 bg-white text-secondary hover:border-primary hover:bg-primary hover:text-white"
        }`}
      >
        التالي
      </Link>
    </div>
  );
}