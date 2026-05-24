import About from "@/components/About";
import Brands from "@/components/Brands";
import Header from "@/components/layouts/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";

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
    </>
  );
}
