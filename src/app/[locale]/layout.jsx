import Banner from "@/components/banner";
import Footer from "@/components/layouts/Footer";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
      {children}
    </div>
  );
}