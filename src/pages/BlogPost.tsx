import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" className="mb-8 font-body" asChild>
            <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            {slug?.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
          </h1>
          <p className="text-muted-foreground font-body leading-relaxed">
            This blog post is coming soon. Stay tuned for insights on AI automation, consulting, and local SEO strategies.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
