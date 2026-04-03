import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import rifatPhoto from "@/assets/rifat-photo.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-muted/50 via-muted/20 to-background"
    >
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.12] via-primary/[0.05] to-transparent pointer-events-none" />
      
      {/* Decorative elements with better visibility */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Badge - Full width centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted/80 text-primary text-sm font-medium border border-primary/30 backdrop-blur-sm shadow-lg">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Open to Strategic Collaborations
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="text-center lg:text-left">

            {/* Headline - Optically centered with controlled line breaks */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-heading font-normal leading-[1.2] tracking-tight text-foreground mb-8 lg:text-left"
            >
              <span className="block">AI Automation Systems</span>
              <span className="block">That Replace Manual Work</span>
              <span className="block text-muted-foreground mt-3">for Local & Service Businesses</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-12 font-body leading-relaxed lg:text-left"
            >
              I help local &amp; service-based businesses save time and reduce manual work by building AI-powered automations and AI agents
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#contact" className="flex items-center gap-2">
                  Book a Free Consultation
                  <ArrowRight size={18} />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#work" className="flex items-center gap-2">
                  <Play size={16} />
                  View My Work
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Photo aligned to text block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end self-stretch items-center"
          >
            <div className="relative w-full max-w-[360px] h-full min-h-[320px] lg:min-h-0">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl" />
              
              {/* Image container - stretches to match left column height */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/30 shadow-2xl">
                <img
                  src={rifatPhoto}
                  alt="Rifat - AI Automation & Consulting Expert"
                  className="w-full h-full object-cover object-center"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust indicators - full width below grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-16 pt-8 border-t border-border/50 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Trusted by service businesses across Europe & Australia
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-50">
            <div className="text-base font-heading text-foreground">HVAC Pro</div>
            <div className="text-base font-heading text-foreground">ElectriFix</div>
            <div className="text-base font-heading text-foreground">FitLife Studio</div>
            <div className="text-base font-heading text-foreground">PlumbRight</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
