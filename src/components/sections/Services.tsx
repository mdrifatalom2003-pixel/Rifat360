import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Target, Mail, Smartphone, Search, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: MessageCircle,
    badge: "Most Popular",
    headline: "Never Miss a Customer Message Again",
    description: "Automatically reply to Facebook, WhatsApp & website messages in seconds — 24/7.",
    benefits: [
      "Instant replies (0–10 sec)",
      "Lead qualification built-in",
      "Auto follow-ups",
    ],
    cta: "Get This System →",
  },
  {
    icon: Target,
    headline: "Filter High-Quality Leads Automatically",
    description: "Stop wasting time on bad leads — only focus on customers ready to buy.",
    benefits: [
      "AI scoring system",
      "Qualified leads sent to CRM",
      "Instant notifications",
    ],
    cta: "See How It Works →",
  },
  {
    icon: Mail,
    headline: "Send Personalized Emails on Autopilot",
    description: "Reach hundreds of leads without writing emails manually.",
    benefits: [
      "AI-generated emails",
      "Automated follow-ups",
      "No duplicate sending",
    ],
    cta: "Automate My Outreach →",
  },
  {
    icon: Smartphone,
    headline: "Generate & Publish Content Automatically",
    description: "Stay consistent on social media without spending hours creating content.",
    benefits: [
      "AI content generation",
      "Auto posting system",
      "Scalable workflow",
    ],
    cta: "Set Up My System →",
  },
  {
    icon: Search,
    badge: "Premium",
    headline: "Get Your Business Recommended by AI",
    description: "Position your brand to show up in AI answers, not just google search results.",
    benefits: [
      "AI-first content optimization",
      "Multi-platform visibility (Search + AI)",
      "Long-term authority building",
    ],
    cta: "Boost AI Visibility →",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium font-body text-primary uppercase tracking-wider">
              Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mt-4 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              AI Systems That Replace Manual Work & Bring More Customers
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              I don't build automations — I install systems that bring leads & save cost.
            </p>
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.headline}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                className={`relative bg-card rounded-2xl p-8 border-t-[3px] border-t-primary shadow-soft hover:shadow-elevated transition-all duration-300 dark:bg-[#1a2235] dark:border dark:border-t-[3px] dark:border-white/[0.08] dark:border-t-primary dark:hover:border-primary/50 dark:hover:[box-shadow:inset_0_0_30px_rgba(0,163,255,0.1),0_0_20px_rgba(0,163,255,0.15)] dark:hover:bg-[radial-gradient(ellipse_at_center,rgba(0,163,255,0.15)_0%,rgba(0,163,255,0.05)_40%,transparent_70%),#1a2235] dark:hover:-translate-y-[3px] ${index >= 2 ? "" : ""}`}
              >
                {service.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-medium font-body text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>
                )}

                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {service.headline}
                </h3>

                <p className="text-muted-foreground font-body text-sm mb-6">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-body text-foreground">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <Button variant="default" className="w-full" asChild>
                  <a href="#contact" className="flex items-center justify-center gap-2">
                    {service.cta}
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
