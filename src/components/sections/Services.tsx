import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Target, MessageCircle, Mail, Smartphone, Search, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Phone,
    badge: "Most Popular",
    headline: "AI Voice Receptionist",
    description: "Never miss a call. AI answers calls 24/7, books appointments, and qualifies leads automatically.",
    benefits: [
      "24/7 Call Answering",
      "Appointment Booking",
      "Lead Qualification",
    ],
    cta: "Book a Demo →",
  },
  {
    icon: Target,
    headline: "AI Lead Qualification System",
    description: "Filter high-quality leads automatically and focus only on prospects ready to buy.",
    benefits: [
      "AI Lead Scoring",
      "Instant Qualification",
      "CRM Integration",
    ],
    cta: "See How It Works →",
  },
  {
    icon: MessageCircle,
    headline: "AI Chat Assistant",
    description: "Automatically reply to website, Facebook, and WhatsApp inquiries within seconds.",
    benefits: [
      "Instant Responses",
      "Lead Capture",
      "24/7 Availability",
    ],
    cta: "Get This System →",
  },
  {
    icon: Mail,
    headline: "Email Outreach Automation",
    description: "Send personalized outreach campaigns without manually writing every email.",
    benefits: [
      "Personalized Emails",
      "Follow-up Automation",
      "Lead Nurturing",
    ],
    cta: "Automate My Outreach →",
  },
  {
    icon: Smartphone,
    headline: "Content Automation System",
    description: "Generate and publish content consistently without spending hours creating it.",
    benefits: [
      "AI Content Creation",
      "Auto Publishing",
      "Scalable Workflow",
    ],
    cta: "Set Up My System →",
  },
  {
    icon: Search,
    headline: "AI Search Visibility",
    description: "Help your business appear in AI answers and search results where customers are looking.",
    benefits: [
      "AI Search Optimization",
      "Multi-Platform Visibility",
      "Authority Building",
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
              AI Systems That Answer Calls, Book Appointments & Generate More Revenue
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              I build AI systems that help service businesses capture more opportunities and save time.
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

