import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Reviews } from "@/components/sections/Reviews";
import { Blog } from "@/components/sections/Blog";
import { CTA } from "@/components/sections/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Work />
        <Reviews />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
