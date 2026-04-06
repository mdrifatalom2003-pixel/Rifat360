import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">About Me</p>
          <h2 className="text-3xl md:text-4xl font-heading mb-8 text-foreground">
            I'm Rifat — an AI Automation & Consulting Specialist
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-muted-foreground font-body leading-relaxed">
              I help local service businesses leverage AI automation, smart workflows, and SEO to reduce manual work, capture more leads, and scale efficiently. With a deep understanding of modern AI tools and digital marketing strategies, I deliver results that matter.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              My approach combines hands-on technical implementation with strategic consulting — whether it's automating your client follow-ups, building AI-powered chatbots, or optimizing your online presence for local search dominance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
