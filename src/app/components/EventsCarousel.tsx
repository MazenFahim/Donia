import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import evtSlide1 from "@/imports/5791871838450290276.jpg";
import evtSlide2 from "@/imports/5791871838450290275-1.jpg";
import evtSlide3 from "@/imports/5791871838450290273.jpg";
import evtSlide4 from "@/imports/5791871838450290283.jpg";
import { FadeUp } from "./FadeUp";

const EVENTS = [
  {
    num: "01",
    type: "University Program",
    name: "Start Your First Step",
    description:
      "A career readiness event helping fresh graduates take their first steps into the job market with confidence.",
    meta: "1st & 2nd Editions / BVU Academy",
    impact: "Fresh graduate career readiness",
    photo: evtSlide1,
    alt: "Donia Essam at New Cairo Technological University for the Start Your First Step event",
    crop: "center 20%",
  },
  {
    num: "02",
    type: "Career Training",
    name: "ABC Career",
    description:
      "A structured career development program covering job hunting, CV writing, and interview preparation.",
    meta: "1st & 2nd Editions / BVU Academy",
    impact: "CV writing, interviews and job search",
    photo: evtSlide2,
    alt: "Donia Essam Mohamed Amin at Ain Shams University for the ABC Career program",
    crop: "center 15%",
  },
  {
    num: "03",
    type: "Development Program",
    name: "TMC",
    description:
      "A competitive training and development program empowering youth with practical market skills.",
    meta: "1st & 2nd Editions / BVU Academy",
    impact: "Practical market skills for youth",
    photo: evtSlide3,
    alt: "TMC training program — group of participants with certificates",
    crop: "center 20%",
  },
  {
    num: "04",
    type: "Public Youth Event",
    name: "Path Finder Event",
    description:
      "A large-scale youth qualification event organized in collaboration with Al-Asmarat Youth & Sports City.",
    meta: "Ministry of Youth & Sports / Al-Asmarat Youth City",
    impact: "Large-scale youth career development",
    photo: evtSlide4,
    alt: "Donia Essam on stage with microphone at the Path Finder Event",
    crop: "center 18%",
  },
];

export function EventsCarousel() {
  const [active, setActive] = useState(0);
  const featured = EVENTS[active];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % EVENTS.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F8F5EF] py-24 text-[#1C1C1C] md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#DDD8CE]" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[34%] bg-[#EEE9DF]" />
      <div className="pointer-events-none absolute -right-32 top-28 h-96 w-96 rounded-full bg-[#6B8F71]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1220px] px-6 md:px-12">
        <FadeUp>
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#6B8F71]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6B8F71]">
                  Events & Programs
                </span>
              </div>
              <h2 className="font-['Playfair_Display'] text-[clamp(42px,6vw,78px)] font-semibold leading-[0.95] tracking-[-0.055em] text-[#1C1C1C]">
                Events with
                <br />visible impact
              </h2>
            </div>
            <p className="max-w-xl text-[16px] leading-8 text-[#4A4A4A] lg:ml-auto">
              A refined selection of Donia’s university programs, training sessions, public appearances, and youth development initiatives — presented as proof of presence, credibility, and real-world career impact.
            </p>
          </div>
        </FadeUp>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_390px] lg:items-start">
          <FadeUp delay={0.06}>
            <div key={featured.num} className="animate-[eventReveal_520ms_ease_both]">
              <div className="relative overflow-hidden rounded-[34px] bg-[#DCD6CB]">
                <div className="aspect-[1.18/1] md:aspect-[1.55/1]">
                  <ImageWithFallback
                    src={featured.photo}
                    alt={featured.alt}
                    className="h-full w-full object-cover grayscale-[14%] saturate-[.86]"
                    style={{ objectPosition: featured.crop }}
                  />
                </div>
                <div className="absolute inset-0 bg-[#6B8F71]/12 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/72 via-[#171717]/8 to-transparent" />


                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E9E3D6]">
                    <span className="font-['Playfair_Display'] text-3xl italic normal-case tracking-[-0.04em] text-[#F8F5EF]">
                      {featured.num}
                    </span>
                    <span className="h-px w-10 bg-[#D6E5D8]" />
                    <span>{featured.type}</span>
                  </div>
                  <h3 className="max-w-2xl font-['Playfair_Display'] text-[clamp(40px,5.4vw,72px)] font-semibold leading-[0.96] tracking-[-0.055em] text-[#F8F5EF]">
                    {featured.name}
                  </h3>
                </div>
              </div>

              <div className="mt-8 grid gap-8 border-b border-[#DDD8CE] pb-8 md:grid-cols-[1fr_0.78fr]">
                <p className="text-[17px] leading-8 text-[#3F3B35]">
                  {featured.description}
                </p>
                <div className="space-y-5 md:border-l md:border-[#DDD8CE] md:pl-8">
                  <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#847B6E]">
                      Impact focus
                    </p>
                    <p className="text-sm font-semibold leading-6 text-[#1C1C1C]">
                      {featured.impact}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#847B6E]">
                      Recognition
                    </p>
                    <p className="text-sm font-semibold leading-6 text-[#1C1C1C]">
                      {featured.meta}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="rounded-[34px] border border-[#DDD8CE] bg-[#EEE9DF]/70 p-4 md:p-5 lg:sticky lg:top-24">
              <div className="mb-5 flex items-center justify-between px-2 pt-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B8F71]">
                  Event index
                </p>
                <p className="font-['Playfair_Display'] text-2xl italic text-[#8A8174]">
                  {featured.num} / 04
                </p>
              </div>

              <div className="space-y-3">
                {EVENTS.map((event, index) => {
                  const isActive = active === index;
                  return (
                    <button
                      key={event.num}
                      type="button"
                      onClick={() => setActive(index)}
                      className={`group w-full rounded-[24px] border p-5 text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6B8F71]/25 ${
                        isActive
                          ? "border-[#6B8F71] bg-[#F8F5EF] shadow-[0_18px_46px_rgba(28,28,28,0.08)]"
                          : "border-transparent bg-transparent hover:border-[#D4CDBF] hover:bg-[#F8F5EF]/55"
                      }`}
                    >
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <span className={`font-['Playfair_Display'] text-3xl font-semibold leading-none tracking-[-0.05em] ${isActive ? "text-[#6B8F71]" : "text-[#A09689]"}`}>
                          {event.num}
                        </span>
                        <span className={`mt-1 flex h-8 w-8 items-center justify-center rounded-full border transition ${isActive ? "border-[#6B8F71] bg-[#6B8F71] text-[#F8F5EF]" : "border-[#C9C1B3] text-[#7A7267] group-hover:border-[#6B8F71] group-hover:text-[#6B8F71]"}`}>
                          <ArrowUpRight size={14} strokeWidth={1.8} />
                        </span>
                      </div>
                      <p className={`mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] ${isActive ? "text-[#6B8F71]" : "text-[#847B6E]"}`}>
                        {event.type}
                      </p>
                      <h4 className={`font-['Playfair_Display'] text-2xl font-semibold leading-[1.05] tracking-[-0.035em] ${isActive ? "text-[#1C1C1C]" : "text-[#37332D]"}`}>
                        {event.name}
                      </h4>
                    </button>
                  );
                })}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#DDD8CE]" />
    </section>
  );
}
