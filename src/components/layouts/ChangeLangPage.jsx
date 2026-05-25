"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function ChangeLanguagePage({
  locale,
  isScrolled,
}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleChangeLanguage = () => {
    const newLocale = locale === "ar" ? "en" : "ar";

    const newPath = pathname.replace(
      `/${locale}`,
      `/${newLocale}`
    );

    router.push(newPath);
  };

  return (
    <button
      onClick={handleChangeLanguage}
      className={`flex duration-300 transition-all hover:text-primary px-4 py-2 items-center gap-2 outline-none ${
        isScrolled ? "text-secondary" : "text-secondary"
      }`}
    >
      {locale === "ar" ? "En" : "عـربـي"}

        <Image
          src="/images/lang-2.png"
          width={20}
          height={20}
          alt="lang"
          priority
        />

    </button>
  );
}