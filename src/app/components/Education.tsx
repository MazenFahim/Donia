import { motion } from "motion/react";
import { Medal, BookMarked } from "lucide-react";
import { FadeUp } from "./FadeUp";

const BACHELORS = {
  year: "2019",
  degree: "Bachelor's Degree in Education",
  detail: "Philosophy & Sociology Department",
  badge: "Ranked 1st · Distinction",
};

const ENTRIES = [
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
    <section id="education" className="relative overflow-hidden bg-[#EFECE6] py-24 text-[#1C1C1C] md:py-28">
      <style>{`
        @keyframes medal-spin {
          0%   { transform: rotateY(0deg) scale(0.55); opacity: 0; }
          20%  { opacity: 1; }
          100% { transform: rotateY(360deg) scale(1); opacity: 1; }
        }
        @keyframes medal-glow {
          0%, 100% {
            box-shadow: 0 0 6px rgba(232,194,94,0.35), inset 0 0 6px rgba(232,194,94,0.15);
          }
          50% {
            box-shadow: 0 0 16px rgba(232,194,94,0.65), inset 0 0 10px rgba(232,194,94,0.3);
          }
        }
        @keyframes card-shimmer {
          0%   { left: -60%; }
          16%  { left: 130%; }
          100% { left: 130%; }
        }
        .medal-icon-3d {
          perspective: 400px;
          animation: medal-glow 2.4s ease-in-out infinite;
        }
        .medal-icon-3d svg {
          animation: medal-spin 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
          transform-style: preserve-3d;
        }
        .shimmer-card {
          position: relative;
          overflow: hidden;
        }
        .shimmer-card::after {
          content: "";
          position: absolute;
          top: 0;
          left: -60%;
          width: 40%;
          height: 100%;
          background: linear-gradient(
            100deg,
            transparent 0%,
            rgba(255,255,255,0) 30%,
            rgba(255,255,255,0.5) 50%,
            rgba(255,255,255,0) 70%,
            transparent 100%
          );
          transform: skewX(-20deg);
          animation: card-shimmer 10s ease infinite;
          pointer-events: none;
        }
      `}</style>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#DCD8D0]" />
      <div className="pointer-events-none absolute -right-28 top-24 h-80 w-80 rounded-full bg-[#7D9A84]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[850px] px-6 md:px-12">
        
        {/* العناوين العلوية الفاتحة */}
        <FadeUp>
          <div className="mb-16 text-center md:text-left">
            <div className="mb-4 flex items-center justify-center md:justify-start gap-3">
              <span className="h-px w-10 bg-[#7D9A84]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7D9A84]">
                Academic Background
              </span>
            </div>
            <h2 className="font-['Playfair_Display'] text-[clamp(36px,5vw,56px)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1C1C1C]">
              Education built on distinction
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#4A4A4A]">
            Donia's academic path spans education, philosophy, sociology, and teaching methods — the scholarly foundation behind her work in training and youth development.
            </p>
          </div>
        </FadeUp>

        {/* خط الجدول الزمني الرأسي بلون المينت جرين */}
        <div className="relative border-l-2 border-[#7D9A84]/40 ml-4 md:ml-6 pl-8 md:pl-10 space-y-8">

          {/* الصندوق الأول (Thesis) — special: medal spin + glow + shimmer */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            <div className="medal-icon-3d absolute -left-[49px] md:-left-[57px] top-1.5 flex h-8 w-8 items-center justify-center rounded-xl border-2 border-[#E8C25E] bg-[#F4F1EA] text-[#7D9A84] shadow-sm transition-colors duration-300 group-hover:border-[#7D9A84] group-hover:bg-[#7D9A84] group-hover:text-[#FBF8F1]">
              <Medal size={14} strokeWidth={2.5} />
            </div>

            <div className="shimmer-card rounded-[24px] border-2 border-[#E8C25E]/50 bg-[#F4F1EA] p-6 shadow-[0_12px_36px_rgba(28,28,28,0.02)] transition-all duration-300 hover:border-[#E8C25E] hover:bg-[#EEE5D6]">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7D9A84]">
                Master's Thesis
              </p>
              <h3 className="font-['Playfair_Display'] text-[22px] font-semibold leading-snug tracking-tight text-[#2C2925]">
                "{THESIS}"
              </h3>
            </div>
          </motion.div>

          {/* الصندوق الثاني (Bachelor's) — special: medal spin + glow + shimmer */}
          <motion.article
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="relative group"
          >
            <div className="medal-icon-3d absolute -left-[49px] md:-left-[57px] top-1.5 flex h-8 w-8 items-center justify-center rounded-xl border-2 border-[#E8C25E] bg-[#F4F1EA] text-[#7D9A84] shadow-sm transition-colors duration-300 group-hover:border-[#7D9A84] group-hover:bg-[#7D9A84] group-hover:text-[#FBF8F1]">
              <Medal size={14} strokeWidth={2.5} />
            </div>

            <div className="shimmer-card rounded-[24px] border-2 border-[#E8C25E]/50 bg-[#F4F1EA] p-6 shadow-[0_12px_40px_rgba(28,28,28,0.02)] transition-all duration-300 hover:border-[#E8C25E] hover:bg-[#EEE5D6] hover:shadow-[0_20px_50px_rgba(125,154,132,0.08)]">
              <div className="mb-3.5 flex flex-wrap items-center justify-between gap-3">
                <span className="font-['Playfair_Display'] text-xl font-bold italic leading-none text-[#7D9A84]">
                  {BACHELORS.year}
                </span>
                <span className="inline-flex items-center rounded-full bg-[#7D9A84]/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#4E6353]">
                  {BACHELORS.badge}
                </span>
              </div>
              <h3 className="font-['Playfair_Display'] text-[22px] font-semibold leading-snug tracking-tight text-[#2C2925]">
                {BACHELORS.degree}
              </h3>
              <p className="mt-2 text-sm text-[#5B554C] border-t border-[#DCD2C1]/60 pt-3">
                {BACHELORS.detail}
              </p>
            </div>
          </motion.article>

          {/* بقية الشهادات — تصميم بسيط بدون أنيميشن خاص */}
          {ENTRIES.map((entry, index) => (
            <motion.article
              key={entry.year}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.16 + index * 0.08 }}
              className="relative group"
            >
              <div className="absolute -left-[49px] md:-left-[57px] top-1.5 flex h-8 w-8 items-center justify-center rounded-xl border-2 border-[#E8C25E] bg-[#F4F1EA] text-[#7D9A84] shadow-sm transition-all duration-300 group-hover:border-[#7D9A84] group-hover:bg-[#7D9A84] group-hover:text-[#FBF8F1] group-hover:shadow-[0_0_12px_rgba(125,154,132,0.3)]">
                {index === ENTRIES.length - 1 ? (
                  <BookMarked size={14} strokeWidth={2.5} />
                ) : (
                  <Medal size={14} strokeWidth={2.5} />
                )}
              </div>

              <div className="rounded-[24px] border-2 border-[#E8C25E]/40 bg-[#F4F1EA] p-6 shadow-[0_12px_40px_rgba(28,28,28,0.02)] transition-all duration-300 hover:border-[#E8C25E] hover:bg-[#EEE5D6] hover:shadow-[0_20px_50px_rgba(125,154,132,0.08)]">
                <div className="mb-3.5 flex flex-wrap items-center justify-between gap-3">
                  <span className="font-['Playfair_Display'] text-xl font-bold italic leading-none text-[#7D9A84]">
                    {entry.year}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-[#7D9A84]/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#4E6353]">
                    {entry.badge}
                  </span>
                </div>
                <h3 className="font-['Playfair_Display'] text-[22px] font-semibold leading-snug tracking-tight text-[#2C2925]">
                  {entry.degree}
                </h3>
                <p className="mt-2 text-sm text-[#5B554C] border-t border-[#DCD2C1]/60 pt-3">
                  {entry.detail}
                </p>
              </div>
            </motion.article>
          ))}

        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#DCD8D0]" />
    </section>
  );
}