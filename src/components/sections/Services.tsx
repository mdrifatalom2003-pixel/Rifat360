import { motion } from "framer-motion";
import { Bot, Search, Workflow, MessageSquare, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description: "Automate repetitive tasks, client follow-ups, and business workflows with cutting-edge AI tools.",
  },
  {
    icon: Search,
    title: "Local SEO",
    description: "Dominate local search results and attract more customers with data-driven SEO strategies.",
  },
  {
    icon: Workflow,
    title: "Workflow Design",
    description: "Design and implement efficient workflows that save time and reduce operational costs.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "Build intelligent chatbots that handle customer inquiries 24/7 and capture leads automatically.",
  },
  {
    icon: BarChart3,
    title: "AI Consulting",
    description: "Get expert guidance on integrating AI into your business for maximum ROI and growth.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">What I Offer</p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}>
            Services
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-8 hover:shadow-[var(--shadow-elevated)] transition-all duration-300 group"
            >
              <service.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-heading mb-3 text-card-foreground" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}>
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
