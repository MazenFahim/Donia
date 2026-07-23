import { useEffect, useRef, useState } from "react";
// @ts-ignore
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
// @ts-ignore
import heroPhoto from "@/imports/hero_photo.jpg";
import { T } from "./tokens";

const HERO_STATS = [
  { value: 10000, label: "Students Trained" },
  { value: 5, label: "Years Experience" },
];

const formatStatNumber = (value: number) => `${Math.round(value).toLocaleString("en-US")}+`;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const getScrollOffset = () => {
  const navbar = document.querySelector("[data-site-navbar]") as HTMLElement | null;
  return (navbar?.offsetHeight ?? 82) + 18;
};

const smoothScrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (!section) return;

  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);

  section.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "start",
  });
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  return isMobile;
};

export function Hero() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const hasAnimatedStats = useRef(false);
  const [animatedStats, setAnimatedStats] = useState(HERO_STATS.map(() => 0));
  const isMobile = useIsMobile();

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

  return (
    <>
      <section
        id="hero"
        className="hero-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: isMobile ? "54px 22px 64px" : "80px 48px 100px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) 480px",
          gap: isMobile ? 44 : 80,
          alignItems: "center",
          minHeight: isMobile ? "auto" : "calc(100vh - 91px)",
        }}
      >
        {/* LEFT: Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 26 : 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 32, height: 1.5, background: T.blue, flexShrink: 0 }} />
            <span
              style={{
                fontSize: isMobile ? 11 : 12,
                fontWeight: 500,
                letterSpacing: isMobile ? "0.1em" : "0.14em",
                textTransform: "uppercase",
                color: T.blue,
                lineHeight: 1.6,
              }}
            >
              Educational Consultant · Internationally Certified
            </span>
          </div>

          <div>
            <h1
              style={{
                fontSize: isMobile ? "clamp(40px, 11vw, 54px)" : "clamp(44px, 5vw, 56px)",
                fontWeight: 700,
                color: T.navy,
                margin: 0,
                lineHeight: 1.06,
                letterSpacing: "-0.04em",
              }}
            >
              Donia Essam
              <br />
              Mohamed Amin
            </h1>
          </div>

          <p
            style={{
              fontSize: isMobile ? 17 : 18,
              fontWeight: 400,
              color: T.textSecondary,
              margin: 0,
              lineHeight: 1.65,
              borderLeft: `3px solid ${T.border}`,
              paddingLeft: isMobile ? 16 : 20,
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
            Teacher Professional Development & Curriculum Design
          </p>

          <p
            style={{
              fontSize: isMobile ? 16 : 16,
              color: T.textSecondary,
              margin: 0,
              lineHeight: 1.8,
              maxWidth: 520,
            }}
          >
            With over 5 years of experience and 10,000+ students trained across Egyptian
            universities, Donia bridges academic knowledge and real-world career readiness.
          </p>

          <div
            ref={statsRef}
            style={{
              display: "flex",
              gap: 0,
              width: "100%",
              maxWidth: isMobile ? "100%" : 400,
            }}
          >
            {HERO_STATS.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  padding: isMobile ? "18px 18px" : "20px 32px",
                  background: i === 0 ? T.navy : T.bgCard,
                  borderRight: i === 0 ? "none" : `1px solid ${T.border}`,
                  flex: 1,
                  minWidth: 0,
                  borderRadius: i === 0 ? "12px 0 0 12px" : "0 12px 12px 0",
                }}
              >
                <p
                  style={{
                    fontSize: isMobile ? 30 : 32,
                    fontWeight: 800,
                    color: i === 0 ? T.gold : T.navy,
                    margin: "0 0 6px",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                  }}
                >
                  {formatStatNumber(animatedStats[i])}
                </p>
                <p
                  style={{
                    fontSize: isMobile ? 10 : 12,
                    fontWeight: 500,
                    color: i === 0 ? "rgba(255,255,255,0.7)" : T.textSecondary,
                    margin: 0,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    lineHeight: 1.35,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => smoothScrollToSection("training-videos")}
              style={{
                background: T.blue,
                color: T.white,
                border: "none",
                height: 48,
                padding: "0 32px",
                width: isMobile ? "100%" : "auto",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "Poppins, sans-serif",
                cursor: "pointer",
                letterSpacing: "0.04em",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
                <path
                  d="M1 7h12M8 2l5 5-5 5"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="square"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => smoothScrollToSection("contact")}
              style={{
                background: "transparent",
                color: T.navy,
                border: `1.5px solid ${T.navy}`,
                height: 48,
                padding: "0 32px",
                width: isMobile ? "100%" : "auto",
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
        <div
          style={{
            position: "relative",
            alignSelf: "center",
            maxWidth: isMobile ? 420 : "none",
            width: "100%",
            margin: isMobile ? "0 auto" : 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -24,
              right: isMobile ? -10 : -24,
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
              left: isMobile ? -4 : -8,
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
              left: isMobile ? -10 : -32,
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
              minHeight: isMobile ? 260 : 300,
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
              bottom: isMobile ? 28 : 48,
              left: isMobile ? 12 : -28,
              zIndex: 3,
              background: T.gold,
              padding: isMobile ? "10px 14px" : "12px 20px",
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
                  fontSize: isMobile ? 11 : 12,
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
          display: isMobile ? "none" : "flex",
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
