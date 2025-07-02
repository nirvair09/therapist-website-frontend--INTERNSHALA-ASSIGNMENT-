import Hero from "../components/Hero";
import About from "../components/About";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import VideoHero from "../components/VideoHero";
import Header from "../components/Header";
import Services from "../components/Services";
import Rates from "../components/Rates";
import QuoteSection from "../components/QuoteSection";

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
      <ContactForm />
    </div>
  );
}
