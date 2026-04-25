import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "AI Messenger Customer Support Automation",
    problem: "Businesses miss sales & leads because they can't reply instantly to Facebook messages.",
    solution: "Developed an AI-powered Messenger chatbot that responds instantly and accurately.",
    workflow: [
      "Facebook Messenger webhook receives message",
      "AI Agent generates reply",
      "Custom JavaScript validates JSON response",
      "Message sent via Facebook Graph API",
    ],
    tools: ["n8n", "Webhooks", "Google Gemini AI Agent", "Facebook Graph API", "JavaScript"],
    impact: [
      "Instant replies 24/7",
      "Higher lead conversion",
      "No human intervention required",
    ],
  },
  {
    num: "02",
    title: "AI Email Marketing Automation System",
    problem: "Sending personalized emails manually from lead lists is slow and error-prone.",
    solution: "Created an end-to-end email marketing automation that sends AI-personalized emails from Google Sheets.",
    workflow: [
      "Leads fetched from Google Sheets",
      "Filter & limit logic applied",
      "AI Agent generates personalized email content",
      "Emails sent automatically via Gmail",
      "Sheet updated to avoid duplicates",
    ],
    tools: ["n8n", "Google Sheets", "Gmail API", "Google Gemini AI Agent"],
    impact: [
      "Fully automated outreach",
      "Consistent follow-ups",
      "Scalable email campaigns",
    ],
  },
  {
    num: "03",
    title: "AI Lead Qualification Agent",
    problem: "Businesses waste time on low-quality or unqualified leads.",
    solution: "Built an AI-powered lead qualification system that scores and categorizes leads automatically.",
    workflow: [
      "New lead added to Google Sheets",
      "AI Agent analyzes lead data",
      "Structured output generated (Qualified / Not Qualified)",
      "Qualified leads saved to Notion CRM",
      "Notifications sent via Telegram & Email",
    ],
    tools: ["n8n", "Google Sheets", "Google Gemini Chat Model", "Notion API", "Telegram API"],
    impact: [
      "Sales team focuses only on high-quality leads",
      "Faster decision-making",
      "Improved conversion rate",
    ],
  },
  {
    num: "04",
    title: "AI-Powered Gmail Labeling System",
    problem: "Business owners receive dozens of emails daily and manually sorting them wastes time.",
    solution: "Built an AI-based Gmail automation that automatically reads incoming emails and applies labels based on content intent.",
    workflow: [
      "Gmail Trigger detects new emails",
      "AI Text Classifier (Google Gemini) analyzes email content",
      "Emails are labeled automatically (Priority / Sponsorship / General)",
    ],
    tools: ["n8n", "Gmail API", "Google Gemini Chat Model"],
    impact: [
      "Inbox stays organized automatically",
      "Saves 1–2 hours daily",
      "Faster response to important emails",
    ],
  },
  {
    num: "05",
    title: "AI Social Media Post Generation System",
    problem: "Creating daily social media content is time-consuming for businesses.",
    solution: "Built an AI system that generates social media posts automatically based on structured inputs.",
    workflow: [
      "Data pulled from Google Sheets",
      "AI Agent generates post content",
      "Content sent to publishing API",
      "Sheet updated after posting",
    ],
    tools: ["n8n", "Google Sheets", "Google Gemini AI Agent", "APIs"],
    impact: [
      "Saves hours of content creation time",
      "Consistent posting",
      "Scalable content workflow",
    ],
  },
];

const caseStudies = [
  {
    title: "HVAC Service Automation",
    category: "AI Automation",
    role: "Automation architecture & AI system design",
    problem: "Manual lead handling causing 40% of inquiries to fall through the cracks.",
    solution: "Implemented automated lead capture, qualification, and follow-up system integrated with their CRM.",
    results: [
      { metric: "95%", label: "Lead Response Rate" },
      { metric: "3x", label: "Booking Increase" },
      { metric: "25hrs", label: "Saved Weekly" },
    ],
  },
  {
    title: "Plumbing Company SEO Overhaul",
    category: "SEO Strategy",
    role: "Automation architecture & AI system design",
    problem: "Zero online visibility in a competitive local market.",
    solution: "Complete local SEO strategy including Google Business optimization, content system, and technical improvements.",
    results: [
      { metric: "#1", label: "Google Rankings" },
      { metric: "400%", label: "Organic Traffic" },
      { metric: "2x", label: "Monthly Leads" },
    ],
  },
  {
    title: "Fitness Studio AI Integration",
    category: "AI Consulting",
    role: "Automation architecture & AI system design",
    problem: "Staff overwhelmed with scheduling, reminders, and member communication.",
    solution: "AI-powered member communication system with smart scheduling and automated retention campaigns.",
    results: [
      { metric: "60%", label: "Admin Time Saved" },
      { metric: "35%", label: "Member Retention" },
      { metric: "0", label: "Missed Appointments" },
    ],
  },
];

export function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"projects" | "cases">("projects");

  return (
    <section id="work" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mt-4 mb-6">
              Real Results, Real Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Case studies from service businesses that transformed their operations and growth.
            </p>

            <div className="inline-flex rounded-xl bg-muted p-1.5 gap-1">
              <button
                onClick={() => setActiveTab("projects")}
                className={`relative px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === "projects"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveTab("cases")}
                className={`relative px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === "cases"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Case Studies
              </button>
            </div>
          </motion.div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {activeTab === "projects" ? (
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.num}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-8 md:p-10 shadow-soft hover:shadow-elevated transition-all duration-300 border-t-[3px] border-t-primary"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-heading font-bold text-primary bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                          {project.num}
                        </span>
                        <h3 className="text-xl md:text-2xl font-heading text-foreground">
                          {project.title}
                        </h3>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground shrink-0 mt-1" />
                    </div>

                    {/* Problem & Solution */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-sm font-medium text-primary mb-2">Problem</h4>
                        <p className="text-sm text-muted-foreground font-body">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-primary mb-2">Solution</h4>
                        <p className="text-sm text-muted-foreground font-body">{project.solution}</p>
                      </div>
                    </div>

                    {/* Workflow & Impact */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-sm font-medium text-primary mb-3">Workflow Overview</h4>
                        <ol className="space-y-2">
                          {project.workflow.map((step, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground font-body">
                              <span className="text-xs font-bold text-primary bg-primary/10 w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                {i + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-primary mb-3">Expected Impact</h4>
                        <ul className="space-y-2">
                          {project.impact.map((item, i) => (
                            <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground font-body">
                              <Check className="w-4 h-4 text-primary shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tools */}
                    <div>
                      <h4 className="text-sm font-medium text-primary mb-3">Tools Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs font-medium px-3 py-1.5 rounded-full border border-primary/30 text-primary bg-primary/5"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                {caseStudies.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
                    className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
                  >
                    <div className="p-8 md:p-10">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <p className="text-xs text-muted-foreground mb-4">
                        <span className="font-medium">My role:</span> {project.role}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-heading text-foreground mb-6">
                        {project.title}
                      </h3>
                      <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div>
                          <h4 className="text-sm font-medium text-primary mb-2">Problem</h4>
                          <p className="text-muted-foreground font-body text-sm">{project.problem}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-primary mb-2">Solution</h4>
                          <p className="text-muted-foreground font-body text-sm">{project.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-primary mb-2">Results</h4>
                          <div className="space-y-2">
                            {project.results.map((result) => (
                              <div key={result.label} className="flex items-center gap-2">
                                <span className="text-lg font-heading text-foreground">{result.metric}</span>
                                <span className="text-xs text-muted-foreground">{result.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
