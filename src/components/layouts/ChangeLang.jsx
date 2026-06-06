"use client";

import { setLang } from "@/utils/lang";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function ChangeLanguage({ locale, isScrolled }) {
  const queryClient = useQueryClient();
  const pathname = usePathname();
  const router = useRouter();

   const handleChangeLanguage = () => {
    const newLocale = locale === "ar" ? "en" : "ar";

    setLang(newLocale); // 👈 هنا المهم

    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);

    queryClient.invalidateQueries(); // 👈 reload all data
  };

  return (
    <button
      onClick={handleChangeLanguage}
      className={`flex duration-300 transition-all hover:text-primary px-4 py-2 items-center gap-2 outline-none ${
        isScrolled ? "text-secondary" : "text-white"
      }`}
    >
      {locale === "ar" ? "En" : "عـربـي"}

      {isScrolled ? (
        <Image
          src="/images/lang-2.png"
          width={20}
          height={20}
          alt="lang"
          priority
        />
      ) : (
        <Image
          src="/images/lang.png"
          width={20}
          height={20}
          alt="lang"
          priority
        />
      )}
    </button>
  );
}
