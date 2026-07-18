import { motion } from "motion/react";
import {
  Award,
  BookMarked,
  GraduationCap,
  Medal,
  ScrollText,
} from "lucide-react";
import { FadeUp } from "./FadeUp";

const THESIS =
  "A Multi-Approach Training Program for Developing Teaching Performance and Attitude Toward the Teaching Profession for High School Philosophy Teachers";

const EDUCATION_ENTRIES = [
  {
    year: "2019",
    degree: "Bachelor's Degree in Education",
    detail: "Philosophy & Sociology Department",
    badge: "Ranked 1st · Distinction",
    description:
      "Established a multidisciplinary foundation in educational theory, philosophy, sociology, and classroom practice, graduating first in the department with distinction.",
    topics: ["Educational Theory", "Philosophy", "Sociology"],
    icon: Award,
    tone: "gold",
  },
  {
    year: "2020",
    degree: "Professional Diploma in Education",
    detail: "Curricula, Philosophy & Sociology Teaching Methods",
    badge: "Distinction",
    description:
      "Developed practical expertise in curriculum planning, instructional design, and teaching strategies tailored to philosophy and sociology education.",
    topics: ["Curriculum Design", "Teaching Strategies", "Assessment"],
    icon: BookMarked,
    tone: "sage",
  },
  {
    year: "2021",
    degree: "Special Diploma in Education",
    detail: "Philosophy Teaching Methods",
    badge: "Distinction",
    description:
      "Advanced her research and teaching practice through specialized study of philosophy instruction, learner engagement, and modern educational methodology.",
    topics: ["Philosophy Education", "Learner Engagement", "Methodology"],
    icon: BookMarked,
    tone: "sage",
  },
  {
    year: "2023",
    degree: "Master's Degree in Education",
    detail: "Curricula & Philosophy Teaching Methods",
    badge: "Distinction",
    description:
      "Completed advanced academic research focused on teacher development, training effectiveness, and improving professional attitudes toward education.",
    topics: ["Academic Research", "Teacher Development", "Training"],
    icon: GraduationCap,
    tone: "master",
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#EFECE6] py-24 text-[#1C1C1C] md:py-32"
    >
      <style>{`
        .education-card {
          isolation: isolate;
        }

        .education-card::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: 0;
          background:
            radial-gradient(
              circle at 12% 20%,
              rgba(232, 194, 94, 0.13),
              transparent 30%
            ),
            radial-gradient(
              circle at 88% 80%,
              rgba(125, 154, 132, 0.13),
              transparent 34%
            );
          transition: opacity 500ms ease;
          pointer-events: none;
        }

        .education-card:hover::before {
          opacity: 1;
        }

        .education-card::after {
          content: "";
          position: absolute;
          top: 0;
          left: -45%;
          width: 28%;
          height: 100%;
          z-index: 2;
          opacity: 0;
          pointer-events: none;
          transform: skewX(-18deg);
          background: linear-gradient(
            100deg,
            transparent,
            rgba(255, 255, 255, 0.48),
            transparent
          );
        }

        .education-card:hover::after {
          opacity: 1;
          left: 125%;
          transition:
            left 900ms cubic-bezier(0.16, 1, 0.3, 1),
            opacity 200ms ease;
        }

        .academic-icon-ring {
          position: relative;
        }

        .academic-icon-ring::before {
          content: "";
          position: absolute;
          inset: -7px;
          border-radius: 20px;
          border: 1px solid rgba(125, 154, 132, 0.17);
          transition:
            transform 400ms ease,
            border-color 400ms ease;
        }

        .group:hover .academic-icon-ring::before {
          transform: rotate(7deg);
          border-color: rgba(232, 194, 94, 0.46);
        }

        @media (prefers-reduced-motion: reduce) {
          .education-card::after {
            display: none;
          }

          .academic-icon-ring::before {
            transition: none;
          }
        }
      `}</style>

      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-8 h-[440px] w-[440px] rounded-full bg-[#7D9A84]/10 blur-[110px]" />

        <div className="absolute -left-44 bottom-0 h-[380px] w-[380px] rounded-full bg-[#E8C25E]/10 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(28,28,28,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(28,28,28,0.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#D8D3CB]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#D8D3CB]" />

      <div className="relative mx-auto max-w-[1040px] px-6 md:px-12">
        {/* Heading */}
        <FadeUp>
          <header className="mb-14 max-w-[780px] md:mb-20">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#7D9A84]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6F8C77]">
                Academic Journey
              </span>
            </div>

            <h2 className="font-['Playfair_Display'] text-[clamp(38px,5vw,62px)] font-semibold leading-[1.02] tracking-[-0.045em] text-[#24211E]">
              Education shaped by
              <span className="text-[#718C78]"> distinction.</span>
            </h2>

            <p className="mt-6 max-w-[700px] text-[15px] leading-7 text-[#615C55] md:text-base">
              Donia&apos;s academic path combines education, philosophy,
              sociology, and teaching methodology—the scholarly foundation
              behind her work in training and youth development.
            </p>
          </header>
        </FadeUp>

        {/* Featured thesis */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="group relative mb-16 md:mb-24"
        >
          <div className="absolute -inset-[1px] rounded-[30px] bg-gradient-to-br from-[#E8C25E]/75 via-[#D8C99F]/20 to-[#7D9A84]/40 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative overflow-hidden rounded-[29px] bg-[#F8F5EF] px-6 py-8 shadow-[0_24px_70px_rgba(42,38,32,0.07)] md:px-10 md:py-10">
            <div className="pointer-events-none absolute -right-12 -top-14 h-52 w-52 rounded-full border border-[#E8C25E]/20" />

            <div className="pointer-events-none absolute -right-6 -top-8 h-36 w-36 rounded-full border border-[#7D9A84]/15" />

            <div className="relative grid gap-7 md:grid-cols-[72px_1fr] md:gap-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E8C25E]/55 bg-[#F3E9CE] text-[#647D6A] shadow-[0_10px_30px_rgba(125,154,132,0.12)] transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105 md:h-16 md:w-16">
                <ScrollText size={26} strokeWidth={1.8} />
              </div>

              <div>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#6C8873]">
                    Master&apos;s Thesis
                  </span>

                  <span className="h-1 w-1 rounded-full bg-[#C9A64E]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#91887B]">
                    Research Study
                  </span>
                </div>

                <h3 className="max-w-[780px] font-['Playfair_Display'] text-[clamp(23px,3vw,34px)] font-semibold leading-[1.25] tracking-[-0.025em] text-[#2A2723]">
                  “{THESIS}”
                </h3>

                <div className="mt-7 flex flex-wrap gap-2">
                  <span className="rounded-full border border-[#7D9A84]/20 bg-[#7D9A84]/8 px-3 py-1.5 text-[11px] font-semibold text-[#587060]">
                    Teacher Development
                  </span>

                  <span className="rounded-full border border-[#7D9A84]/20 bg-[#7D9A84]/8 px-3 py-1.5 text-[11px] font-semibold text-[#587060]">
                    Philosophy Education
                  </span>

                  <span className="rounded-full border border-[#E8C25E]/30 bg-[#E8C25E]/10 px-3 py-1.5 text-[11px] font-semibold text-[#7A6735]">
                    Training Methodology
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Timeline heading */}
        <FadeUp>
          <div className="mb-8 flex items-end justify-between gap-6 md:mb-10">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8B857D]">
                Academic Milestones
              </span>

              <h3 className="mt-2 font-['Playfair_Display'] text-[28px] font-semibold tracking-[-0.03em] text-[#292622] md:text-[34px]">
                A journey of continuous learning
              </h3>
            </div>

            <span className="hidden text-sm italic text-[#8A847B] md:block">
              2019 — 2023
            </span>
          </div>
        </FadeUp>

        {/* Redesigned qualification timeline */}
        <div className="relative">
          <div className="absolute bottom-12 left-[21px] top-10 w-px bg-gradient-to-b from-[#E8C25E]/65 via-[#7D9A84]/45 to-[#E8C25E]/55 md:left-[29px]" />

          <div className="space-y-7 md:space-y-9">
            {EDUCATION_ENTRIES.map((entry, index) => {
              const Icon = entry.icon;
              const isMaster = entry.tone === "master";
              const isGold = entry.tone === "gold";

              return (
                <motion.article
                  key={entry.year}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8%" }}
                  transition={{
                    duration: 0.62,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative grid grid-cols-[44px_1fr] gap-5 md:grid-cols-[60px_1fr] md:gap-8"
                >
                  {/* Timeline icon */}
                  <div className="relative z-10 mt-9">
                    <motion.div
                      whileHover={{
                        y: -3,
                        rotate: isMaster ? -4 : 3,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className={[
                        "academic-icon-ring flex h-11 w-11 items-center justify-center rounded-2xl border bg-[#F7F3EB] shadow-[0_10px_30px_rgba(45,40,34,0.07)] md:h-[58px] md:w-[58px]",
                        isMaster
                          ? "border-[#D4B85C] text-[#657D6A]"
                          : isGold
                            ? "border-[#DDC477] text-[#6B836F]"
                            : "border-[#C9D0C8] text-[#708276]",
                      ].join(" ")}
                    >
                      <Icon
                        size={isMaster ? 24 : 21}
                        strokeWidth={isMaster ? 2 : 1.9}
                      />
                    </motion.div>

                    {isMaster && (
                      <span className="absolute -right-1 -top-1 z-20 h-3.5 w-3.5 rounded-full border-[3px] border-[#EFECE6] bg-[#E8C25E]" />
                    )}
                  </div>

                  {/* Editorial card */}
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={[
                      "education-card relative overflow-hidden rounded-[26px] border bg-[#F7F4EE]/90 shadow-[0_16px_50px_rgba(42,38,32,0.045)] backdrop-blur-sm transition-[border-color,box-shadow,background-color] duration-500",
                      isMaster
                        ? "border-[#D8BC67]/75 hover:border-[#D0AE43] hover:bg-[#FAF7EF] hover:shadow-[0_26px_75px_rgba(98,82,37,0.12)]"
                        : isGold
                          ? "border-[#DCCB9D] hover:border-[#D2B75F] hover:bg-[#FAF8F2] hover:shadow-[0_26px_75px_rgba(62,54,39,0.09)]"
                          : "border-[#D9D5CD] hover:border-[#AABCAF] hover:bg-[#FAF8F3] hover:shadow-[0_26px_75px_rgba(50,61,53,0.09)]",
                    ].join(" ")}
                  >
                    {/* Top accent */}
                    <div
                      className={[
                        "absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100",
                        isMaster
                          ? "bg-gradient-to-r from-[#E8C25E] via-[#C8B26C] to-[#7D9A84]"
                          : isGold
                            ? "bg-gradient-to-r from-[#E8C25E] to-[#BFC8BB]"
                            : "bg-gradient-to-r from-[#7D9A84] to-[#E1C66C]",
                      ].join(" ")}
                    />

                    {/* Decorative year */}
                    <span
                      aria-hidden="true"
                      className={[
                        "pointer-events-none absolute -bottom-7 right-3 select-none font-['Playfair_Display'] text-[92px] font-bold italic leading-none opacity-[0.055] transition-all duration-500 group-hover:-translate-y-2 group-hover:opacity-[0.085] md:-bottom-10 md:right-6 md:text-[142px]",
                        isMaster ? "text-[#B18E2D]" : "text-[#526B59]",
                      ].join(" ")}
                    >
                      {entry.year}
                    </span>

                    <div className="relative p-6 md:p-8 lg:p-9">
                      {/* Card top */}
                      <div className="flex flex-col gap-5 border-b border-[#D9D4CB]/70 pb-6 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <div className="mb-3 flex flex-wrap items-center gap-3">
                            <span
                              className={[
                                "font-['Playfair_Display'] text-[22px] font-bold italic leading-none",
                                isMaster
                                  ? "text-[#A2802F]"
                                  : "text-[#78907D]",
                              ].join(" ")}
                            >
                              {entry.year}
                            </span>

                            <span className="h-1 w-1 rounded-full bg-[#C6B472]" />

                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#989187]">
                              Milestone {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>

                          <h4 className="font-['Playfair_Display'] text-[25px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#292622] md:text-[31px]">
                            {entry.degree}
                          </h4>
                        </div>

                        <span
                          className={[
                            "inline-flex shrink-0 items-center gap-2 self-start rounded-full border px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.1em]",
                            isMaster
                              ? "border-[#E1C364]/50 bg-[#E8C25E]/13 text-[#765F25]"
                              : isGold
                                ? "border-[#D9C277]/45 bg-[#E8C25E]/10 text-[#6F5E2D]"
                                : "border-[#7D9A84]/20 bg-[#7D9A84]/10 text-[#506558]",
                          ].join(" ")}
                        >
                          <Medal size={12} strokeWidth={2.2} />
                          {entry.badge}
                        </span>
                      </div>

                      {/* Main body */}
                      <div className="relative pt-6">
                        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#6F8674]">
                          {entry.detail}
                        </p>

                        <p className="max-w-[760px] text-[14px] leading-7 text-[#625D56] md:text-[15px]">
                          {entry.description}
                        </p>

                        {/* Tags */}
                        <div className="mt-6 flex flex-wrap gap-2">
                          {entry.topics.map((topic) => (
                            <span
                              key={topic}
                              className="rounded-full border border-[#D7D2C8] bg-[#FBF9F4]/80 px-3 py-1.5 text-[10px] font-semibold text-[#6A655E] transition-colors duration-300 group-hover:border-[#7D9A84]/25 group-hover:text-[#536459]"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}