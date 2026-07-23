import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import AinShams from "@/imports/ain shams.jpg";
import CIC1 from "@/imports/CIC1.jpeg";
import CIC2 from "@/imports/CIC2.jpeg";
import CIC3 from "@/imports/CIC3.jpeg";
import CIC4 from "@/imports/CIC4.jpeg";
import cairo1 from "@/imports/Cairo1.jpeg";
import cairo2 from "@/imports/Cairo2.jpeg";
import cairo3 from "@/imports/Cairo3.jpeg";
import cairo4 from "@/imports/Cairo4.jpeg";
import cairo5 from "@/imports/Cairo5.jpeg";
import cairo6 from "@/imports/Cairo6.jpeg";
import cairo7 from "@/imports/Cairo7.jpeg";
import NewCairo1 from "@/imports/New Cairo1.jpeg";
import NewCairo2 from "@/imports/New Cairo2.jpeg";
import NewCairo3 from "@/imports/New Cairo3.jpeg";
import NewCairo4 from "@/imports/New Cairo4.jpeg";
import NewCairo5 from "@/imports/New Cairo5.jpeg";
import NewCairo6 from "@/imports/New Cairo6.jpeg";
import Must1 from "@/imports/Must1.jpeg";
import Must2 from "@/imports/Must2.jpeg";
import Must4 from "@/imports/Must4.jpeg";
import Must5 from "@/imports/Must5.jpeg";
import october1 from "@/imports/6octtraining1.jpeg";
import october2 from "@/imports/6octtraining2.jpeg";
import october3 from "@/imports/6octtraining3.jpeg";
import october4 from "@/imports/6octtraining4.jpeg";
import modern1 from "@/imports/6octmodern1.jpeg";
import modern2 from "@/imports/6octmodern2.jpeg";
import modern3 from "@/imports/6octmodern3.jpeg";
import modern4 from "@/imports/6octmodern4.jpeg";
import modern5 from "@/imports/6octmodern5.jpeg";

import { T } from "./tokens";
import { FadeUp } from "./FadeUp";

const UNIVERSITIES = [
  {
    name: "Cairo University",
    city: "Giza",
    photos: [
      { src: cairo4, alt: "Group of students in front of Cairo University", crop: "center 25%" },
      { src: cairo6, alt: "Cairo University training session", crop: "center 25%" },
      { src: cairo3, alt: "Cairo University training session", crop: "center 25%" },
      { src: cairo2, alt: "Cairo University training session", crop: "center 25%" },
      { src: cairo5, alt: "Cairo University training session", crop: "center 25%" },
      { src: cairo1, alt: "Cairo University training session", crop: "center 25%" },
      { src: cairo7, alt: "Cairo University training session", crop: "center 25%" },
    ],
    description: "Spearheaded university-wide training initiatives at Cairo University, empowering thousands of undergraduates across diverse disciplines with strategic thinking, impactful communication, and market-aligned professional skills.",
  },
  {
    name: "New Cairo Technological University",
    city: "Cairo",
    photos: [
      { src: NewCairo3, alt: "New Cairo Technological University Initiative sponsor banner", crop: "center" },
      { src: NewCairo1, alt: "Donia Essam speaking at New Cairo Technological University", crop: "center" },
      { src: NewCairo2, alt: "Group photo at New Cairo Technological University", crop: "center" },
      { src: NewCairo6, alt: "Donia Essam in front of New Cairo Technological University signage", crop: "center" },
      { src: NewCairo5, alt: "Exterior view of New Cairo Technological University", crop: "center" },
      { src: NewCairo4, alt: "Training session at New Cairo Technological University auditorium", crop: "center" },
    ],
    description: "Successfully trained 400+ students in core labor market skills, enhancing their employability and preparing them for seamless entry into the modern workforce.",
  },
  {
    name: "Misr University for Science and Technology (MUST)",
    city: "Giza",
    photos: [
      { src: Must5, alt: "Group photo at MUST", crop: "center" },
      { src: Must2, alt: "Donia Essam speaking about communication at MUST", crop: "center" },
      { src: Must4, alt: "Donia Essam at the Innovation & Entrepreneurship event at MUST", crop: "center" },
      { src: Must1, alt: "Exterior campus view of MUST", crop: "center" },
    ],
    description: "Career Readiness Trainer | Designed and facilitated training workshops tailored for 3rd and 4th-year students to prepare them for the modern job market. Cultivated core soft skills among students, focusing on impactful communication, leadership, and team management while guiding them in creating strategic, action-oriented career roadmaps with measurable goals.",
  },
  {
    name: "Ain Shams University",
    city: "Cairo",
    photos: [
      { src: AinShams, alt: "Donia Essam at Ain Shams University", crop: "center" },
    ],
    description: "Conducted intensive workshops on leadership and strategic thinking. Partnered with career services to align academic outcomes with modern industry requirements.",
  },
  {
    name: "Canadian International College (CIC)",
    city: "New Cairo",
    photos: [
      { src: CIC1, alt: "Donia Essam at the entrance of CIC", crop: "center" },
      { src: CIC2, alt: "Donia Essam at CIC branding wall", crop: "center" },
      { src: CIC3, alt: "Donia Essam speaking on panel at CIC", crop: "center" },
      { src: CIC4, alt: "Donia Essam presenting at CIC event", crop: "center" },
    ],
    description: "Contributed as a Guest Trainer at the Canadian International College (CIC), delivering comprehensive training sessions for the School of Business Administration. By designing interactive and practical learning experiences, I empowered undergraduate students with vital professional development and market-ready skills, fostering their academic growth and preparing them to excel in today's competitive corporate landscape.",
  },
  /* 🛠️ NUMBER 6 UPDATED HERE */
  {
    name: "6th of October University",
    city: "Giza",
    photos: [
      { src: modern1, alt: "6th of October University modern session photo 1", crop: "center" },
      { src: modern2, alt: "6th of October University modern session photo 2", crop: "center" },
      { src: modern3, alt: "6th of October University modern session photo 3", crop: "center" },
      { src: modern4, alt: "6th of October University modern session photo 4", crop: "center" },
      { src: modern5, alt: "6th of October University modern session photo 5", crop: "center" },
    ],
    description: "Served as a Trainer at 6th of October University's Faculty of Education, empowering student teachers with modern pedagogical strategies and cutting-edge AI technologies tailored for classroom management and lesson preparation. By bridging educational theory with innovative AI tools, I enabled future teachers to build the digital and instructional competencies required to excel in today's evolving educational landscape.",
  },
  {
    name: "6th of October - Training on modern teaching strategies",
    city: "Giza",
    photos: [
      { src: october1, alt: "6th of October training session photo 1", crop: "center" },
      { src: october2, alt: "6th of October training session photo 2", crop: "center" },
      { src: october3, alt: "6th of October training session photo 3", crop: "center" },
      { src: october4, alt: "6th of October training session photo 4", crop: "center" },
    ],
    description: "Facilitated interactive training sessions for Faculty of Education students at 6th of October University, focusing on modern teaching strategies, active learning techniques, and practical instructional design to enhance student engagement.",
  },
];

const ArrowButton = ({ direction, onClick }: { direction: "left" | "right", onClick: () => void }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="hidden md:flex"
      style={{
        position: "absolute",
        [direction === "left" ? "left" : "right"]: -64,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        width: 44,
        height: 44,
        background: hover ? T.navy : "transparent",
        borderWidth: 1.5,
        borderStyle: "solid",
        borderColor: T.navy,
        borderRadius: 10,
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        transition: "background 0.15s, border-color 0.15s",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        {direction === "left" ? (
          <path d="M9 2L4 7l5 5" stroke={hover ? T.white : T.navy} strokeWidth="1.8" strokeLinecap="square" style={{ transition: "stroke 0.15s" }} />
        ) : (
          <path d="M5 2l5 5-5 5" stroke={hover ? T.white : T.navy} strokeWidth="1.8" strokeLinecap="square" style={{ transition: "stroke 0.15s" }} />
        )}
      </svg>
    </button>
  );
};

const InnerNavButton = ({ direction, onClick }: { direction: "left" | "right", onClick: (e: React.MouseEvent) => void }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "absolute",
        bottom: 12,
        [direction === "left" ? "left" : "right"]: 12,
        width: 32,
        height: 32,
        borderRadius: 16,
        background: hover ? "rgba(28,28,28,0.75)" : "rgba(28,28,28,0.4)",
        backdropFilter: "blur(4px)",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "auto",
        transition: "background 0.2s ease",
        zIndex: 11,
      }}
      aria-label={direction === "left" ? "Previous photo" : "Next photo"}
    >
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="#fff" strokeWidth="2.15" strokeLinecap="round" strokeLinejoin="round">
        {direction === "right" ? (
          <path d="M 6.4 15.2 C 6.4 12.1, 6.45 8.45, 7.75 6.45 C 8.85 4.75, 10.65 3.75, 13.25 3.15 M 13.25 3.15 L 10.55 2.35 M 13.25 3.15 L 12.25 5.85" />
        ) : (
          <path d="M 11.6 15.2 C 11.6 12.1, 11.55 8.45, 10.25 6.45 C 9.15 4.75, 7.35 3.75, 4.75 3.15 M 4.75 3.15 L 7.45 2.35 M 4.75 3.15 L 5.75 5.85" />
        )}
      </svg>
    </button>
  );
};

export function Universities() {
  const [activeUniIndex, setActiveUniIndex] = useState(0);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setActiveUniIndex((prev) => (prev + newDirection + UNIVERSITIES.length) % UNIVERSITIES.length);
    setActivePhotoIndex(0);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      const photoCount = UNIVERSITIES[activeUniIndex].photos.length;
      setActivePhotoIndex((prev) => (prev + 1) % photoCount);
    }, 3000);
    return () => clearInterval(id);
  }, [paused, activeUniIndex, activePhotoIndex]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      paginate(1);
    }, 8000);
    return () => clearInterval(id);
  }, [paused, activeUniIndex, paginate]);

  const [touchStart, setTouchStart] = useState<{ x: number, y: number } | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const deltaX = touchStart.x - e.changedTouches[0].clientX;
    const deltaY = touchStart.y - e.changedTouches[0].clientY;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX > 0) paginate(1);
      else paginate(-1);
    }
    setTouchStart(null);
  };

  const wheelTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) {
      if (!wheelTimeout.current) {
        if (e.deltaX > 0) paginate(1);
        else paginate(-1);
        wheelTimeout.current = setTimeout(() => {
          wheelTimeout.current = null;
        }, 1000);
      }
    }
  };

  return (
    <section
      id="training-experience"
      className="scroll-mt-24"
      style={{
        background: "#F8F5EF",
        overflow: "hidden",
        scrollMarginTop: "90px",
      }}
    >
      <div style={{ height: 1, background: T.border }} />

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "120px 48px 0" }}>
        <FadeUp>
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 32, height: 1.5, background: T.blue }} />
              <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: T.blue }}>
                Teaching Experience
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, color: T.navy, margin: "0 0 16px", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
              Shaping Futures Across Egypt's Universities
            </h2>
            <p style={{ fontSize: 16, color: T.textSecondary, margin: 0, lineHeight: 1.7, maxWidth: 600 }}>
              Delivering skill-based lectures linking academic content to real industry requirements.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={100}>
          <div
            style={{ position: "relative", marginTop: 40 }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
          >
            <ArrowButton direction="left" onClick={() => paginate(-1)} />
            <ArrowButton direction="right" onClick={() => paginate(1)} />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeUniIndex}
                custom={direction}
                variants={{
                  enter: (dir: number) => ({ opacity: 0, x: dir === 1 ? 20 : -20 }),
                  center: { opacity: 1, x: 0 },
                  exit: (dir: number) => ({ opacity: 0, x: dir === 1 ? -20 : 20 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex flex-col md:flex-row items-center gap-12 md:gap-20"
              >
                {/* Left Column: Stacked Photo Deck */}
                <div style={{ width: "100%", maxWidth: 380, margin: "0 auto", position: "relative" }}>
                  <div style={{ paddingBottom: "125%" }} />

                  {UNIVERSITIES[activeUniIndex].photos.map((photo, idx) => {
                    const photoCount = UNIVERSITIES[activeUniIndex].photos.length;
                    let position = "hidden";

                    if (idx === activePhotoIndex) {
                      position = "front";
                    } else if (idx === (activePhotoIndex + 1) % photoCount) {
                      position = "backRight";
                    } else if (idx === (activePhotoIndex + 2) % photoCount) {
                      position = "backLeft";
                    } 
                    const isFront = position === "front";

                    return (
                      <motion.div
                        key={idx}
                        initial={false}
                        animate={position}
                        variants={{
                          front: { zIndex: 3, scale: 1, x: 0, y: 0, rotate: 0, opacity: 1 },
                          backRight: { zIndex: 2, scale: 0.9, x: 32, y: 16, rotate: 7, opacity: 1 },
                          backLeft: { zIndex: 1, scale: 0.9, x: -32, y: 10, rotate: -7, opacity: 1 },
                          hidden: { zIndex: 0, scale: 0.8, x: 0, y: 0, rotate: 0, opacity: 0 }
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        style={{
                          position: "absolute",
                          inset: 0,
                          borderRadius: 14,
                          overflow: "hidden",
                          border: `1px solid ${T.border}`,
                          background: T.bgCard,
                          boxShadow: isFront
                            ? "0 24px 48px -12px rgba(28,28,28,0.25)"
                            : "0 8px 24px rgba(28,28,28,0.08)",
                          transformOrigin: "center center"
                        }}
                      >
                        <ImageWithFallback
                          src={photo.src}
                          alt={photo.alt}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: photo.crop,
                            display: "block",
                          }}
                        />
                      </motion.div>
                    );
                  })}

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(28,28,28,0.85) 0%, transparent 60%)",
                      pointerEvents: "none",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: "32px 24px 56px 24px",
                      borderRadius: 14,
                      zIndex: 10,
                    }}
                  >
                    <h4 style={{ fontSize: 22, fontWeight: 700, color: T.white, margin: "0 0 8px", lineHeight: 1.2 }}>
                      {UNIVERSITIES[activeUniIndex].name}
                    </h4>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <svg width="11" height="14" viewBox="0 0 11 14" fill="none">
                        <path d="M5.5 0C3.01 0 1 2.01 1 4.5c0 3.375 4.5 9 4.5 9s4.5-5.625 4.5-9C10 2.01 7.99 0 5.5 0zm0 6.125A1.625 1.625 0 1 1 5.5 2.875a1.625 1.625 0 0 1 0 3.25z" fill={T.sage}/>
                      </svg>
                      <span style={{ fontSize: 13, fontWeight: 600, color: T.white, letterSpacing: "0.04em" }}>
                        {UNIVERSITIES[activeUniIndex].city}
                      </span>
                    </div>

                    <InnerNavButton
                      direction="left"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePhotoIndex((prev) => {
                          const photoCount = UNIVERSITIES[activeUniIndex].photos.length;
                          return (prev - 1 + photoCount) % photoCount;
                        });
                      }}
                    />
                    <InnerNavButton
                      direction="right"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePhotoIndex((prev) => {
                          const photoCount = UNIVERSITIES[activeUniIndex].photos.length;
                          return (prev + 1) % photoCount;
                        });
                      }}
                    />
                  </div>

                  <div style={{ display: "flex", justifyContent: "center", gap: 8, position: "absolute", bottom: -32, left: 0, right: 0 }}>
                    {UNIVERSITIES[activeUniIndex].photos.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePhotoIndex(i);
                        }}
                        aria-label={`Show photo ${i + 1}`}
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: 3,
                          background: i === activePhotoIndex ? T.sage : "transparent",
                          border: `1px solid ${i === activePhotoIndex ? T.sage : T.border}`,
                          padding: 0,
                          cursor: "pointer",
                          transition: "all 0.2s"
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Column: Description Panel */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 24, height: 1.5, background: T.blue }} />
                    <span style={{ fontSize: 12, fontWeight: 600, color: T.blue, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      University Lecturer
                    </span>
                    <span style={{ marginLeft: "auto", fontSize: 13, fontWeight: 600, color: T.textSecondary, fontFamily: "Poppins, sans-serif" }}>
                      {String(activeUniIndex + 1).padStart(2, "0")} / {String(UNIVERSITIES.length).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700, color: T.navy, margin: "0 0 16px", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
                    {UNIVERSITIES[activeUniIndex].name}
                  </h3>
                  <p style={{ fontSize: 16, color: T.textSecondary, margin: 0, lineHeight: 1.7 }}>
                    {UNIVERSITIES[activeUniIndex].description}
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>
        </FadeUp>
      </div>
    </section>
  );
}