import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface WorkflowLightboxProps {
  open: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  title?: string;
}

export function WorkflowLightbox({ open, onClose, src, alt, title }: WorkflowLightboxProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={title ? `${title} workflow screenshot` : "Workflow screenshot"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 md:p-10"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close workflow screenshot"
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 rounded-full border border-primary/30 bg-card/80 text-foreground flex items-center justify-center hover:bg-primary/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl max-h-full overflow-auto rounded-2xl border-t-[3px] border-t-primary bg-card shadow-elevated"
          >
            {title && (
              <p className="px-5 pt-5 text-sm font-medium text-primary">{title}</p>
            )}
            <div className="p-4 md:p-5 overflow-auto">
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="mx-auto h-auto w-auto max-w-none md:max-w-full rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
