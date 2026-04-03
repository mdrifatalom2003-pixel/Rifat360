import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Settings, Zap, DollarSign } from "lucide-react";

const stats = [
  {
    icon: Settings,
    value: "20+",
    label: "Automation Systems Built",
    subtext: "Helping businesses eliminate manual work",
  },
  {
    icon: Zap,
    value: "0–10 sec",
    label: "Instant Response",
    subtext: "Never miss a customer again",
  },
  {
    icon: DollarSign,
    value: "$2K+",
    label: "Save Every Month",
    subtext: "Reduce support & staffing costs",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              About
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mt-4 mb-6">
              Building Scalable Growth Systems
              <br />
              <span className="text-muted-foreground">with AI Automation</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground font-body max-w-3xl mx-auto mb-8"
          >
            <p className="text-xl font-heading text-foreground mb-2">👋 Hi, I'm Rifat — AI Automation Specialist</p>
            <p>
              I help local &amp; service-based businesses save time and reduce manual work by building AI-powered automations and AI agents using tools like n8n, Google Gemini, APIs, and no-code/low-code systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16"
          >
            <div className="bg-card rounded-2xl p-6 shadow-soft text-left">
              <p className="font-medium text-foreground mb-3">My focus is simple:</p>
              <ul className="space-y-2 text-muted-foreground text-[15px]">
                <li>👉 Automate repetitive tasks</li>
                <li>👉 Improve response speed</li>
                <li>👉 Make business operations scalable</li>
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-soft text-left">
              <p className="font-medium text-foreground mb-3">🧠 What I Do</p>
              <ul className="space-y-2 text-muted-foreground text-[15px]">
                <li>• AI Agent Development</li>
                <li>• Business Process Automation</li>
                <li>• Email &amp; Lead Automation</li>
                <li>• Chatbot &amp; Messenger Automation</li>
                <li>• Content &amp; Marketing Automation</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group bg-card rounded-2xl p-8 shadow-soft text-center border-t-[3px] border-t-primary transition-all duration-300 hover:shadow-elevated hover:-translate-y-[3px] min-h-[220px] flex flex-col items-center justify-center"
              >
                <stat.icon className="w-9 h-9 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-body font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-body font-medium text-foreground">
                  {stat.label}
                </div>
                <div className="mt-2 text-[15px] font-body font-medium text-muted-foreground">
                  {stat.subtext}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}