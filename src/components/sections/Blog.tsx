import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export const posts = [
  {
    slug: "ai-automation-transforming-local-service-businesses",
    title: "How AI Automation is Transforming Local Service Businesses",
    excerpt: "Discover how smart automation can save you 20+ hours per week while improving customer experience and boosting conversions.",
    category: "AI Automation",
    date: "Dec 10, 2024",
    readTime: "5 min read",
  },
  {
    slug: "complete-local-seo-checklist-2024",
    title: "The Complete Local SEO Checklist for 2024",
    excerpt: "Everything you need to dominate local search results and get found by customers actively looking for your services.",
    category: "SEO",
    date: "Dec 5, 2024",
    readTime: "8 min read",
  },
  {
    slug: "why-service-business-needs-ai-strategy",
    title: "Why Your Service Business Needs an AI Strategy Now",
    excerpt: "The competitive landscape is changing. Here's how to stay ahead with strategic AI implementation.",
    category: "AI Consulting",
    date: "Nov 28, 2024",
    readTime: "6 min read",
  },
];

export function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-24 md:py-32 bg-secondary/30">
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
              Blog
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mt-4 mb-6">
              Insights & Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights on AI automation, systems thinking, and growth strategies for local service businesses.
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 group"
              >
                <Link to={`/blog/${post.slug}`}>
                  {/* Image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <span className="text-4xl font-heading text-primary/20">
                      {post.category.charAt(0)}
                    </span>
                  </div>

                  <div className="p-6">
                    {/* Category & Date */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-heading text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Read more */}
                    <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
