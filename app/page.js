import Header from "../components/Header";
import VideoHero from "../components/VideoHero";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Rates from "../components/Rates";
import QuoteSection from "../components/QuoteSection";
import About from "../components/About";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <div>
      <Header />
      <VideoHero />
      <Hero />
      <Services />
      <Rates />
      <QuoteSection />
      <About />
      <FAQ />
    </div>
  );
}
