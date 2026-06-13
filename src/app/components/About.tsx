import { Award, BookOpen, GraduationCap } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import aboutPhoto from "@/imports/5791871838450290291.jpg";
import { T } from "./tokens";
import { FadeUp } from "./FadeUp";

const SPECIALIZATIONS = ["Personal Skills Development", "Train-the-Trainer (ToT)", "Curricula & Teaching Methods"];

const CREDENTIALS = [
  {
    icon: GraduationCap,
    title: "M.Sc. in Education",
    subtitle: "Helwan University",
  },
  {
    icon: Award,
    title: "5+ Years Active Training",
    subtitle: "Academic & professional training experience",
  },
  {
    icon: BookOpen,
    title: "3 Core Specializations",
    subtitle: "Personal Skills, ToT, Teaching Methods",
  },
];

export function About() {
  return (
    <section id="about" style={{ background: T.bgPage }}>
      <div style={{ height: 1, background: T.border }} />
      <div
        className="grid grid-cols-1 lg:grid-cols-[1fr_440px]"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "120px 48px",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* LEFT: Content */}
        <FadeUp>
          <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 34, height: 1.5, background: T.blue }} />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: T.blue,
                }}
              >
                About Me
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(34px, 4.4vw, 56px)",
                fontWeight: 800,
                color: T.navy,
                margin: 0,
                lineHeight: 1.08,
                letterSpacing: "-0.045em",
                maxWidth: 680,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              "Education is not just about transferring knowledge — it's about inspiring{" "}
              <span style={{ color: T.blue }}>real change.</span>"
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 670 }}>
              <p style={{ fontSize: 16.5, color: T.textSecondary, margin: 0, lineHeight: 1.85 }}>
                Donia Essam Mohamed Amin is an internationally certified trainer specializing in personal skills development and Train-the-Trainer programs.
              </p>
              <p style={{ fontSize: 16.5, color: T.textSecondary, margin: 0, lineHeight: 1.85 }}>
                With a Master's degree in Education and over 5 years of active training experience, she has helped thousands of students and fresh graduates successfully enter the job market.
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, paddingTop: 2 }}>
              {SPECIALIZATIONS.map((skill) => (
                <div
                  key={skill}
                  style={{
                    background: "rgba(238,233,223,0.72)",
                    border: `1px solid ${T.border}`,
                    padding: "10px 16px",
                    display: "inline-flex",
                    alignItems: "center",
                    borderRadius: 999,
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: T.navy,
                      fontFamily: "Poppins, sans-serif",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ paddingTop: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <span style={{ width: 7, height: 7, borderRadius: 999, background: T.blue, boxShadow: "0 0 0 5px rgba(107,143,113,0.12)" }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: T.blue, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                  Credentials & Impact
                </span>
                <div style={{ flex: 1, height: 1, background: T.border }} />
              </div>

              <div
                className="grid grid-cols-1 sm:grid-cols-3"
                style={{
                  background: "rgba(255,255,255,0.54)",
                  border: `1px solid ${T.border}`,
                  borderRadius: 24,
                  boxShadow: "0 18px 46px rgba(28,28,28,0.06)",
                  overflow: "hidden",
                }}
              >
                {CREDENTIALS.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className={`border-b border-border sm:border-b-0 ${index < CREDENTIALS.length - 1 ? "sm:border-r" : ""}`}
                      style={{
                        padding: "26px 22px 24px",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 999,
                          background: "rgba(107,143,113,0.12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: 16,
                        }}
                      >
                        <Icon size={22} color={T.blue} strokeWidth={1.8} />
                      </div>
                      <h3 style={{ fontSize: 15, fontWeight: 800, color: T.navy, lineHeight: 1.35, margin: 0, letterSpacing: "-0.01em" }}>
                        {item.title}
                      </h3>
                      <div style={{ width: 28, height: 2, borderRadius: 999, background: T.blue, margin: "11px 0 10px" }} />
                      <p style={{ fontSize: 12.5, color: T.textSecondary, lineHeight: 1.55, margin: 0, maxWidth: 150 }}>
                        {item.subtitle}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* RIGHT: Photo */}
        <FadeUp delay={150}>
          <div style={{ position: "relative", maxWidth: 460, margin: "0 auto", width: "100%" }}>
            <div
              style={{
                position: "absolute",
                top: -24,
                left: -26,
                width: "64%",
                height: "42%",
                background: T.bgCard,
                border: `1px solid ${T.border}`,
                borderRadius: 26,
                zIndex: 0,
                boxShadow: "0 18px 44px rgba(28,28,28,0.05)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -26,
                right: -28,
                width: "72%",
                height: "54%",
                background: T.navy,
                borderRadius: 28,
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                aspectRatio: "4 / 5",
                overflow: "hidden",
                background: T.bgCard,
                borderRadius: 28,
                border: "8px solid rgba(255,255,255,0.68)",
                boxShadow: "0 24px 58px rgba(28,28,28,0.14)",
              }}
            >
              <ImageWithFallback
                src={aboutPhoto}
                alt="Donia Essam Mohamed Amin speaking on stage with a microphone"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 12%",
                  display: "block",
                  filter: "contrast(1.03) saturate(0.92)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent 58%, rgba(28,28,28,0.16) 100%)",
                  pointerEvents: "none",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 34,
                right: -18,
                width: 4,
                height: "72%",
                background: T.blue,
                borderRadius: 999,
                zIndex: 2,
                boxShadow: "0 0 0 7px rgba(107,143,113,0.10)",
              }}
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
