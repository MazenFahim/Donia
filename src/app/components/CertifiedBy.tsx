import { Award, Globe2, Landmark, ShieldCheck, Sparkles } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import ainShamsLogo from "@/imports/ainshams.png";
import helwanLogo from "@/imports/helwan.png";
import mysLogo from "@/imports/MYS.png";
import unescoLogo from "@/imports/UNSECO-1.png";
import { T } from "./tokens";
import { FadeUp } from "./FadeUp";

type Certification = {
  eyebrow: string;
  title: string;
  country: string;
  description: string;
  logo?: string;
  logoScale?: number;
  logoOffsetY?: number;
  mark?: "asit";
};

const CERT_GOLD = "#B99A5F";
const DEEP_GREEN = "#385F3E";
const SOFT_GREEN = "#6B8F71";

const CERTIFICATIONS: Certification[] = [
  {
    eyebrow: "US",
    title: "ASIT",
    country: "USA",
    description: "American Society for Instructional Technology",
    mark: "asit",
  },
  {
    eyebrow: "International",
    title: "UNESCO",
    country: "International",
    description: "United Nations Educational, Scientific and Cultural Organization",
    logo: unescoLogo,
    logoScale: 1.42,
  },
  {
    eyebrow: "Egypt",
    title: "ASU",
    country: "Egypt",
    description: "Ain Shams University",
    logo: ainShamsLogo,
    logoScale: 1.48,
  },
  {
    eyebrow: "Egypt",
    title: "HU",
    country: "Egypt",
    description: "Helwan University",
    logo: helwanLogo,
    logoScale: 1.52,
  },
  {
    eyebrow: "Egypt",
    title: "MYS",
    country: "Egypt",
    description: "Ministry of Youth & Sports",
    logo: mysLogo,
    logoScale: 1.46,
  },
];

function WorldMapDots({ side }: { side: "left" | "right" }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 138,
        [side]: -34,
        width: 360,
        height: 300,
        opacity: 0.36,
        backgroundImage: `
          radial-gradient(circle at 18% 34%, rgba(107,143,113,0.24) 0 2px, transparent 2.35px),
          radial-gradient(circle at 31% 25%, rgba(107,143,113,0.16) 0 1.7px, transparent 2.15px),
          radial-gradient(circle at 43% 42%, rgba(107,143,113,0.20) 0 2px, transparent 2.35px),
          radial-gradient(circle at 52% 29%, rgba(190,155,92,0.15) 0 1.7px, transparent 2.1px),
          radial-gradient(circle at 62% 50%, rgba(107,143,113,0.19) 0 2px, transparent 2.35px),
          radial-gradient(circle at 76% 38%, rgba(107,143,113,0.15) 0 1.7px, transparent 2.15px),
          radial-gradient(circle at 84% 58%, rgba(190,155,92,0.13) 0 1.7px, transparent 2.1px),
          radial-gradient(circle at 25% 63%, rgba(107,143,113,0.13) 0 1.55px, transparent 2px),
          radial-gradient(circle at 48% 70%, rgba(107,143,113,0.16) 0 1.75px, transparent 2.15px)`,
        backgroundSize: "78px 66px",
        transform: side === "right" ? "scaleX(-1)" : "none",
        pointerEvents: "none",
      }}
    />
  );
}

function BackgroundLines() {
  return (
    <>
      <svg
        aria-hidden="true"
        viewBox="0 0 1400 620"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          inset: "20px 0 auto",
          width: "100%",
          height: 620,
          opacity: 0.54,
          pointerEvents: "none",
        }}
      >
        <path d="M120 336 C340 72 1040 72 1280 338" fill="none" stroke="rgba(107,143,113,0.13)" strokeWidth="1" />
        <path d="M190 416 C440 220 955 220 1210 414" fill="none" stroke="rgba(190,155,92,0.16)" strokeWidth="1" />
        <path d="M360 168 C520 276 880 276 1040 168" fill="none" stroke="rgba(107,143,113,0.11)" strokeWidth="1" />
        <path d="M0 258 C300 190 430 190 690 260 C950 332 1090 248 1400 190" fill="none" stroke="rgba(107,143,113,0.075)" strokeWidth="1" />
        <circle cx="360" cy="168" r="3.5" fill="rgba(190,155,92,0.30)" />
        <circle cx="1040" cy="168" r="3.5" fill="rgba(190,155,92,0.30)" />
        <circle cx="700" cy="258" r="4" fill="rgba(107,143,113,0.22)" />
      </svg>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 72,
          left: "50%",
          width: 690,
          height: 690,
          transform: "translateX(-50%)",
          border: "1px solid rgba(107,143,113,0.095)",
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 1px rgba(190,155,92,0.05)",
        }}
      />
    </>
  );
}

function LogoMedallion({ cert }: { cert: Certification }) {
  return (
    <div
      style={{
        position: "relative",
        width: 112,
        height: 112,
        borderRadius: "50%",
        background: "radial-gradient(circle at 34% 22%, #FFFFFF 0%, #F8F2E8 54%, #E7DCCB 100%)",
        border: "1px solid rgba(185,154,95,0.36)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 26,
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.96), inset 0 -14px 28px rgba(107,143,113,0.06), 0 16px 32px rgba(28,28,28,0.085)",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 9,
          borderRadius: "50%",
          border: "1px solid rgba(190,155,92,0.18)",
        }}
      />

      {cert.mark === "asit" ? (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: DEEP_GREEN }}>
          <span style={{ fontFamily: "Playfair Display, serif", fontSize: 31, fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1 }}>
            ASIT
          </span>
          <span style={{ width: 48, height: 1.5, background: "rgba(185,154,95,0.76)", margin: "8px 0 5px" }} />
          <span style={{ fontSize: 8, fontWeight: 900, letterSpacing: "0.24em", color: T.navy }}>USA</span>
        </div>
      ) : cert.logo ? (
        <div
          style={{
            width: 82,
            height: 82,
            borderRadius: "50%",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ImageWithFallback
            src={cert.logo}
            alt={`${cert.title} logo`}
            style={{
              width: 82,
              height: 82,
              objectFit: "contain",
              display: "block",
              mixBlendMode: "multiply",
              transform: `scale(${cert.logoScale ?? 1}) translateY(${cert.logoOffsetY ?? 0}px)`,
              transformOrigin: "center",
              filter: "contrast(1.05) saturate(0.94)",
            }}
          />
        </div>
      ) : (
        <Landmark size={45} color={DEEP_GREEN} strokeWidth={1.35} />
      )}
    </div>
  );
}

function CertificationCard({ cert, index }: { cert: Certification; index: number }) {
  return (
    <FadeUp delay={index * 70}>
      <article
        className="group"
        style={{
          position: "relative",
          height: "100%",
          minHeight: 372,
          background: "linear-gradient(180deg, rgba(255,255,255,0.90), rgba(249,246,240,0.98))",
          border: "1px solid rgba(190,155,92,0.26)",
          borderRadius: 32,
          padding: "32px 22px 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          overflow: "hidden",
          boxShadow:
            "0 28px 60px rgba(28,28,28,0.105), 0 9px 20px rgba(28,28,28,0.05), inset 0 1px 0 rgba(255,255,255,0.90)",
          transition: "transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "translateY(-8px)";
          el.style.boxShadow =
            "0 38px 78px rgba(28,28,28,0.145), 0 14px 28px rgba(28,28,28,0.07), inset 0 1px 0 rgba(255,255,255,0.94)";
          el.style.borderColor = "rgba(107,143,113,0.46)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "translateY(0)";
          el.style.boxShadow =
            "0 28px 60px rgba(28,28,28,0.105), 0 9px 20px rgba(28,28,28,0.05), inset 0 1px 0 rgba(255,255,255,0.90)";
          el.style.borderColor = "rgba(190,155,92,0.26)";
        }}
      >
        <div aria-hidden="true" style={{ position: "absolute", inset: 8, borderRadius: 24, border: "1px solid rgba(190,155,92,0.16)", pointerEvents: "none" }} />

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 28,
            right: 28,
            height: 6,
            borderRadius: "0 0 999px 999px",
            background: "linear-gradient(90deg, #355D3B 0%, #6B8F71 48%, #B99A5F 100%)",
          }}
        />

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -72,
            width: 176,
            height: 122,
            borderRadius: "0 0 92px 92px",
            background: "linear-gradient(180deg, rgba(107,143,113,0.09), rgba(190,155,92,0.045))",
          }}
        />

        <p style={{ fontSize: 10, fontWeight: 900, color: SOFT_GREEN, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 22px" }}>
          {cert.eyebrow}
        </p>

        <LogoMedallion cert={cert} />

        <h3
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: 32,
            fontWeight: 800,
            color: T.navy,
            margin: "0 0 8px",
            letterSpacing: "-0.032em",
            lineHeight: 1,
          }}
        >
          {cert.title}
        </h3>

        <p style={{ fontSize: 10.5, fontWeight: 900, color: SOFT_GREEN, letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 17px" }}>
          {cert.country}
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 17 }}>
          <span style={{ width: 30, height: 1, background: "rgba(185,154,95,0.48)" }} />
          <Sparkles size={13} color={CERT_GOLD} strokeWidth={1.8} />
          <span style={{ width: 30, height: 1, background: "rgba(185,154,95,0.48)" }} />
        </div>

        <p style={{ fontSize: 13, color: T.textSecondary, lineHeight: 1.62, margin: 0, maxWidth: 188 }}>
          {cert.description}
        </p>

        <div
          aria-hidden="true"
          style={{
            marginTop: "auto",
            paddingTop: 22,
            display: "flex",
            alignItems: "center",
            gap: 7,
            color: "rgba(107,143,113,0.34)",
          }}
        >
          <span style={{ width: 16, height: 1, background: "currentColor" }} />
          <Sparkles size={13} strokeWidth={1.6} />
          <span style={{ width: 16, height: 1, background: "currentColor" }} />
        </div>
      </article>
    </FadeUp>
  );
}

export function CertifiedBy() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(180deg, ${T.bgPage} 0%, #F1ECE2 52%, ${T.bgCard} 100%)`,
      }}
    >
      <div style={{ height: 1, background: T.border }} />
      <WorldMapDots side="left" />
      <WorldMapDots side="right" />
      <BackgroundLines />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1320, margin: "0 auto", padding: "118px 48px 108px" }}>
        <FadeUp>
          <div style={{ textAlign: "center", maxWidth: 920, margin: "0 auto 66px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18, marginBottom: 24 }}>
              <div style={{ width: 112, height: 1, background: "linear-gradient(90deg, transparent, rgba(185,154,95,0.58), rgba(107,143,113,0.36))" }} />
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  border: "1px solid rgba(185,154,95,0.34)",
                  background: "radial-gradient(circle at 35% 24%, #FFFFFF 0%, #F7F1E7 62%, #E8DFD0 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 14px 34px rgba(28,28,28,0.07), inset 0 1px 0 rgba(255,255,255,0.82)",
                }}
              >
                <ShieldCheck size={21} color={SOFT_GREEN} strokeWidth={1.7} />
              </div>
              <div style={{ width: 112, height: 1, background: "linear-gradient(90deg, rgba(107,143,113,0.36), rgba(185,154,95,0.58), transparent)" }} />
            </div>

            <p style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.24em", textTransform: "uppercase", color: SOFT_GREEN, margin: "0 0 18px" }}>
              Internationally Certified By
            </p>

            <h2
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(42px, 5.15vw, 78px)",
                fontWeight: 700,
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
                color: T.navy,
                margin: "0 0 22px",
                textWrap: "balance",
              }}
            >
              Internationally Certified By
              <br />
              <span style={{ color: SOFT_GREEN }}>Leading Institutions</span>
            </h2>

            <p style={{ fontSize: 17, color: T.textSecondary, margin: 0, lineHeight: 1.75 }}>
              Recognized by academic, international, and governmental organizations.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {CERTIFICATIONS.map((cert, index) => (
            <CertificationCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>

        <FadeUp delay={360}>
          <div
            style={{
              position: "relative",
              margin: "64px auto 0",
              maxWidth: 960,
              border: "1px solid rgba(190,155,92,0.28)",
              background: "linear-gradient(180deg, rgba(255,255,255,0.68), rgba(248,245,239,0.82))",
              borderRadius: 30,
              padding: "18px 28px",
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              alignItems: "center",
              gap: 18,
              boxShadow: "0 22px 46px rgba(28,28,28,0.078), inset 0 1px 0 rgba(255,255,255,0.82)",
              textAlign: "center",
              overflow: "hidden",
            }}
          >
            <div aria-hidden="true" style={{ position: "absolute", left: 24, top: 0, bottom: 0, width: 1, background: "linear-gradient(180deg, transparent, rgba(190,155,92,0.42), transparent)" }} />
            <div aria-hidden="true" style={{ position: "absolute", right: 24, top: 0, bottom: 0, width: 1, background: "linear-gradient(180deg, transparent, rgba(190,155,92,0.42), transparent)" }} />

            <div style={{ width: 42, height: 42, borderRadius: "50%", border: "1px solid rgba(190,155,92,0.34)", background: "rgba(107,143,113,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Award size={18} color={SOFT_GREEN} strokeWidth={1.7} />
            </div>

            <div>
              <p style={{ margin: "0 0 7px", fontSize: 15, fontWeight: 800, color: T.navy, lineHeight: 1.55 }}>
                Certified and recognized across international, academic, and governmental training institutions.
              </p>
              <p style={{ margin: 0, fontSize: 11, fontWeight: 800, color: SOFT_GREEN, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                Academic • International • Governmental Recognition
              </p>
            </div>

            <div style={{ width: 42, height: 42, borderRadius: "50%", border: "1px solid rgba(190,155,92,0.34)", background: "rgba(107,143,113,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Globe2 size={18} color={SOFT_GREEN} strokeWidth={1.7} />
            </div>
          </div>
        </FadeUp>
      </div>

      <div style={{ height: 1, background: T.border }} />
    </section>
  );
}
