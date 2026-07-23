import { useState } from "react";
import { T } from "./tokens";
import { FadeUp } from "./FadeUp";
import { MessageCircle, Mail, Linkedin, Facebook, Instagram, Send, Check } from "lucide-react";

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
  { Icon: Linkedin, label: "LinkedIn", value: "", href: "https://linkedin.com/in/donia-essam-38302b241" },
  { Icon: Facebook, label: "Facebook", value: "", href: "https://www.facebook.com/dody.essam.79" },
  { Icon: Instagram, label: "Instagram", value: "", href: "https://www.instagram.com/donia_essam_98" },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  background: "#161616",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 10,
  color: T.white,
  fontSize: 14,
  outline: "none",
  transition: "border-color 0.2s ease",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 600,
  color: "rgba(255,255,255,0.6)",
  marginBottom: 8,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
};

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSent(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSent(false), 4000);
      } else {
        setErrorMsg(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setErrorMsg("Could not connect. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const focusRing = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    (e.target as HTMLElement).style.borderColor = T.gold;
  };
  const blurRing = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
  };

  return (
    <section id="contact" style={{ background: T.navy }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }} className="px-6 md:px-12 pt-16 md:pt-[120px]">

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
        <div style={{ alignItems: "start" }} className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-[64px]">

          {/* Left: Quote + Form */}
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

              {/* Contact form */}
              <form
                onSubmit={handleSubmit}
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 16 }}>
                  <div>
                    <label htmlFor="name" style={labelStyle}>Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={focusRing}
                      onBlur={blurRing}
                      placeholder="Your name"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={focusRing}
                      onBlur={blurRing}
                      placeholder="you@example.com"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" style={labelStyle}>Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={focusRing}
                    onBlur={blurRing}
                    placeholder="Training inquiry, speaking engagement, etc."
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label htmlFor="message" style={labelStyle}>Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={focusRing}
                    onBlur={blurRing}
                    placeholder="Tell me a bit about what you're looking for..."
                    style={{ ...inputStyle, resize: "vertical", minHeight: 110, fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    padding: "14px 24px",
                    background: isSent ? "#3d5a43" : T.gold,
                    color: "#111111",
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    border: "none",
                    borderRadius: 10,
                    cursor: isSubmitting ? "default" : "pointer",
                    opacity: isSubmitting ? 0.7 : 1,
                    transition: "background 0.2s ease, opacity 0.2s ease",
                  }}
                >
                  {isSent ? (
                    <>
                      <Check size={16} strokeWidth={2.5} />
                      Message Sent
                    </>
                  ) : isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={16} strokeWidth={2.5} />
                      Send Message
                    </>
                  )}
                </button>

                {errorMsg && (
                  <p style={{ fontSize: 13, color: "#e08a8a", margin: 0 }}>
                    {errorMsg}
                  </p>
                )}
              </form>
            </div>
          </FadeUp>

          {/* Right: Contact cards 2x3 grid */}
          <FadeUp delay={180}>
            <div className="grid grid-cols-2"
              style={{
                display: "grid",
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
      <div style={{ marginTop: 80, borderTop: "1px solid rgba(255,255,255,0.08)" }} className="px-6 md:px-12 py-8">
        <p
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.3)",
            textAlign: "center",
            margin: 0,
            letterSpacing: "0.06em",
          }}
        >
          © 2026 Donia Essam · All Rights Reserved
        </p>
      </div>
    </section>
  );
}