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

export function Education() {
  return (
    <section id="education" className="relative overflow-hidden bg-[#EFECE6] py-24 text-[#1C1C1C] md:py-28">
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
              Donia’s academic path combines education, philosophy, sociology, curricula, and teaching methods — a scholarly foundation behind her training and youth development work.
            </p>
          </div>
        </FadeUp>

        {/* خط الجدول الزمني الرأسي بلون المينت جرين */}
        <div className="relative border-l-2 border-[#7D9A84]/40 ml-4 md:ml-6 pl-8 md:pl-10 space-y-8">
          
          {ENTRIES.map((entry, index) => (
            <motion.article
              key={entry.year}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
              className="relative group"
            >
              {/* أيقونات الخط الزمني: المينت جرين في الحالة العادية، وتتحول للأبيض الفاتح عند الـ hover */}
              <div className="absolute -left-[49px] md:-left-[57px] top-1.5 flex h-8 w-8 items-center justify-center rounded-xl border-2 border-[#E8C25E] bg-[#F4F1EA] text-[#7D9A84] shadow-sm transition-all duration-300 group-hover:border-[#7D9A84] group-hover:bg-[#7D9A84] group-hover:text-[#FBF8F1] group-hover:shadow-[0_0_12px_rgba(125,154,132,0.3)]">
                {index === 3 ? <BookMarked size={14} strokeWidth={2.5} /> : <Award size={14} strokeWidth={2.5} />}
              </div>

              {/* الكارد الفاتح */}
              <div className="rounded-[24px] border-2 border-[#E8C25E]/40 bg-[#F4F1EA] p-6 shadow-[0_12px_40px_rgba(28,28,28,0.02)] transition-all duration-300 hover:border-[#E8C25E] hover:bg-[#EEE5D6] hover:shadow-[0_20px_50px_rgba(125,154,132,0.08)]">
                
                {/* الجزء العلوي */}
                <div className="mb-3.5 flex flex-wrap items-center justify-between gap-3">
                  <span className="font-['Playfair_Display'] text-xl font-bold italic leading-none text-[#7D9A84]">
                    {entry.year}
                  </span>
                  
                  <span className="inline-flex items-center rounded-full bg-[#7D9A84]/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#4E6353]">
                    {entry.badge}
                  </span>
                </div>

                {/* تفاصيل الشهادة الأكاديمية */}
                <h3 className="font-['Playfair_Display'] text-[22px] font-semibold leading-snug tracking-tight text-[#2C2925]">
                  {entry.degree}
                </h3>
                <p className="mt-2 text-sm text-[#5B554C] border-t border-[#DCD2C1]/60 pt-3">
                  {entry.detail}
                </p>
              </div>
            </motion.article>
          ))}

          {/* الصندوق الأخير (Thesis) */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="relative group"
          >
            {/* أيقونة الأطروحة: مينت جرين في الحالة العادية وتتحول للأبيض عند الـ hover */}
            <div className="absolute -left-[49px] md:-left-[57px] top-1.5 flex h-8 w-8 items-center justify-center rounded-xl border-2 border-[#E8C25E] bg-[#F4F1EA] text-[#7D9A84] shadow-sm transition-all duration-300 group-hover:border-[#7D9A84] group-hover:bg-[#7D9A84] group-hover:text-[#FBF8F1]">
              <ScrollText size={14} strokeWidth={2.5} />
            </div>

            {/* تم تغيير الخلفية هنا لتكون bg-[#F4F1EA] مطابقة تماماً لبقية الكروت */}
            <div className="rounded-[24px] border-2 border-[#E8C25E]/40 bg-[#F4F1EA] p-6 shadow-[0_12px_36px_rgba(28,28,28,0.02)] transition-all duration-300 hover:border-[#E8C25E] hover:bg-[#EEE5D6]">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7D9A84]">
                Master's Thesis
              </p>
              <h3 className="font-['Playfair_Display'] text-[22px] font-semibold leading-snug tracking-tight text-[#2C2925]">
                “{THESIS}”
              </h3>
            </div>
          </motion.div>

        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#DCD8D0]" />
    </section>
  );
}