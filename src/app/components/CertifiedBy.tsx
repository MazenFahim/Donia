import { Award, Globe2, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import ainShamsLogo from "@/imports/ainshams.png";
import helwanLogo from "@/imports/helwan.png";
import mysLogo from "@/imports/MYS.png";
import unescoLogo from "@/imports/UNESCO.png";
import asitLogo from "@/imports/ASIT.png"
import { T } from "./tokens";
import { FadeUp } from "./FadeUp";

type Certification = {
  eyebrow: string;
  title: string;
  country: string;
  description: string;
  icon?: LucideIcon;
  logo?: string;
  logoScale?: string;
  mark?: "asit";
};

const CERTIFICATIONS: Certification[] = [
  {
    eyebrow: "US",
    title: "ASIT",
    country: "USA",
    description: "American Society for Instructional Technology",
    logo: asitLogo,
    logoScale: "100%",
  },
  {
    eyebrow: "International",
    title: "UNESCO",
    country: "International",
    description: "United Nations Educational, Scientific and Cultural Organization",
    logo: unescoLogo,
    logoScale: "160%",
  },
  {
    eyebrow: "Egypt",
    title: "ASU",
    country: "Egypt",
    description: "Ain Shams University",
    logo: ainShamsLogo,
    logoScale: "112%",
  },
  {
    eyebrow: "Egypt",
    title: "HU",
    country: "Egypt",
    description: "Helwan University",
    logo: helwanLogo,
    logoScale: "115%",
  },
  {
    eyebrow: "Egypt",
    title: "MYS",
    country: "Egypt",
    description: "Ministry of Youth & Sports",
    logo: mysLogo,
    logoScale: "118%",
  },
];

function WorldMapDots({ side }: { side: "left" | "right" }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 164,
        [side]: -46,
        width: 330,
        height: 270,
        opacity: 0.42,
        backgroundImage: `
          radial-gradient(circle at 18% 34%, rgba(107,143,113,0.22) 0 2px, transparent 2.4px),
          radial-gradient(circle at 31% 25%, rgba(107,143,113,0.18) 0 1.8px, transparent 2.2px),
          radial-gradient(circle at 43% 42%, rgba(107,143,113,0.20) 0 2px, transparent 2.4px),
          radial-gradient(circle at 52% 29%, rgba(107,143,113,0.16) 0 1.7px, transparent 2.1px),
          radial-gradient(circle at 62% 50%, rgba(107,143,113,0.20) 0 2px, transparent 2.4px),
          radial-gradient(circle at 76% 38%, rgba(107,143,113,0.17) 0 1.8px, transparent 2.2px),
          radial-gradient(circle at 84% 58%, rgba(107,143,113,0.18) 0 1.8px, transparent 2.2px),
          radial-gradient(circle at 25% 63%, rgba(107,143,113,0.15) 0 1.6px, transparent 2px),
          radial-gradient(circle at 48% 70%, rgba(107,143,113,0.18) 0 1.8px, transparent 2.2px)`,
        backgroundSize: "82px 68px",
        transform: side === "right" ? "scaleX(-1)" : "none",
        filter: "blur(0.1px)",
      }}
    />
  );
}

export function CertifiedBy() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: `linear-gradient(180deg, ${T.bgPage} 0%, #F3EEE4 48%, ${T.bgCard} 100%)` }}>
      <div style={{ height: 1, background: T.border }} />
      <WorldMapDots side="left" />
      <WorldMapDots side="right" />

      <svg aria-hidden="true" viewBox="0 0 1200 620" preserveAspectRatio="none" style={{ position: "absolute", inset: "48px 0 auto", width: "100%", height: 620, opacity: 0.42, pointerEvents: "none" }}>
        <path d="M120 330 C330 95 820 95 1080 332" fill="none" stroke="rgba(107,143,113,0.16)" strokeWidth="1" />
        <path d="M210 410 C430 230 760 212 990 405" fill="none" stroke="rgba(190,155,92,0.18)" strokeWidth="1" />
        <path d="M330 178 C510 282 705 282 878 178" fill="none" stroke="rgba(107,143,113,0.12)" strokeWidth="1" />
        <circle cx="330" cy="178" r="3" fill="rgba(190,155,92,0.32)" />
        <circle cx="878" cy="178" r="3" fill="rgba(190,155,92,0.32)" />
        <circle cx="600" cy="250" r="4" fill="rgba(107,143,113,0.22)" />
      </svg>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 86,
          left: "50%",
          width: 710,
          height: 710,
          transform: "translateX(-50%)",
          border: "1px solid rgba(107,143,113,0.10)",
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 1px rgba(190,155,92,0.055)",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1320, margin: "0 auto", padding: "128px 48px 112px" }}>
        <FadeUp>
          <div style={{ textAlign: "center", maxWidth: 880, margin: "0 auto 68px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18, marginBottom: 26 }}>
              <div style={{ width: 108, height: 1, background: "linear-gradient(90deg, transparent, rgba(190,155,92,0.58), rgba(107,143,113,0.35))" }} />
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  border: "1px solid rgba(190,155,92,0.34)",
                  background: "radial-gradient(circle at 35% 24%, #FFFFFF 0%, #F7F1E7 62%, #E8DFD0 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 14px 34px rgba(28,28,28,0.07), inset 0 1px 0 rgba(255,255,255,0.8)",
                }}
              >
                <ShieldCheck size={21} color={T.blue} strokeWidth={1.7} />
              </div>
              <div style={{ width: 108, height: 1, background: "linear-gradient(90deg, rgba(107,143,113,0.35), rgba(190,155,92,0.58), transparent)" }} />
            </div>

            <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: T.blue, margin: "0 0 18px" }}>
              Internationally Certified By
            </p>

            <h2
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(40px, 5vw, 72px)",
                fontWeight: 700,
                lineHeight: 1.03,
                letterSpacing: "-0.035em",
                color: T.navy,
                margin: "0 0 24px",
                textWrap: "balance",
              }}
            >
              <span style={{ whiteSpace: "nowrap" }}>Internationally Certified&nbsp;By</span>
              <br />
              <span style={{ color: T.blue }}>Leading Institutions</span>
            </h2>

            <p style={{ fontSize: 17, color: T.textSecondary, margin: 0, lineHeight: 1.75 }}>
              Recognized by academic, international, and governmental organizations.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {CERTIFICATIONS.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <FadeUp key={cert.title} delay={index * 70}>
                <article
                  style={{
                    position: "relative",
                    height: "100%",
                    minHeight: 350,
                    background: "linear-gradient(180deg, rgba(255,255,255,0.86), rgba(248,245,239,0.96))",
                    border: "1px solid rgba(190,155,92,0.26)",
                    borderRadius: 30,
                    padding: "30px 22px 26px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    overflow: "hidden",
                    boxShadow: "0 26px 58px rgba(28,28,28,0.105), 0 8px 20px rgba(28,28,28,0.055), inset 0 1px 0 rgba(255,255,255,0.86)",
                    transition: "transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-7px)";
                    el.style.boxShadow = "0 34px 70px rgba(28,28,28,0.14), 0 12px 26px rgba(28,28,28,0.07), inset 0 1px 0 rgba(255,255,255,0.9)";
                    el.style.borderColor = "rgba(107,143,113,0.48)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "0 26px 58px rgba(28,28,28,0.105), 0 8px 20px rgba(28,28,28,0.055), inset 0 1px 0 rgba(255,255,255,0.86)";
                    el.style.borderColor = "rgba(190,155,92,0.26)";
                  }}
                >
                  <div aria-hidden="true" style={{ position: "absolute", inset: 8, borderRadius: 23, border: "1px solid rgba(190,155,92,0.18)", pointerEvents: "none" }} />
                  <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 30, right: 30, height: 5, borderRadius: "0 0 999px 999px", background: "linear-gradient(90deg, #355D3B, #6B8F71, #B99A5F)" }} />
                  <div aria-hidden="true" style={{ position: "absolute", top: -70, width: 170, height: 116, borderRadius: "0 0 92px 92px", background: "linear-gradient(180deg, rgba(107,143,113,0.10), rgba(190,155,92,0.06))" }} />

                  <p style={{ fontSize: 10, fontWeight: 800, color: T.blue, letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 20px" }}>
                    {cert.eyebrow}
                  </p>

                  <div
                    style={{
                      width: 104,
                      height: 104,
                      borderRadius: "50%",
                      overflow: "hidden",
                      background:
                        "radial-gradient(circle at 34% 22%, #FFFFFF 0%, #F5EFE5 58%, #E5DAC9 100%)",
                      border: "1px solid rgba(190,155,92,0.30)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 0,
                      marginBottom: 24,
                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.92), inset 0 -10px 22px rgba(107,143,113,0.055), 0 14px 28px rgba(28,28,28,0.08)",
                    }}
                  >
                    {cert.mark === "asit" ? (
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: T.blue }}>
                        <span style={{ fontFamily: "Playfair Display, serif", fontSize: 28, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }}>
                          ASIT
                        </span>
                        <span style={{ width: 42, height: 1.5, background: "rgba(190,155,92,0.72)", margin: "7px 0 5px" }} />
                        <span style={{ fontSize: 8, fontWeight: 800, letterSpacing: "0.22em", color: T.navy }}>USA</span>
                      </div>
                    ) : cert.logo ? (
                      <ImageWithFallback
                        src={cert.logo}
                        alt={`${cert.title} logo`}
                        style={{
                          width: cert.logoScale,
                          height: cert.logoScale,
                          objectFit: "contain",
                          display: "block",
                          borderRadius: "50%",
                        }}
                      />
                    ) : Icon ? (
                      <Icon size={46} color={T.blue} strokeWidth={1.42} />
                    ) : null}
                  </div>

                  <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 31, fontWeight: 800, color: T.navy, margin: "0 0 8px", letterSpacing: "-0.025em", lineHeight: 1 }}>
                    {cert.title}
                  </h3>
                  <p style={{ fontSize: 10.5, fontWeight: 800, color: T.blue, letterSpacing: "0.16em", textTransform: "uppercase", margin: "0 0 16px" }}>
                    {cert.country}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                    <span style={{ width: 28, height: 1, background: "rgba(190,155,92,0.48)" }} />
                    <Sparkles size={12} color="#B99A5F" strokeWidth={1.8} />
                    <span style={{ width: 28, height: 1, background: "rgba(190,155,92,0.48)" }} />
                  </div>
                  <p style={{ fontSize: 13, color: T.textSecondary, lineHeight: 1.62, margin: 0, maxWidth: 188 }}>
                    {cert.description}
                  </p>

                  <div aria-hidden="true" style={{ marginTop: "auto", paddingTop: 20, color: "rgba(107,143,113,0.35)", fontFamily: "Playfair Display, serif", fontSize: 23, lineHeight: 1 }}>
                    ‹ ✦ ›
                  </div>
                </article>
              </FadeUp>
            );
          })}
        </div>

        <FadeUp delay={360}>
          <div
            style={{
              position: "relative",
              margin: "64px auto 0",
              maxWidth: 980,
              border: "1px solid rgba(190,155,92,0.28)",
              background: "linear-gradient(180deg, rgba(255,255,255,0.62), rgba(248,245,239,0.78))",
              borderRadius: 28,
              padding: "22px 34px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 18,
              boxShadow: "0 20px 46px rgba(28,28,28,0.075), inset 0 1px 0 rgba(255,255,255,0.8)",
              textAlign: "center",
              overflow: "hidden",
            }}
          >
            <div aria-hidden="true" style={{ position: "absolute", left: 26, top: 0, bottom: 0, width: 1, background: "linear-gradient(180deg, transparent, rgba(190,155,92,0.44), transparent)" }} />
            <div aria-hidden="true" style={{ position: "absolute", right: 26, top: 0, bottom: 0, width: 1, background: "linear-gradient(180deg, transparent, rgba(190,155,92,0.44), transparent)" }} />
            <div style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid rgba(190,155,92,0.34)", background: "rgba(107,143,113,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto" }}>
              <Award size={17} color={T.blue} strokeWidth={1.7} />
            </div>
            <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: T.navy, lineHeight: 1.65, letterSpacing: "0.005em" }}>
              Certified and recognized across international, academic, and governmental training institutions.
            </p>
            <div style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid rgba(190,155,92,0.34)", background: "rgba(107,143,113,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto" }}>
              <ShieldCheck size={17} color={T.blue} strokeWidth={1.7} />
            </div>
          </div>
        </FadeUp>
      </div>
      <div style={{ height: 1, background: T.border }} />
    </section>
  );
}
