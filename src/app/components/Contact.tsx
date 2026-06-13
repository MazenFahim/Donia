import { T } from "./tokens";
import { FadeUp } from "./FadeUp";
import { MessageCircle, Mail, Linkedin, Facebook, Instagram } from "lucide-react";

type IconComponent = React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;

interface ContactCard {
  Icon: IconComponent;
  label: string;
  value: string;
  href: string;
}

const CONTACT_CARDS: ContactCard[] = [
  { Icon: MessageCircle, label: "WhatsApp", value: "01155501538", href: "https://wa.me/201155501538" },
  { Icon: Mail, label: "Email", value: "doniaessam2000200@gmail.com", href: "mailto:doniaessam2000200@gmail.com" },
  { Icon: Linkedin, label: "LinkedIn", value: "donia-essam-38302b241", href: "https://linkedin.com/in/donia-essam-38302b241" },
  { Icon: Facebook, label: "Facebook", value: "Donia Essam", href: "#" },
  { Icon: Instagram, label: "Instagram", value: "Donia Essam", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" style={{ background: T.navy }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 48px 0" }}>

        {/* Section label */}
        <FadeUp>
          <div style={{ marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 32, height: 1.5, background: T.gold }} />
              <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: T.gold }}>
                Get In Touch
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, color: T.white, margin: "0 0 16px", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
              Let's Work Together
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.7, maxWidth: 560 }}>
              Available for corporate training, university lectures, speaking engagements, and Train-the-Trainer programs.
            </p>
          </div>
        </FadeUp>

        {/* Two columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>

          {/* Left: Quote + Photo */}
          <FadeUp delay={100}>
            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              <div
                style={{
                  borderLeft: `3px solid ${T.gold}`,
                  paddingLeft: 24,
                }}
              >
                <p
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    color: T.white,
                    margin: "0 0 16px",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                    letterSpacing: "-0.01em",
                  }}
                >
                  "Education is not just about transferring knowledge — it's about inspiring real change."
                </p>
                <p style={{ fontSize: 14, fontWeight: 600, color: T.gold, margin: 0, letterSpacing: "0.04em" }}>
                  — Donia Essam Mohamed Amin
                </p>
              </div>

            </div>
          </FadeUp>

          {/* Right: Contact cards 2x3 grid */}
          <FadeUp delay={180}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {CONTACT_CARDS.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    background: "#111111",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 12,
                    padding: "20px 22px",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    textDecoration: "none",
                    transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-4px)";
                    el.style.borderColor = T.gold;
                    el.style.boxShadow = `0 8px 28px rgba(107,143,113,0.25)`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(0)";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "rgba(107,143,113,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color={T.gold} strokeWidth={2} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: T.white, margin: "0 0 2px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                      {label}
                    </p>
                    <p
                      style={{
                        fontSize: 11,
                        color: "rgba(255,255,255,0.5)",
                        margin: 0,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: 80, padding: "32px 48px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <p
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.3)",
            textAlign: "center",
            margin: 0,
            letterSpacing: "0.06em",
          }}
        >
          © 2025 Donia Essam Mohamed Amin · All Rights Reserved
        </p>
      </div>
    </section>
  );
}
