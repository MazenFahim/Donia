import { motion } from "motion/react";
import { Award, BookMarked, ScrollText } from "lucide-react";
import { FadeUp } from "./FadeUp";

const ENTRIES = [
  {
    year: "2019",
    degree: "Bachelor's Degree in Education",
    detail: "Philosophy & Sociology Department",
    badge: "Ranked 1st · Distinction",
  },
  {
    year: "2020",
    degree: "Professional Diploma in Education",
    detail: "Curricula, Philosophy & Sociology Teaching Methods",
    badge: "Distinction",
  },
  {
    year: "2021",
    degree: "Special Diploma in Education",
    detail: "Philosophy Teaching Methods",
    badge: "Distinction",
  },
  {
    year: "2023",
    degree: "Master's Degree in Education",
    detail: "Curricula & Philosophy Teaching Methods",
    badge: "Distinction",
  },
];

const THESIS =
  "A Multi-Approach Training Program for Developing Teaching Performance and Attitude Toward the Teaching Profession for High School Philosophy Teachers";

function GoldGradCapIcon() {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center">
      <svg
        viewBox="0 0 48 48"
        className="h-8 w-8 drop-shadow-[0_2px_6px_rgba(212,175,55,0.5)]"
        fill="none"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCE9B0" />
            <stop offset="35%" stopColor="#E8C25E" />
            <stop offset="65%" stopColor="#C8972F" />
            <stop offset="100%" stopColor="#9C6F1E" />
          </linearGradient>
          <linearGradient id="goldShine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M24 6 L44 16 L24 26 L4 16 Z"
          fill="url(#goldGrad)"
          stroke="#7A5613"
          strokeWidth="0.6"
          strokeLinejoin="round"
        />
        <path
          d="M12 19.5 V30 C12 33 17 36 24 36 C31 36 36 33 36 30 V19.5 L24 25 Z"
          fill="url(#goldGrad)"
          stroke="#7A5613"
          strokeWidth="0.6"
          strokeLinejoin="round"
        />
        <line x1="44" y1="16" x2="44" y2="29" stroke="#9C6F1E" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="44" cy="31.5" r="2.4" fill="url(#goldGrad)" stroke="#7A5613" strokeWidth="0.6" />

        <motion.path
          d="M24 6 L44 16 L24 26 L4 16 Z"
          fill="url(#goldShine)"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: [-(-30), 30], opacity: [0, 0.9, 0] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            repeatDelay: 2.5,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}

export function Education() {
  return (
    <section id="education" className="relative overflow-hidden bg-[#EFECE6] py-24 text-[#1C1C1C] md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#DCD8D0]" />
      <div className="pointer-events-none absolute -right-28 top-24 h-80 w-80 rounded-full bg-[#7D9A84]/8 blur-3xl" />

      <div className="relative mx-auto max-w-[1220px] px-6 md:px-12">
        <FadeUp>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#7D9A84]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7D9A84]">
                  Academic Background
                </span>
              </div>
              <h2 className="font-['Playfair_Display'] text-[clamp(40px,5.5vw,72px)] font-semibold leading-[0.95] tracking-[-0.055em] text-[#1C1C1C]">
                Education built
                <br />on distinction
              </h2>
            </div>
            <p className="max-w-2xl text-[16px] leading-8 text-[#4A4A4A] lg:ml-auto">
              Donia’s academic path combines education, philosophy, sociology, curricula, and teaching methods — a scholarly foundation behind her training and youth development work.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.06}>
          <div className="rounded-[36px] border border-[#DCD8D0] bg-[#F4F1EA] p-5 shadow-[0_24px_70px_rgba(28,28,28,0.05)] md:p-7">
            <div className="grid gap-5 lg:grid-cols-[300px_minmax(0,1fr)]">
              
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-[28px] bg-[#111111] p-7 text-[#FBF9F6] transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#7D9A84]/25 blur-2xl transition-opacity duration-500 group-hover:opacity-70" />
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1], delay: 0.15 }}
                    whileHover={{ scale: 1.1, rotate: -6 }}
                    className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-[#F8F5EF]/15 bg-gradient-to-br from-[#F8F5EF]/10 to-[#F8F5EF]/5"
                  >
                    <GoldGradCapIcon />
                  </motion.div>
                  
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E8C25E]">
                    Academic Profile
                  </p>
                  
                  <h3 className="font-['Playfair_Display'] text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-[#FBF9F6]">
                    Helwan University
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-[#D5D1C9]">
                    A consistent record of distinction across undergraduate, diploma, and master’s-level education.
                  </p>

                  <div className="mt-9 grid grid-cols-3 gap-3 border-t border-[#F8F5EF]/12 pt-6">
                    {[
                      { value: "4", label: "Credentials" },
                      { value: "1st", label: "Ranking" },
                      { value: "4", label: "Years" },
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="font-['Playfair_Display'] text-3xl font-semibold text-[#E8C25E]">{stat.value}</p>
                        <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D5D1C9]/60">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div className="grid gap-4 md:grid-cols-2">
                {ENTRIES.map((entry, index) => (
                  <motion.article
                    key={entry.year}
                    initial={{ opacity: 0, y: 24, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
                    whileHover={{ y: -6, scale: 1.015 }}
                    className="group relative overflow-hidden rounded-[26px] border border-[#DCD2C1] bg-[#E9E0D1] p-5 transition-all duration-300 hover:border-[#7D9A84]/50 hover:bg-[#EEE5D6] hover:shadow-[0_18px_40px_rgba(125,154,132,0.12)]"
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#7D9A84]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#7D9A84]/8" />

                    <div className="relative mb-5 flex items-center justify-between gap-4">
                      
                      <div className="flex items-center gap-1.5 rounded-full border border-[#7D9A84]/30 bg-[#7D9A84]/12 p-0.5 pr-2.5">
                        <motion.span
                          whileHover={{ scale: 1.12, rotate: 8 }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#7D9A84] text-[#FBF8F1] shadow-sm"
                        >
                          {index === 3 ? <BookMarked size={12} strokeWidth={2} /> : <Award size={12} strokeWidth={2} />}
                        </motion.span>
                        <span className="text-[9.5px] font-bold uppercase tracking-[0.12em] text-[#4E6353]">
                          {entry.badge}
                        </span>
                      </div>

                      <span className="font-['Playfair_Display'] text-2xl italic leading-none text-[#938A7E] transition-colors duration-300 group-hover:text-[#7D9A84]">
                        {entry.year}
                      </span>
                    </div>
                    
                    <h3 className="relative font-['Playfair_Display'] text-[26px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#2C2925]">
                      {entry.degree}
                    </h3>
                    <p className="relative mt-3 text-sm leading-6 text-[#5B554C]">
                      {entry.detail}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              whileHover={{ y: -3 }}
              className="mt-5 rounded-[28px] border border-[#D8D1C4] bg-[#FFFFFF] p-6 shadow-[0_14px_36px_rgba(28,28,28,0.02)] md:flex md:items-start md:gap-6"
            >
              <motion.div
                whileHover={{ rotate: -8, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F4F1EA] text-[#7D9A84] md:mb-0"
              >
                <ScrollText size={22} strokeWidth={1.7} />
              </motion.div>
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7D9A84]">
                  Master's Thesis
                </p>
                <p className="font-['Playfair_Display'] text-[20px] italic leading-8 text-[#2C2925] md:text-[22px]">
                  “{THESIS}”
                </p>
              </div>
            </motion.div>
          </div>
        </FadeUp>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#DCD8D0]" />
    </section>
  );
}