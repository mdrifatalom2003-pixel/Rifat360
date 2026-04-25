import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Owner, CleanPro Services",
    industry: "Cleaning Business",
    content: "Rifat transformed how we handle leads. Our response time went from hours to minutes, and we've seen a 40% increase in conversions. Best investment we've made.",
    rating: 5,
  },
  {
    name: "James Thompson",
    role: "Director, Elite HVAC",
    industry: "HVAC Owner",
    content: "The AI automation system Rifat built for us has saved our team countless hours. We can now focus on what matters—serving our customers.",
    rating: 5,
  },
  {
    name: "Maria Garcia",
    role: "Founder, FitZone Studio",
    industry: "Fitness Studio",
    content: "Working with Rifat felt like having a strategic partner, not just a consultant. His SEO work doubled our local visibility in just 3 months.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Owner, Reliable Plumbing",
    industry: "Plumbing Business",
    content: "Rifat's approach is different. He takes time to understand your business before suggesting solutions. The results speak for themselves.",
    rating: 5,
  },
];

export function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="py-24 md:py-32">
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
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Reviews
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mt-4 mb-6">
              What Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by service business owners who value results and long-term partnerships.
            </p>
          </motion.div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground font-body mb-6 leading-relaxed">
                  "{review.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-heading text-primary">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                    <div className="text-xs text-primary font-medium mt-1">{review.industry}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
