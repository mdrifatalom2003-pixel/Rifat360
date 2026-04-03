import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Target, CalendarDays, Settings, Check, BarChart3 } from "lucide-react";

const problemCards = [
  {
    icon: MessageCircle,
    title: "Never Miss a Customer Again",
    subtext: "Automatically reply to Facebook, WhatsApp & website messages within seconds — 24/7.",
    checks: [
      "Instant replies in 0–10 seconds",
      "Auto lead qualification",
      "Follow-ups on autopilot",
    ],
  },
  {
    icon: Target,
    title: "Stop Wasting Time on Wrong Leads",
    subtext: "AI automatically scores and qualifies every lead — so your sales team only talks to people ready to buy.",
    checks: [
      "Auto lead scoring & qualification",
      "Qualified leads saved to CRM instantly",
      "Instant Telegram & Email notification",
    ],
  },
  {
    icon: CalendarDays,
    title: "Turn Conversations Into Bookings",
    subtext: "Let customers book appointments automatically without back-and-forth messages.",
    checks: [
      "Auto scheduling system",
      "Calendar integration",
      "Automatic reminders sent",
    ],
  },
  {
    icon: Settings,
    title: "Save 20+ Hours Every Week",
    subtext: "Eliminate repetitive manual tasks so you can focus on growing your business.",
    checks: [
      "Task & workflow automation",
      "CRM setup & management",
      "Email & report automation",
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mt-4 mb-6">
              Problems I Solve for Service Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I don't just build automations — I solve real business problems that cost you time and money.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {problemCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-soft border-t-[3px] border-t-primary hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-body font-bold text-foreground">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[15px] font-body text-muted-foreground mb-5">
                  {card.subtext}
                </p>
                <ul className="space-y-2.5">
                  {card.checks.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-body text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Result Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 rounded-2xl bg-primary/10 border border-primary/20 px-8 py-5 text-center"
          >
            <p className="text-base md:text-lg font-medium text-foreground flex items-center justify-center gap-2 flex-wrap">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span>Average client results:</span>
              <span className="text-primary font-bold">3x more leads</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-primary font-bold">25hrs saved/week</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-primary font-bold">0–10 sec response time</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
