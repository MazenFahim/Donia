import { motion, useReducedMotion } from "motion/react";
import { Award, BookOpen, GraduationCap } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import aboutPhoto from "@/imports/5791871838450290291.jpg";
import { T } from "./tokens";
import { FadeUp } from "./FadeUp";

const EASE = [0.16, 1, 0.3, 1] as const;

const SPECIALIZATIONS = [
  {
    number: "01",
    icon: Award,
    title: "Personal Skills Development",
    description: "Confidence, communication, and career readiness.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Curricula & Teaching Methods",
    description: "Modern learning design and effective teaching practice.",
  },
];

const CREDENTIALS = [
  {
    number: "01",
    icon: GraduationCap,
    eyebrow: "Academic Foundation",
    title: "M.Sc. in Education",
    subtitle: "Helwan University",
    description: "Advanced academic grounding in curricula and teaching methods.",
    mark: "M.Sc.",
    featured: true,
  },
  {
    number: "02",
    icon: Award,
    eyebrow: "Professional Impact",
    title: "5+ Years",
    subtitle: "Active Training",
    description: "Academic and professional training experience.",
    mark: "05+",
    featured: false,
  },
  {
    number: "03",
    icon: BookOpen,
    eyebrow: "Focused Expertise",
    title: "2 Core Specializations",
    subtitle: "Purposeful, focused practice",
    description: "Personal skills · Curricula & teaching methods",
    mark: "02",
    featured: false,
  },
];

export function About() {
  const reduceMotion = useReducedMotion();

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
                Donia Essam Mohamed Amin is an internationally certified trainer specializing in personal skills development, curricula design, and modern teaching methods.
              </p>
              <p style={{ fontSize: 16.5, color: T.textSecondary, margin: 0, lineHeight: 1.85 }}>
                With a Master's degree in Education and over 5 years of active training experience, she has helped thousands of students and fresh graduates successfully enter the job market.
              </p>
            </div>

            {/* Specializations */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2"
              style={{ gap: 12, paddingTop: 2 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: reduceMotion ? 0 : 0.1,
                  },
                },
              }}
              aria-label="Core specializations"
            >
              {SPECIALIZATIONS.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    className="group relative overflow-hidden"
                    style={{
                      minHeight: 112,
                      padding: "18px 18px 17px",
                      borderRadius: 20,
                      border: `1px solid ${T.border}`,
                      background: "linear-gradient(145deg, rgba(255,255,255,0.72), rgba(238,233,223,0.56))",
                      boxShadow: "0 12px 30px rgba(28,28,28,0.045)",
                    }}
                    variants={{
                      hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: reduceMotion ? 0 : 0.55, ease: EASE },
                      },
                    }}
                    whileHover={reduceMotion ? undefined : { y: -5, scale: 1.01 }}
                    transition={{ duration: 0.28, ease: EASE }}
                  >
                    <motion.div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-[3px] origin-left"
                      style={{ background: `linear-gradient(90deg, ${T.blue}, rgba(107,143,113,0.2))` }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.25, ease: EASE }}
                    />

                    <span
                      aria-hidden="true"
                      className="absolute right-4 top-3 select-none transition-transform duration-500 group-hover:-translate-x-1"
                      style={{
                        color: "rgba(107,143,113,0.11)",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: 28,
                        fontWeight: 800,
                      }}
                    >
                      {item.number}
                    </span>

                    <div className="relative flex items-start" style={{ gap: 13 }}>
                      <motion.div
                        className="flex shrink-0 items-center justify-center"
                        style={{
                          width: 42,
                          height: 42,
                          borderRadius: 14,
                          color: T.blue,
                          background: "rgba(107,143,113,0.11)",
                          boxShadow: "inset 0 0 0 1px rgba(107,143,113,0.08)",
                        }}
                        whileHover={reduceMotion ? undefined : { rotate: -8, scale: 1.08 }}
                        transition={{ duration: 0.28, ease: EASE }}
                      >
                        <Icon size={20} strokeWidth={1.85} />
                      </motion.div>

                      <div style={{ minWidth: 0, paddingTop: 1 }}>
                        <h3
                          style={{
                            maxWidth: 190,
                            paddingRight: 10,
                            margin: 0,
                            color: T.navy,
                            fontFamily: "Poppins, sans-serif",
                            fontSize: 13.5,
                            fontWeight: 750,
                            lineHeight: 1.45,
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          style={{
                            margin: "5px 0 0",
                            color: T.textSecondary,
                            fontSize: 11.5,
                            lineHeight: 1.55,
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                      style={{ background: T.blue }}
                    />
                  </motion.article>
                );
              })}
            </motion.div>

            {/* Credentials & Impact */}
            <div style={{ paddingTop: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <span className="relative flex" style={{ width: 8, height: 8 }}>
                  <span
                    className="absolute inset-0 animate-ping rounded-full motion-reduce:animate-none"
                    style={{ background: "rgba(107,143,113,0.34)" }}
                  />
                  <span className="relative rounded-full" style={{ width: 8, height: 8, background: T.blue }} />
                </span>
                <span style={{ fontSize: 12, fontWeight: 700, color: T.blue, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                  Credentials & Impact
                </span>
                <div style={{ flex: 1, height: 1, background: T.border }} />
              </div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2"
                style={{ gap: 12 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: reduceMotion ? 0 : 0.11,
                    },
                  },
                }}
              >
                {CREDENTIALS.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.article
                      key={item.title}
                      className={`group relative overflow-hidden ${item.featured ? "sm:order-first sm:col-span-2" : ""}`}
                      style={{
                        minHeight: item.featured ? 190 : 148,
                        padding: item.featured ? "27px 29px" : "20px 21px",
                        borderRadius: 24,
                        border: `1px solid ${item.featured ? "rgba(107,143,113,0.34)" : T.border}`,
                        background: item.featured
                          ? "linear-gradient(150deg, rgba(255,255,255,0.82), rgba(234,239,234,0.72))"
                          : "rgba(255,255,255,0.58)",
                        boxShadow: item.featured
                          ? "0 20px 48px rgba(60,78,65,0.09)"
                          : "0 14px 36px rgba(28,28,28,0.05)",
                      }}
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: reduceMotion || item.featured ? 0 : index === 1 ? -22 : 22,
                          y: reduceMotion ? 0 : item.featured ? 22 : 12,
                        },
                        visible: {
                          opacity: 1,
                          x: 0,
                          y: 0,
                          transition: { duration: reduceMotion ? 0 : 0.62, ease: EASE },
                        },
                      }}
                      whileHover={reduceMotion ? undefined : { y: -6 }}
                      transition={{ duration: 0.3, ease: EASE }}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                          background:
                            "radial-gradient(circle at 8% 8%, rgba(107,143,113,0.13), transparent 37%), radial-gradient(circle at 94% 94%, rgba(201,166,78,0.09), transparent 34%)",
                        }}
                      />

                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                        style={{ background: `linear-gradient(90deg, ${T.blue}, rgba(201,166,78,0.65))` }}
                      />

                      <span
                        aria-hidden="true"
                        className="absolute -bottom-3 right-3 select-none leading-none transition-all duration-500 group-hover:-translate-y-2"
                        style={{
                          color: "rgba(107,143,113,0.07)",
                          fontFamily: "Poppins, sans-serif",
                          fontSize: item.featured ? 88 : 52,
                          fontWeight: 800,
                        }}
                      >
                        {item.mark}
                      </span>

                      {item.featured ? (
                        <div
                          className="relative grid h-full grid-cols-1 items-center sm:grid-cols-[62px_minmax(0,1fr)_minmax(210px,0.82fr)]"
                          style={{ gap: 24 }}
                        >
                          <motion.div
                            className="flex shrink-0 items-center justify-center"
                            style={{
                              width: 58,
                              height: 58,
                              borderRadius: 18,
                              color: T.blue,
                              background: "rgba(107,143,113,0.12)",
                              boxShadow: "0 12px 28px rgba(68,89,73,0.10)",
                            }}
                            whileHover={reduceMotion ? undefined : { rotate: -7, scale: 1.08 }}
                            transition={{ duration: 0.3, ease: EASE }}
                          >
                            <Icon size={27} strokeWidth={1.8} />
                          </motion.div>

                          <div>
                            <p
                              style={{
                                margin: "0 0 8px",
                                color: T.blue,
                                fontSize: 10.5,
                                fontWeight: 800,
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                              }}
                            >
                              {item.eyebrow}
                            </p>
                            <h3
                              style={{
                                margin: 0,
                                color: T.navy,
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "clamp(27px, 3vw, 34px)",
                                fontWeight: 800,
                                letterSpacing: "-0.035em",
                                lineHeight: 1.08,
                              }}
                            >
                              {item.title}
                            </h3>
                            <p
                              style={{
                                margin: "9px 0 0",
                                color: T.textSecondary,
                                fontSize: 13.5,
                                fontWeight: 700,
                                lineHeight: 1.5,
                              }}
                            >
                              {item.subtitle}
                            </p>
                          </div>

                          <div
                            className="border-t pt-5 sm:border-l sm:border-t-0 sm:pb-1 sm:pl-7 sm:pt-1"
                            style={{ borderColor: T.border }}
                          >
                            <span
                              style={{
                                color: "rgba(107,143,113,0.75)",
                                fontSize: 10,
                                fontWeight: 800,
                                letterSpacing: "0.16em",
                              }}
                            >
                              {item.number}
                            </span>
                            <div
                              className="w-9 transition-all duration-500 group-hover:w-16"
                              style={{ height: 2, borderRadius: 999, background: T.blue, margin: "13px 0 12px" }}
                            />
                            <p
                              style={{
                                maxWidth: 260,
                                margin: 0,
                                color: T.textSecondary,
                                fontSize: 13,
                                lineHeight: 1.65,
                              }}
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="relative flex h-full flex-col">
                          <div className="flex items-start justify-between" style={{ gap: 14 }}>
                            <motion.div
                              className="flex shrink-0 items-center justify-center"
                              style={{
                                width: 42,
                                height: 42,
                                borderRadius: 14,
                                color: T.blue,
                                background: "rgba(107,143,113,0.12)",
                                boxShadow: "0 10px 24px rgba(68,89,73,0.08)",
                              }}
                              whileHover={reduceMotion ? undefined : { rotate: -7, scale: 1.08 }}
                              transition={{ duration: 0.3, ease: EASE }}
                            >
                              <Icon size={20} strokeWidth={1.8} />
                            </motion.div>

                            <span
                              style={{
                                color: "rgba(107,143,113,0.75)",
                                fontSize: 9.5,
                                fontWeight: 800,
                                letterSpacing: "0.16em",
                              }}
                            >
                              {item.number}
                            </span>
                          </div>

                          <div style={{ marginTop: 18 }}>
                            <p
                              style={{
                                margin: "0 0 7px",
                                color: T.blue,
                                fontSize: 9.5,
                                fontWeight: 800,
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                              }}
                            >
                              {item.eyebrow}
                            </p>
                            <h3
                              style={{
                                margin: 0,
                                color: T.navy,
                                fontFamily: "Poppins, sans-serif",
                                fontSize: 20,
                                fontWeight: 800,
                                letterSpacing: "-0.025em",
                                lineHeight: 1.16,
                              }}
                            >
                              {item.title}
                            </h3>
                            <p
                              style={{
                                margin: "7px 0 0",
                                color: T.textSecondary,
                                fontSize: 11.5,
                                fontWeight: 650,
                                lineHeight: 1.5,
                              }}
                            >
                              {item.subtitle}
                            </p>
                            <div
                              className="w-7 transition-all duration-500 group-hover:w-14"
                              style={{ height: 2, borderRadius: 999, background: T.blue, margin: "13px 0 10px" }}
                            />
                            <p
                              style={{
                                maxWidth: 250,
                                margin: 0,
                                color: T.textSecondary,
                                fontSize: 11,
                                lineHeight: 1.6,
                              }}
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.article>
                  );
                })}
              </motion.div>
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