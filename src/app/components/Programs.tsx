import { T } from "./tokens";
import { FadeUp } from "./FadeUp";

const LEADERSHIP_CARDS = [
  {
    title: "Youth Qualification Program",
    org: "Ministry of Youth, Sports & Local Development",
  },
  {
    title: "Youth Leadership Club",
    org: "Ministry of Youth and Sports",
  },
  {
    title: "Trainers Forum — First Edition",
    org: "Ministry of Youth and Sports",
  },
];

const NASSER_COURSES = [
  "Strategy & National Security",
  "Decision Makers",
  "Crisis Management",
  "Thinking Methods",
];

export function Programs() {
  return (
    <section id="programs" style={{ background: "#ffffff" }}>
      <div style={{ height: 1, background: T.border }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 48px" }}>

        <FadeUp>
          <div style={{ marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 32, height: 1.5, background: T.blue }} />
              <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: T.blue }}>
                Programs & Leadership
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, color: T.navy, margin: "0 0 16px", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
              Built by Programs. Sharpened by Leadership.
            </h2>
            <p style={{ fontSize: 16, color: T.textSecondary, margin: 0, lineHeight: 1.7, maxWidth: 640 }}>
              A track record of national programs, military-grade leadership training, and youth development initiatives.
            </p>
          </div>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>

          {/* Left: Leadership Programs */}
          <FadeUp delay={100}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: T.navy, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 20px" }}>
                Leadership Programs
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {LEADERSHIP_CARDS.map((card) => (
                  <div
                    key={card.title}
                    style={{
                      background: T.white,
                      border: `1px solid ${T.border}`,
                      borderLeft: `3px solid ${T.navy}`,
                      borderRadius: 12,
                      padding: "28px 32px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                      transition: "box-shadow 0.2s ease, transform 0.2s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = "0 8px 32px rgba(107,143,113,0.18)";
                      el.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = "none";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    <h4 style={{ fontSize: 17, fontWeight: 700, color: T.navy, margin: 0, lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                      {card.title}
                    </h4>
                    <p style={{ fontSize: 13, color: T.textSecondary, margin: 0, lineHeight: 1.5 }}>
                      {card.org}
                    </p>
                    <div>
                      <span
                        style={{
                          display: "inline-block",
                          background: T.gold,
                          color: T.navy,
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          padding: "5px 14px",
                          borderRadius: 999,
                          marginTop: 4,
                        }}
                      >
                        Graduate
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Right: Nasser Military Academy */}
          <FadeUp delay={200}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: T.navy, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 20px" }}>
                Nasser Military Academy
              </p>
              <div
                style={{
                  background: T.white,
                  border: `1px solid ${T.border}`,
                  borderTop: `3px solid ${T.gold}`,
                  borderRadius: 12,
                  padding: 36,
                  display: "flex",
                  flexDirection: "column",
                  gap: 28,
                  transition: "box-shadow 0.2s ease, transform 0.2s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 8px 32px rgba(107,143,113,0.18)";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Header */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      background: T.navy,
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ fontSize: 22, color: T.gold }}>✦</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: 20, fontWeight: 700, color: T.navy, margin: "0 0 6px", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
                      Nasser Military Academy Graduate
                    </h4>
                    <p style={{ fontSize: 13, fontWeight: 600, color: T.blue, margin: 0, letterSpacing: "0.02em" }}>
                      Strategy & National Security Programme
                    </p>
                  </div>
                </div>

                <div style={{ height: 1, background: T.border }} />

                {/* Courses */}
                <div>
                  <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: T.textSecondary, margin: "0 0 14px" }}>
                    Courses Completed
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    {NASSER_COURSES.map((course) => (
                      <div
                        key={course}
                        style={{
                          background: T.bgCard,
                          border: `1px solid ${T.border}`,
                          borderLeft: `3px solid ${T.navy}`,
                          borderRadius: 8,
                          padding: "12px 16px",
                        }}
                      >
                        <span style={{ fontSize: 13, fontWeight: 600, color: T.navy, lineHeight: 1.3, display: "block" }}>
                          {course}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <p style={{ fontSize: 12, color: T.textSecondary, margin: 0, fontStyle: "italic", lineHeight: 1.6 }}>
                    One of Egypt's most prestigious leadership institutions
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      background: T.gold,
                      color: T.navy,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "5px 14px",
                      borderRadius: 999,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      marginLeft: 16,
                    }}
                  >
                    Graduate
                  </span>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
      <div style={{ height: 1, background: T.border }} />
    </section>
  );
}
