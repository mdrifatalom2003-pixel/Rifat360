import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Lead Gen System",
    description: "Automated lead capture and follow-up system for a local HVAC company, increasing conversions by 40%.",
    tags: ["AI Automation", "Lead Gen", "CRM"],
  },
  {
    title: "Local SEO Campaign",
    description: "Complete SEO overhaul for a dental practice, achieving top 3 Google Maps ranking in 3 months.",
    tags: ["SEO", "Local Search", "Google Maps"],
  },
  {
    title: "AI Chatbot for Real Estate",
    description: "24/7 intelligent chatbot that qualifies leads and schedules property viewings automatically.",
    tags: ["Chatbot", "AI", "Real Estate"],
  },
];

export const Work = () => {
  return (
    <section id="work" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground">Recent Work</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-8 hover:shadow-[var(--shadow-elevated)] transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-heading text-card-foreground">{project.title}</h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-body px-3 py-1 rounded-full bg-primary/10 text-primary">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
