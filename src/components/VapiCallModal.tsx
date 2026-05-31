import { useEffect, useState } from "react";
import { PhoneOff } from "lucide-react";

/**
 * Custom call UI overlay for the Vapi widget.
 * Listens to the global `vapiInstance` (initialized in index.html) and renders
 * an accessible modal during an active call. Does NOT change Vapi integration logic.
 */
const VapiCallModal = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let bound = false;
    let vapi: any = null;

    const onStart = () => setActive(true);
    const onEnd = () => setActive(false);

    const tryBind = () => {
      const instance = (window as any).vapiInstance;
      if (!instance || bound) return;
      vapi = instance;
      try {
        instance.on?.("call-start", onStart);
        instance.on?.("call-end", onEnd);
        bound = true;
      } catch {
        /* noop */
      }
    };

    tryBind();
    const interval = window.setInterval(tryBind, 500);

    return () => {
      window.clearInterval(interval);
      if (vapi && bound) {
        try {
          vapi.off?.("call-start", onStart);
          vapi.off?.("call-end", onEnd);
        } catch {
          /* noop */
        }
      }
    };
  }, []);

  const endCall = () => {
    const instance = (window as any).vapiInstance;
    try {
      instance?.stop?.();
    } catch {
      /* noop */
    }
    setActive(false);
  };

  if (!active) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Voice assistant call in progress"
      className="fixed inset-0 z-[100000] flex items-center justify-center bg-background/70 backdrop-blur-sm animate-fade-in"
    >
      <div className="relative mx-4 w-full max-w-sm rounded-2xl border border-border bg-card p-8 shadow-elevated text-card-foreground">
        {/* Pulsing avatar */}
        <div className="flex flex-col items-center">
          <div className="relative h-28 w-28 flex items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />
            <span className="absolute inset-2 rounded-full bg-green-500/30 animate-pulse" />
            <div className="relative h-20 w-20 rounded-full bg-primary flex items-center justify-center shadow-glow">
              {/* Animated waveform */}
              <div className="flex items-end gap-1 h-8">
                <span className="w-1 bg-primary-foreground rounded-full animate-pulse" style={{ height: "40%", animationDelay: "0ms" }} />
                <span className="w-1 bg-primary-foreground rounded-full animate-pulse" style={{ height: "80%", animationDelay: "120ms" }} />
                <span className="w-1 bg-primary-foreground rounded-full animate-pulse" style={{ height: "60%", animationDelay: "240ms" }} />
                <span className="w-1 bg-primary-foreground rounded-full animate-pulse" style={{ height: "100%", animationDelay: "360ms" }} />
                <span className="w-1 bg-primary-foreground rounded-full animate-pulse" style={{ height: "50%", animationDelay: "480ms" }} />
              </div>
            </div>
          </div>

          <p className="mt-6 font-heading text-lg text-foreground">Assistent is listening...</p>
          <p className="mt-1 text-sm text-muted-foreground">Speak naturally — we're connected.</p>

          <button
            type="button"
            onClick={endCall}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-red-700 hover:scale-[1.02] active:scale-[0.98]"
          >
            <PhoneOff className="h-4 w-4" />
            End Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default VapiCallModal;
