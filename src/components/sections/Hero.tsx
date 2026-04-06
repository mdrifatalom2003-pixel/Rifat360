import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(202_100%_50%/0.15),transparent_60%)]" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">AI Automation · AI Consulting · SEO</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading leading-tight text-primary-foreground mb-6">
            Helping Local Businesses <br />
            <span className="text-primary">Scale with AI</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 font-body max-w-2xl mx-auto mb-10">
            Smart automation, AI strategy, and SEO solutions designed to help local service businesses grow faster and work smarter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-body" asChild>
              <a href="#contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="font-body border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="#services">View Services</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
