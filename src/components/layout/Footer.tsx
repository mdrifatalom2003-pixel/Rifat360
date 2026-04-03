import { Linkedin, Twitter, Github, Instagram } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/rifatalom/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/rifatalom_", label: "Twitter" },
  { icon: Github, href: "https://github.com/mdrifatalom2003-pixel", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/rifatalom_official/", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10">
      {/* Top glow / gradient separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-border/50" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/[0.06] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <a href="#home" className="text-3xl font-heading font-semibold text-foreground">
            Rifat<span className="text-primary">360</span>
          </a>
          <p className="text-muted-foreground font-body mt-3 max-w-md leading-relaxed">
            Helping local businesses eliminate manual work through AI automation, smart workflows, and strategic consulting.
          </p>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4 mt-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs border-t border-border/40 mt-10 mb-6" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rifat360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
