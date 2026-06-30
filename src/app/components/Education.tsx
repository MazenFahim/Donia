import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { FadeUp } from "./FadeUp";

const ENTRIES = [
  {
    year: "2019",
    degree: "Bachelor's Degree in Education",
    detail: "Philosophy & Sociology Department",
    badge: "Ranked 1st · Distinction",
    latest: false,
  },
  {
    year: "2020",
    degree: "Professional Diploma in Education",
    detail: "Curricula, Philosophy & Sociology Teaching Methods",
    badge: "Distinction",
    latest: false,
  },
  {
    year: "2021",
    degree: "Special Diploma in Education",
    detail: "Philosophy Teaching Methods",
    badge: "Distinction",
    latest: false,
  },
  {
    year: "2023",
    degree: "Master's Degree in Education",
    detail: "Curricula & Philosophy Teaching Methods",
    badge: "Distinction · Latest",
    latest: true,
  },
];

const STATS = [
  { value: "4", label: "Credentials" },
  { value: "1st", label: "Ranking" },
  { value: "2019–23", label: "Span" },
];

export function Education() {
  return (
    <section id="education" className="relative overflow-hidden bg-[#EFECE6] py-24 text-[#1C1C1C] md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#DCD8D0]" />
      <div className="pointer-events-none absolute -right-28 top-24 h-80 w-80 rounded-full bg-[#7D9A84]/8 blur-3xl" />

      <div className="relative mx-auto max-w-[820px] px-6 md:px-12">
        <FadeUp>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#7D9A84]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7D9A84]">
              Academic Background
            </span>
          </div>
          <h2 className="font-['Playfair_Display'] text-[clamp(36px,5vw,52px)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#1C1C1C]">
            Education built
            <br />on distinction
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#5B554C]">
            Donia's academic path combines education, philosophy, sociology, curricula, and teaching methods — a scholarly foundation behind her training and youth development work.
          </p>
        </FadeUp>

        <FadeUp delay={0.06}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col gap-5 rounded-[18px] border border-[#DCD8D0] bg-[#F4F1EA] p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7D9A84]/15 text-[#4E6353]">
                <GraduationCap size={18} strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7D9A84]">
                  Academic Profile
                </p>
                <p className="font-['Playfair_Display'] text-xl font-semibold text-[#1C1C1C]">
                  Helwan University
                </p>
              </div>
            </div>

            <div className="flex gap-7 pl-[52px] sm:pl-0">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-['Playfair_Display'] text-xl font-semibold text-[#4E6353]">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#938A7E]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </FadeUp>

        <div className="relative ml-3.5 mt-10 border-l-[1.5px] border-[#DCD2C1] pl-8">
          {ENTRIES.map((entry, index) => (
            <motion.div
              key={entry.year}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className={`relative ${index === ENTRIES.length - 1 ? "" : "pb-8"}`}
            >
              <span
                className={
                  entry.latest
                    ? "absolute -left-[39px] top-0 h-4 w-4 rounded-full border-2 border-[#4E6353] bg-[#7D9A84]"
                    : "absolute -left-[37px] top-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#7D9A84] bg-[#EFECE6]"
                }
              />

              <span
                className={
                  entry.latest
                    ? "font-['Playfair_Display'] text-sm italic text-[#7D9A84]"
                    : "font-['Playfair_Display'] text-sm italic text-[#938A7E]"
                }
              >
                {entry.year}
              </span>

              <h3
                className={
                  entry.latest
                    ? "mt-1 font-['Playfair_Display'] text-[22px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#1C1C1C]"
                    : "mt-1 font-['Playfair_Display'] text-[19px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#1C1C1C]"
                }
              >
                {entry.degree}
              </h3>

              <p className="mt-1 text-[13px] leading-6 text-[#5B554C]">{entry.detail}</p>

              <span
                className={
                  entry.latest
                    ? "mt-2 inline-block rounded-full border border-[#7D9A84] bg-[#7D9A84]/[0.28] px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.08em] text-[#2F4434]"
                    : "mt-2 inline-block rounded-full border border-[#7D9A84]/40 bg-[#7D9A84]/[0.14] px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.08em] text-[#4E6353]"
                }
              >
                {entry.badge}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#DCD8D0]" />
    </section>
  );
}