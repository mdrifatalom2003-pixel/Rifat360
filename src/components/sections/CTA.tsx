import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Decorative element */}
          <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full" />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-6">
            Let's Build Smart Systems That
            <br />
            <span className="text-muted-foreground">Replace Manual Work and Grow Your Business</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Ready to save time, reduce costs, and scale sustainably? 
            Book a free consultation and let's discuss how AI automation 
            and strategic SEO can transform your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="https://calendar.app.google/jdn353vERWDFcbL18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Calendar size={18} />
                Schedule a Call
              </a>
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&to=mdrifatalom2003@gmail.com&su=Project%20Inquiry%20from%20Portfolio",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="flex items-center gap-2"
            >
              Send an Email
              <ArrowRight size={16} />
            </Button>
          </div>

          {/* Trust note */}
          <p className="text-sm text-muted-foreground mt-8">
            No commitment required. Let's explore what's possible together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
