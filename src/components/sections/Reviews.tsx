import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Owner, CleanPro Services",
    text: "Rifat's AI automation saved us 20+ hours per week on client follow-ups. Our conversion rate jumped by 35%. Highly recommend!",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "CEO, LocalDent",
    text: "The SEO work Rifat did for our dental practice was phenomenal. We went from page 3 to the top 3 in Google Maps within months.",
    rating: 5,
  },
  {
    name: "Jessica Williams",
    role: "Broker, HomeFind Realty",
    text: "The AI chatbot Rifat built handles our lead qualification 24/7. It's like having an extra team member that never sleeps.",
    rating: 5,
  },
];

export const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground">What Clients Say</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">"{review.text}"</p>
              <div>
                <p className="font-body font-medium text-card-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground font-body">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
