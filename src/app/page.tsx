// components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cars from "./components/Cars";
import About from "./components/About";
import Why from "./components/Why";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import BackToTopBtn from "./components/BackToTopBtn";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Cta />
      <Footer />
      <Copyright />
      <BackToTopBtn />
    </main>
  );
}
