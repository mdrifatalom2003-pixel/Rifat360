import { Linkedin, Twitter, Github, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/rifatalom/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/rifatalom21", label: "Twitter" },
  { icon: Github, href: "https://github.com/mdrifatalom2003-pixel", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/rifatalom_official/", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="text-xl font-heading font-bold text-foreground">
              Rifat<span className="text-primary">360</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">AI Automation & Consulting for Local Businesses</p>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Rifat360. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
