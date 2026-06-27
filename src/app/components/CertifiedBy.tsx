import { ShieldCheck, Star } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import ainShamsLogo from "@/imports/ainshams.png";
import helwanLogo from "@/imports/helwan.png";
import mysLogo from "@/imports/MYS.png";
import unescoLogo from "@/imports/UNESCO.png";
import asitLogo from "@/imports/ASIT.png";
import nasserLogo from "@/imports/Nasser Military Academy.jpg";
import { T } from "./tokens";
import { FadeUp } from "./FadeUp";

type Certification = {
  tag: string;
  abbr: string;
  fullName: string;
  country: string;
  description: string;
  logo: string;
  logoSize?: number;
};

const CERTIFICATIONS: Certification[] = [
  {
    tag: "United States",
    abbr: "ASIT",
    fullName: "American Society for Instructional Technology",
    country: "Washington, D.C.",
    description:
      "Recognized by the foremost professional body advancing educational technology and instructional design excellence across North America and beyond.",
    logo: asitLogo,
    logoSize: 76,
  },
  {
    tag: "International",
    abbr: "UNESCO",
    fullName: "United Nations Educational, Scientific and Cultural Organization",
    country: "Paris, France",
    description:
      "Endorsed under UNESCO's international quality framework, upholding the highest global standards of knowledge, cultural exchange, and scientific education.",
    logo: unescoLogo,
    logoSize: 88,
  },
  {
    tag: "Egypt",
    abbr: "Nasser",
    fullName: "Gamal Abdel Nasser International Award",
    country: "Cairo, Egypt",
    description:
      "Recipient of the prestigious Nasser Award honoring distinguished contributions to education and societal advancement across the Arab Republic.",
    logo: nasserLogo,
    logoSize: 80,
  },
  {
    tag: "Egypt",
    abbr: "ASU",
    fullName: "Ain Shams University Academic Council",
    country: "Cairo, Egypt",
    description:
      "Formally accredited by Ain Shams University, carrying over seven decades of scholarly tradition and deep academic prestige in the region.",
    logo: ainShamsLogo,
    logoSize: 84,
  },
  {
    tag: "EGYPT",
    abbr: "HU",
    fullName: "Helwan University Academic Council",
    country: "Helwan, Egypt",
    description:
      "Endorsed by Helwan University — a leading Egyptian institution renowned for its rigorous academic standards and commitment to excellence in higher education.",
    logo: helwanLogo,
    logoSize: 84,
  },
  {
    tag: "EGYPT",
    abbr: "MYS",
    fullName: "MYS Institute for Leadership and Excellence",
    country: "Cairo, Egypt",
    description:
      "Accredited by the MYS Institute — a leading Egyptian center for leadership development, professional excellence, and transformative education across the MENA region.",
    logo: mysLogo,
    logoSize: 84,
  },
];

function SparkDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", width: "100%", margin: "16px 0" }}>
      <div
        style={{
          flex: 1,
          height: 1,
          background: "linear-gradient(to right, transparent, rgba(46,139,122,0.5))",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 3, margin: "0 8px" }}>
        <div
          style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(46,139,122,0.45)" }}
        />
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
          <path
            d="M5.5 0L6.55 4L10.5 5.5L6.55 7L5.5 11L4.45 7L0.5 5.5L4.45 4L5.5 0Z"
            fill="#2E8B7A"
          />
        </svg>
        <div
          style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(46,139,122,0.45)" }}
        />
      </div>
      <div
        style={{
          flex: 1,
          height: 1,
          background: "linear-gradient(to left, transparent, rgba(46,139,122,0.5))",
        }}
      />
    </div>
  );
}

function CertCard({ tag, abbr, fullName, country, description, logo, logoSize = 80 }: Certification) {
  return (
    <article
      className="group"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        borderRadius: 22,
        overflow: "hidden",
        background: "linear-gradient(168deg, #F4F6F7 0%, #E8ECEE 52%, #D5DCDF 100%)",
        border: "1px solid rgba(46,139,122,0.18)",
        boxShadow: "0 2px 8px rgba(26,42,56,0.05), 0 1px 2px rgba(26,42,56,0.04)",
        transition: "transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
        height: "100%",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-6px)";
        el.style.boxShadow = "0 0 0 1.5px rgba(46,139,122,0.3) inset, 0 12px 40px rgba(46,139,122,0.12)";
        el.style.borderColor = "rgba(46,139,122,0.4)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "0 2px 8px rgba(26,42,56,0.05), 0 1px 2px rgba(26,42,56,0.04)";
        el.style.borderColor = "rgba(46,139,122,0.18)";
      }}
    >
      {/* Top shimmer bar */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background:
            "linear-gradient(90deg, transparent 0%, rgba(46,139,122,0.4) 25%, rgba(46,139,122,0.9) 50%, rgba(46,139,122,0.4) 75%, transparent 100%)",
        }}
      />

      {/* Top-right star ornament */}
      <svg
        aria-hidden="true"
        style={{ position: "absolute", top: 14, right: 14, opacity: 0.15 }}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path d="M8 0L9.4 5.6L15 8L9.4 10.4L8 16L6.6 10.4L1 8L6.6 5.6Z" fill="#2E8B7A" />
      </svg>

      {/* Bottom-left star ornament */}
      <svg
        aria-hidden="true"
        style={{ position: "absolute", bottom: 14, left: 14, opacity: 0.08 }}
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
      >
        <path d="M5 0L6 3.5L9.5 5L6 6.5L5 10L4 6.5L0.5 5L4 3.5Z" fill="#5B7FA6" />
      </svg>

      {/* Card content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: 1,
          padding: "32px 28px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Country tag */}
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            marginBottom: 20,
            padding: "5px 16px",
            borderRadius: 9999,
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontFamily: "'Poppins', sans-serif",
            background: "rgba(46,139,122,0.08)",
            color: "#1A6B5E",
            border: "1px solid rgba(46,139,122,0.22)",
          }}
        >
          {tag}
        </span>

        {/* Icon medallion */}
        <div style={{ position: "relative", marginBottom: 22 }}>
          {/* Halo ring */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: -7,
              borderRadius: "50%",
              background:
                "conic-gradient(from 0deg, rgba(46,139,122,0.3) 0deg, rgba(46,139,122,0.05) 60deg, rgba(91,127,166,0.2) 120deg, rgba(46,139,122,0.05) 180deg, rgba(46,139,122,0.3) 240deg, rgba(46,139,122,0.05) 300deg, rgba(46,139,122,0.3) 360deg)",
            }}
          />
          {/* Medallion */}
          <div
            style={{
              position: "relative",
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "linear-gradient(150deg, #ffffff 0%, #f0f4f5 100%)",
              boxShadow:
                "0 0 0 1.5px rgba(46,139,122,0.25), 0 4px 18px rgba(26,42,56,0.1), inset 0 1px 2px rgba(255,255,255,1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <ImageWithFallback
              src={logo}
              alt={`${abbr} logo`}
              style={{
                width: logoSize,
                height: logoSize,
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* Abbreviation */}
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#1A2A38",
            lineHeight: 1,
            letterSpacing: "0.1em",
            margin: 0,
          }}
        >
          {abbr}
        </h3>

        {/* Country subtitle */}
        <p
          style={{
            marginTop: 5,
            fontSize: 10,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            fontWeight: 500,
            fontFamily: "'Poppins', sans-serif",
            color: "#2E8B7A",
          }}
        >
          {country}
        </p>

        <SparkDivider />

        {/* Full institution name */}
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "0.95rem",
            fontWeight: 600,
            color: "#1A2A38",
            lineHeight: 1.45,
            margin: "0 0 12px",
          }}
        >
          {fullName}
        </p>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "0.8rem",
            color: "#4A5E6A",
            fontWeight: 300,
            lineHeight: 1.78,
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
    </article>
  );
}

export function CertifiedBy() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 110% 55% at 50% -5%, rgba(46,139,122,0.05) 0%, transparent 60%), #F4F6F7",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div style={{ height: 1, background: T.border }} />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1320,
          margin: "0 auto",
          padding: "96px 48px 96px",
        }}
      >
        {/* ── Header ── */}
        <FadeUp>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              maxWidth: 660,
              margin: "0 auto 64px",
            }}
          >
            {/* Shield badge */}
            <div style={{ position: "relative", marginBottom: 24 }}>
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: -10,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(46,139,122,0.45) 0%, transparent 70%)",
                  filter: "blur(14px)",
                }}
              />
              <div
                style={{
                  position: "relative",
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "#2E8B7A",
                  border: "1px solid rgba(91,127,166,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow:
                    "0 14px 34px rgba(46,139,122,0.22), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                <ShieldCheck size={21} color="#ffffff" strokeWidth={1.7} />
              </div>
            </div>

            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  height: 1,
                  width: 40,
                  background: "linear-gradient(to right, transparent, rgba(46,139,122,0.5))",
                }}
              />
              <p
                style={{
                  fontSize: 10.5,
                  fontWeight: 600,
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "#2E8B7A",
                  margin: 0,
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Internationally Certified By
              </p>
              <div
                style={{
                  height: 1,
                  width: 40,
                  background: "linear-gradient(to left, transparent, rgba(46,139,122,0.5))",
                }}
              />
            </div>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4.2vw, 3.4rem)",
                fontWeight: 600,
                color: "#1A2A38",
                lineHeight: 1.18,
                letterSpacing: "-0.01em",
                margin: "0 0 20px",
              }}
            >
              Internationally Certified By{" "}
              <em style={{ fontStyle: "italic", color: "#2E8B7A", fontWeight: 400 }}>
                Leading Institutions
              </em>
            </h2>

            {/* Teal rule */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                width: 160,
                margin: "0 auto 24px",
              }}
            >
              <div style={{ flex: 1, height: 1, background: "rgba(46,139,122,0.45)" }} />
              <Star size={11} fill="#2E8B7A" stroke="none" aria-hidden="true" />
              <div style={{ flex: 1, height: 1, background: "rgba(46,139,122,0.45)" }} />
            </div>

            {/* Subtext */}
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "1rem",
                color: "#4A5E6A",
                fontWeight: 300,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Our programs and credentials are formally recognized and endorsed by the world's most
              distinguished academic, scientific, and cultural bodies.
            </p>
          </div>
        </FadeUp>

        {/* ── 3×2 Card Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            maxWidth: 1280,
            margin: "0 auto",
          }}
          className="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {CERTIFICATIONS.map((cert, index) => (
            <FadeUp key={cert.abbr} delay={index * 70}>
              <CertCard {...cert} />
            </FadeUp>
          ))}
        </div>

        {/* ── Footer ornament ── */}
        <FadeUp delay={500}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 18,
              marginTop: 64,
              maxWidth: 220,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              style={{
                flex: 1,
                height: 1,
                background: "linear-gradient(to right, transparent, rgba(46,139,122,0.4))",
              }}
            />
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M9 0L10.6 6.4L17 9L10.6 11.6L9 18L7.4 11.6L1 9L7.4 6.4L9 0Z"
                fill="#2E8B7A"
                opacity="0.6"
              />
            </svg>
            <div
              style={{
                flex: 1,
                height: 1,
                background: "linear-gradient(to left, transparent, rgba(46,139,122,0.4))",
              }}
            />
          </div>
        </FadeUp>
      </div>

      <div style={{ height: 1, background: T.border }} />
    </section>
  );
}