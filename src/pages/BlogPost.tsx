import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { posts } from "@/components/sections/Blog";

const articleContent: Record<string, { content: string[] }> = {
  "ai-automation-transforming-local-service-businesses": {
    content: [
      "Local service businesses—plumbers, HVAC technicians, electricians, fitness studios—are discovering a powerful truth: AI automation isn't just for big corporations anymore. It's accessible, affordable, and transformative for businesses of any size.",
      "The challenge most service businesses face is time. Between managing leads, scheduling appointments, following up with customers, and actually delivering services, there's never enough hours in the day. This is where AI automation steps in.",
      "Smart automation systems can handle lead capture and qualification 24/7, ensuring no potential customer falls through the cracks. When a lead comes in at 2 AM, an AI system can respond instantly, qualify the lead, and even schedule an appointment—all while you sleep.",
      "Beyond lead handling, AI automation excels at customer communication. Automated appointment reminders reduce no-shows by up to 80%. Follow-up sequences nurture relationships and generate repeat business without requiring manual effort.",
      "The businesses I work with typically save 10-20+ hours per week after implementing these systems. That's time they can reinvest in growing their business, improving their services, or simply enjoying life outside of work.",
      "The key to successful AI automation isn't replacing human connection—it's enhancing it. By handling repetitive tasks automatically, you free up your team to focus on what humans do best: building relationships and delivering exceptional service.",
    ],
  },
  "complete-local-seo-checklist-2024": {
    content: [
      "Local SEO is the foundation of online visibility for service businesses. When potential customers search for 'plumber near me' or 'best HVAC company in [city],' you want your business to appear at the top of those results.",
      "The first step is claiming and optimizing your Google Business Profile. This free tool is arguably the most important factor in local search rankings. Complete every section: business hours, services, photos, and respond to every review.",
      "Consistency is crucial in local SEO. Your business name, address, and phone number (NAP) must be identical across all online directories. Even small variations can hurt your rankings.",
      "Reviews are the social proof that drives local business decisions. Implement a systematic approach to requesting reviews from satisfied customers. Respond to all reviews—positive and negative—professionally and promptly.",
      "Your website needs to be mobile-optimized and fast-loading. Over 60% of local searches happen on mobile devices. If your site is slow or difficult to navigate on a phone, you're losing customers.",
      "Create location-specific content that demonstrates your expertise and serves your local community. Blog posts about local topics, service pages for specific neighborhoods, and locally-relevant case studies all boost your local authority.",
    ],
  },
  "why-service-business-needs-ai-strategy": {
    content: [
      "The service industry is at an inflection point. Businesses that embrace AI strategically will thrive; those that ignore it risk falling behind competitors who don't.",
      "An AI strategy isn't about implementing every new technology that comes along. It's about identifying specific pain points in your operations and finding AI solutions that address them effectively.",
      "Start by mapping your customer journey. Where are the friction points? Where do leads get lost? Where does your team spend time on repetitive tasks? These are your automation opportunities.",
      "Many service businesses start with AI-powered chatbots for initial customer inquiries. These can handle common questions, provide quotes, and schedule consultations—freeing your team for more complex interactions.",
      "The next level involves integrating AI across your operations: smart scheduling that optimizes technician routes, predictive maintenance that anticipates equipment failures, and personalized marketing that targets the right customers at the right time.",
      "The businesses seeing the biggest returns from AI aren't just automating—they're using AI insights to make better decisions. Data-driven pricing, demand forecasting, and customer behavior analysis provide competitive advantages that compound over time.",
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);
  const content = slug ? articleContent[slug] : null;

  if (!post || !content) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl font-heading text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/#blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const nextPost = posts[(currentIndex + 1) % posts.length];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/#blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </motion.div>

            {/* Article header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mt-6 mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </motion.header>

            {/* Article content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {content.content.map((paragraph, index) => (
                <p key={index} className="text-foreground/90 font-body leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </motion.article>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16 p-8 bg-card rounded-2xl text-center"
            >
              <h3 className="text-xl font-heading text-foreground mb-4">
                Ready to transform your business?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how AI automation can help your service business save time and grow.
              </p>
              <Button variant="hero" asChild>
                <a href="/#contact">Book a Free Consultation</a>
              </Button>
            </motion.div>

            {/* Next article */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-border"
            >
              <p className="text-sm text-muted-foreground mb-4">Next Article</p>
              <Link
                to={`/blog/${nextPost.slug}`}
                className="group flex items-center justify-between"
              >
                <span className="text-lg font-heading text-foreground group-hover:text-primary transition-colors">
                  {nextPost.title}
                </span>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
