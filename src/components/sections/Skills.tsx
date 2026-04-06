import { motion } from "framer-motion";

const skills = [
  { name: "AI Automation", level: 95 },
  { name: "Workflow Design", level: 90 },
  { name: "AI Consulting", level: 92 },
  { name: "SEO & Local Search", level: 88 },
  { name: "Chatbot Development", level: 85 },
  { name: "Lead Generation", level: 90 },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-heading mb-12 text-foreground" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}>
            Skills & Competencies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between text-sm font-body">
                  <span className="text-foreground">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
