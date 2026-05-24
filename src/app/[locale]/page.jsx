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
      <Brands />
      <Services />
      <Projects />
      <About />
      <WhyUs />
      <Testimonials />
      <Banner locale={locale} />
      <Footer locale={locale} />
    </>
  );
}
