import { motion } from "motion/react";
import { Award, BookMarked, GraduationCap, ScrollText } from "lucide-react";
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

export function Education() {
  return (
    <section id="education" className="relative overflow-hidden bg-[#EEE9DF] py-24 text-[#1C1C1C] md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#DDD8CE]" />
      <div className="pointer-events-none absolute -right-28 top-24 h-80 w-80 rounded-full bg-[#6B8F71]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1220px] px-6 md:px-12">
        <FadeUp>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#6B8F71]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6B8F71]">
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
          <div className="rounded-[36px] border border-[#D8D1C4] bg-[#F8F5EF] p-5 shadow-[0_24px_70px_rgba(28,28,28,0.07)] md:p-7">
            <div className="grid gap-5 lg:grid-cols-[300px_minmax(0,1fr)]">
              <div className="relative overflow-hidden rounded-[28px] bg-[#1C1C1C] p-7 text-[#F8F5EF]">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#6B8F71]/25 blur-2xl" />
                <div className="relative">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-[#F8F5EF]/15 bg-[#F8F5EF]/8 text-[#D6E5D8]">
                    <GraduationCap size={26} strokeWidth={1.7} />
                  </div>
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D6E5D8]">
                    Academic Profile
                  </p>
                  <h3 className="font-['Playfair_Display'] text-4xl font-semibold leading-[0.98] tracking-[-0.05em]">
                    Helwan University
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-[#F8F5EF]/68">
                    A consistent record of distinction across undergraduate, diploma, and master’s-level education.
                  </p>

                  <div className="mt-9 grid grid-cols-3 gap-3 border-t border-[#F8F5EF]/12 pt-6">
                    <div>
                      <p className="font-['Playfair_Display'] text-3xl font-semibold text-[#D6E5D8]">4</p>
                      <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#F8F5EF]/48">Credentials</p>
                    </div>
                    <div>
                      <p className="font-['Playfair_Display'] text-3xl font-semibold text-[#D6E5D8]">1st</p>
                      <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#F8F5EF]/48">Ranking</p>
                    </div>
                    <div>
                      <p className="font-['Playfair_Display'] text-3xl font-semibold text-[#D6E5D8]">4</p>
                      <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#F8F5EF]/48">Years</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {ENTRIES.map((entry, index) => (
                  <motion.article
                    key={entry.year}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                    className="group rounded-[26px] border border-[#E1DACD] bg-[#FBF8F1] p-5 transition hover:-translate-y-1 hover:border-[#6B8F71]/50 hover:bg-[#FFFDF8]"
                  >
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D6E5D8]/70 text-[#48664E]">
                          {index === 3 ? <BookMarked size={17} strokeWidth={1.8} /> : <Award size={17} strokeWidth={1.8} />}
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6B8F71]">
                          {entry.badge}
                        </span>
                      </div>
                      <span className="font-['Playfair_Display'] text-2xl italic leading-none text-[#A09689] group-hover:text-[#6B8F71]">
                        {entry.year}
                      </span>
                    </div>
                    <h3 className="font-['Playfair_Display'] text-[26px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1C1C1C]">
                      {entry.degree}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#5B554C]">
                      {entry.detail}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[28px] border border-[#D8D1C4] bg-[#EEE9DF]/70 p-6 md:flex md:items-start md:gap-6">
              <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F8F5EF] text-[#6B8F71] md:mb-0">
                <ScrollText size={22} strokeWidth={1.7} />
              </div>
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6B8F71]">
                  Master's Thesis
                </p>
                <p className="font-['Playfair_Display'] text-[20px] italic leading-8 text-[#3F3B35] md:text-[22px]">
                  “{THESIS}”
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#DDD8CE]" />
    </section>
  );
}
