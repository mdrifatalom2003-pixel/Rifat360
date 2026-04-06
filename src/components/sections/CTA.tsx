import { motion } from "framer-motion";
import { Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">Let's Work Together</p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">
            Ready to Scale Your Business with AI?
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10 max-w-2xl mx-auto">
            Book a free strategy call or send me an email. Let's discuss how AI automation and smart marketing can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-body" asChild>
              <a href="https://calendar.app.google/jdn353vERWDFcbL18" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-4 w-4" /> Schedule a Call →
              </a>
            </Button>
            <Button size="lg" variant="outline" className="font-body" onClick={() => window.open('https://mail.google.com/mail/?view=cm&to=mdrifatalom2003@gmail.com&su=Project%20Inquiry%20from%20Portfolio', '_blank')}>
              <Mail className="mr-2 h-4 w-4" /> Send an Email →
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
