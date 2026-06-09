import About from "@/components/About";
import Brands from "@/components/Brands";
import Header from "@/components/layouts/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import Banner from "@/components/banner";
import Footer from "@/components/layouts/Footer";

export default async function Home( { params } ) {
  const { locale } = await params;
  return (
    <>
      <Header locale={locale} />
      <Hero locale={locale} />
      <Brands locale={locale} />
      <Services locale={locale} />
      <Projects locale={locale} />
      <About locale={locale} />
      <WhyUs locale={locale} />
      <Testimonials locale={locale} />
    </>
  );
}
