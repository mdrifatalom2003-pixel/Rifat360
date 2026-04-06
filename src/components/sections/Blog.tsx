import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    slug: "ai-automation-local-business",
    title: "How AI Automation Can Transform Your Local Business",
    excerpt: "Discover how AI-powered workflows can save time, reduce costs, and boost revenue for local service businesses.",
    date: "2024-01-15",
  },
  {
    slug: "local-seo-guide-2024",
    title: "The Ultimate Local SEO Guide for 2024",
    excerpt: "Everything you need to know about ranking your local business at the top of Google Search and Maps.",
    date: "2024-01-10",
  },
  {
    slug: "ai-chatbots-lead-generation",
    title: "AI Chatbots: Your Secret Weapon for Lead Generation",
    excerpt: "Learn how AI chatbots can qualify leads, book appointments, and grow your business on autopilot.",
    date: "2024-01-05",
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">Insights</p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground">Latest Blog Posts</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="block bg-card rounded-xl p-8 hover:shadow-[var(--shadow-elevated)] transition-all duration-300 group h-full">
                <p className="text-xs text-muted-foreground font-body mb-3">{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
                <h3 className="text-lg font-heading text-card-foreground mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <span className="text-primary font-body text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
