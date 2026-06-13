import { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import heroPhoto from "@/imports/5791871838450290263.jpg";
import { T } from "./tokens";

const HERO_STATS = [
  { value: 10000, label: "Students Trained" },
  { value: 5, label: "Years Experience" },
];

const formatStatNumber = (value: number) => `${Math.round(value).toLocaleString("en-US")}+`;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function Hero() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const hasAnimatedStats = useRef(false);
  const [animatedStats, setAnimatedStats] = useState(HERO_STATS.map(() => 0));

  useEffect(() => {
    const statsElement = statsRef.current;
    if (!statsElement) return;

    const startCounterAnimation = () => {
      if (hasAnimatedStats.current) return;
      hasAnimatedStats.current = true;

      const duration = 1500;
      const startedAt = performance.now();

      const animate = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const easedProgress = easeOutCubic(progress);

        setAnimatedStats(HERO_STATS.map((stat) => stat.value * easedProgress));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setAnimatedStats(HERO_STATS.map((stat) => stat.value));
        }
      };

      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounterAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <>
      <section
        className="hero-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: isMobile ? "48px 20px 64px" : "80px 48px 100px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 480px",
          gap: isMobile ? 48 : 80,
          alignItems: "center",
          minHeight: "calc(100vh - 91px)",
        }}
      >
        {/* LEFT: Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 32, height: 1.5, background: T.blue }} />
            <span
              style={{
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: T.blue,
              }}
            >
              Academic Trainer & Educator · Internationally Certified
            </span>
          </div>

          <div>
            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 700,
                color: T.navy,
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              Donia Essam
              <br />
              Mohamed Amin
            </h1>
          </div>

          <p
            style={{
              fontSize: 18,
              fontWeight: 400,
              color: T.textSecondary,
              margin: 0,
              lineHeight: 1.6,
              borderLeft: `3px solid ${T.border}`,
              paddingLeft: 20,
            }}
          >
            Internationally Certified Trainer
            <span
              style={{
                display: "inline-block",
                width: 4,
                height: 4,
                background: T.blue,
                borderRadius: "50%",
                margin: "0 10px 2px",
                verticalAlign: "middle",
              }}
            />
            Personal Skills Development
            <span
              style={{
                display: "inline-block",
                width: 4,
                height: 4,
                background: T.blue,
                borderRadius: "50%",
                margin: "0 10px 2px",
                verticalAlign: "middle",
              }}
            />
            Train-the-Trainer
          </p>

          <p
            style={{
              fontSize: 16,
              color: T.textSecondary,
              margin: 0,
              lineHeight: 1.8,
              maxWidth: 520,
            }}
          >
            With over 5 years of experience and 10,000+ students trained across Egyptian
            universities, Donia bridges academic knowledge and real-world career readiness.
          </p>

          <div ref={statsRef} style={{ display: "flex", gap: 0 }}>
            {HERO_STATS.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  padding: "20px 32px",
                  background: i === 0 ? T.navy : T.bgCard,
                  borderRight: i === 0 ? "none" : `1px solid ${T.border}`,
                  flex: 1,
                  maxWidth: 200,
                  borderRadius: i === 0 ? "12px 0 0 12px" : "0 12px 12px 0",
                }}
              >
                <p
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: i === 0 ? T.gold : T.navy,
                    margin: "0 0 4px",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {formatStatNumber(animatedStats[i])}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: i === 0 ? "rgba(255,255,255,0.7)" : T.textSecondary,
                    margin: 0,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button
              style={{
                background: T.blue,
                color: T.white,
                border: "none",
                height: 48,
                padding: "0 32px",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "Poppins, sans-serif",
                cursor: "pointer",
                letterSpacing: "0.04em",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                gap: 10,
                transition: "background 0.15s, box-shadow 0.15s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#2a45e8";
                el.style.boxShadow = "0 6px 24px rgba(61,90,254,0.38)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = T.blue;
                el.style.boxShadow = "none";
              }}
            >
              View My Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="square" />
              </svg>
            </button>
            <button
              style={{
                background: "transparent",
                color: T.navy,
                border: `1.5px solid ${T.navy}`,
                height: 48,
                padding: "0 32px",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "Poppins, sans-serif",
                cursor: "pointer",
                letterSpacing: "0.04em",
                borderRadius: 10,
                transition: "background 0.15s, border-color 0.15s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = T.gold;
                el.style.background = "rgba(107,143,113,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = T.navy;
                el.style.background = "transparent";
              }}
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT: Photo column */}
        <div style={{ position: "relative", alignSelf: "center" }}>
          <div
            style={{
              position: "absolute",
              top: -24,
              right: -24,
              width: "85%",
              height: "92%",
              background: T.navy,
              borderRadius: 16,
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 24,
              left: -8,
              width: 4,
              height: "80%",
              background: T.blue,
              borderRadius: 2,
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -32,
              left: -32,
              width: 96,
              height: 96,
              backgroundImage: `radial-gradient(circle, ${T.blue}55 1.5px, transparent 1.5px)`,
              backgroundSize: "12px 12px",
              zIndex: 0,
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              aspectRatio: "3 / 4",
              minHeight: 300,
              overflow: "hidden",
              background: T.bgCard,
              borderRadius: 12,
            }}
          >
            <ImageWithFallback
              src={heroPhoto}
              alt="Donia Essam Mohamed Amin at a training graduation ceremony with her students"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 15%",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 80,
                background: `linear-gradient(to top, ${T.bgPage}18, transparent)`,
                pointerEvents: "none",
              }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 48,
              left: -28,
              zIndex: 3,
              background: T.gold,
              padding: "12px 20px",
              display: "flex",
              alignItems: "center",
              gap: 8,
              boxShadow: "0 8px 32px rgba(43,43,43,0.18)",
              borderRadius: 10,
            }}
          >
            <span style={{ fontSize: 16, color: T.navy }}>✦</span>
            <div>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: T.navy,
                  margin: 0,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  lineHeight: 1,
                }}
              >
                UNESCO Certified
              </p>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  color: "rgba(43,43,43,0.55)",
                  margin: "3px 0 0",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                International Trainer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: 48,
          gap: 8,
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 1,
            height: 40,
            background: `linear-gradient(to bottom, ${T.border}, transparent)`,
          }}
        />
      </div>
    </>
  );
}