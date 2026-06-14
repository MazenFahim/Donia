import { useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
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

const CARD_WIDTH = 460; // px, base card width on desktop
const CARD_GAP = 28; // px

function EventCard({
  event,
  index,
  total,
  trackProgress,
  onFocus,
}: {
  event: (typeof EVENTS)[number];
  index: number;
  total: number;
  trackProgress: ReturnType<typeof useMotionValue<number>>;
  onFocus: (index: number) => void;
}) {
  // Each card's "center position" along the track, as a fraction 0..1
  const centerFraction = (index + 0.5) / total;

  // Distance from viewport-relative scroll progress -> drives scale/opacity (parallax feel)
  const scale = useTransform(
    trackProgress,
    [centerFraction - 0.5, centerFraction, centerFraction + 0.5],
    [0.86, 1, 0.86]
  );
  const opacity = useTransform(
    trackProgress,
    [centerFraction - 0.6, centerFraction, centerFraction + 0.6],
    [0.45, 1, 0.45]
  );
  const imageY = useTransform(
    trackProgress,
    [centerFraction - 0.5, centerFraction, centerFraction + 0.5],
    [24, 0, 24]
  );

  const smoothScale = useSpring(scale, { stiffness: 120, damping: 20 });
  const smoothOpacity = useSpring(opacity, { stiffness: 120, damping: 20 });
  const smoothImageY = useSpring(imageY, { stiffness: 120, damping: 20 });

  const [hovered, setHovered] = useState(false);

  // subtle tilt following pointer
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 14 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 14 });

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 8);
    rotateX.set(-py * 8);
  }
  function handlePointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
    setHovered(false);
  }

  return (
    <motion.div
      style={{
        scale: smoothScale,
        opacity: smoothOpacity,
        width: CARD_WIDTH,
        flex: `0 0 ${CARD_WIDTH}px`,
      }}
      className="relative select-none"
    >
      <motion.div
        onPointerMove={handlePointerMove}
        onPointerEnter={() => {
          setHovered(true);
          onFocus(index);
        }}
        onPointerLeave={handlePointerLeave}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformPerspective: 1000,
        }}
        className="group relative overflow-hidden rounded-[30px] bg-[#DCD6CB] shadow-[0_20px_60px_rgba(28,28,28,0.10)] ring-1 ring-[#DDD8CE] transition-shadow duration-500 hover:shadow-[0_30px_80px_rgba(28,28,28,0.20)]"
      >
        <div className="aspect-[3.5/4.3]">
          <motion.div style={{ y: smoothImageY }} className="h-full w-full">
            <ImageWithFallback
              src={event.photo}
              alt={event.alt}
              className="h-full w-full scale-[1.08] object-cover grayscale-[14%] saturate-[.86] transition-transform duration-700 group-hover:scale-[1.16]"
              style={{ objectPosition: event.crop }}
            />
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[#6B8F71]/12 mix-blend-multiply" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-[#171717]/15 to-transparent" />

        {/* number watermark */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: hovered ? 0.16 : 0.08, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pointer-events-none absolute right-5 top-5 font-['Playfair_Display'] text-[120px] italic leading-none text-[#F8F5EF]"
        >
          {event.num}
        </motion.span>

        {/* content */}
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
          <div className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E9E3D6]">
            <span className="font-['Playfair_Display'] text-2xl italic normal-case tracking-[-0.04em] text-[#F8F5EF]">
              {event.num}
            </span>
            <span className="h-px w-8 bg-[#D6E5D8]" />
            <span>{event.type}</span>
          </div>
          <h3 className="font-['Playfair_Display'] text-[clamp(28px,3.2vw,38px)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#F8F5EF]">
            {event.name}
          </h3>

          {/* expanding detail panel */}
          <motion.div
            initial={false}
            animate={{
              height: hovered ? "auto" : 0,
              opacity: hovered ? 1 : 0,
              marginTop: hovered ? 14 : 0,
            }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-[14px] leading-6 text-[#F1EDE3]/85">
              {event.description}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#F8F5EF]/15 pt-4">
              <div>
                <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D6E5D8]/70">
                  Impact focus
                </p>
                <p className="text-[12px] font-semibold leading-5 text-[#F8F5EF]">
                  {event.impact}
                </p>
              </div>
              <div>
                <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D6E5D8]/70">
                  Recognition
                </p>
                <p className="text-[12px] font-semibold leading-5 text-[#F8F5EF]">
                  {event.meta}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* corner arrow */}
        <motion.span
          initial={{ scale: 0.9, opacity: 0.7 }}
          animate={{
            scale: hovered ? 1.1 : 0.9,
            opacity: 1,
            rotate: hovered ? 45 : 0,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#F8F5EF]/30 bg-[#1C1C1C]/30 text-[#F8F5EF] backdrop-blur-sm"
        >
          <ArrowUpRight size={15} strokeWidth={1.8} />
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

export function EventsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track horizontal scroll progress of the filmstrip itself
  const { scrollXProgress } = useScroll({ container: trackRef });

  function scrollToIndex(index: number) {
    const el = trackRef.current;
    if (!el) return;
    const cardFull = CARD_WIDTH + CARD_GAP;
    el.scrollTo({ left: index * cardFull, behavior: "smooth" });
    setActiveIndex(index);
  }

  function scrollBy(direction: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const cardFull = CARD_WIDTH + CARD_GAP;
    el.scrollBy({ left: direction * cardFull, behavior: "smooth" });
    setActiveIndex((prev) => Math.min(Math.max(prev + direction, 0), EVENTS.length - 1));
  }

  return (
    <section className="relative overflow-hidden bg-[#F8F5EF] py-24 text-[#1C1C1C] md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#DDD8CE]" />
      <div className="pointer-events-none absolute -right-32 top-28 h-96 w-96 rounded-full bg-[#6B8F71]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#D6E5D8]/30 blur-3xl" />

      <div className="relative mx-auto max-w-[1220px] px-6 md:px-12">
        <FadeUp>
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
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
            <div className="flex flex-col gap-6 lg:ml-auto lg:items-end lg:text-right">
              <p className="max-w-xl text-[16px] leading-8 text-[#4A4A4A]">
                A refined selection of Donia’s university programs, training sessions, public appearances, and youth development initiatives — presented as proof of presence, credibility, and real-world career impact.
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => scrollBy(-1)}
                  aria-label="Previous event"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8D1C4] text-[#7A7267] transition-all duration-300 hover:border-[#6B8F71] hover:text-[#6B8F71] hover:-translate-x-0.5"
                >
                  <ArrowLeft size={17} strokeWidth={1.8} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollBy(1)}
                  aria-label="Next event"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8D1C4] text-[#7A7267] transition-all duration-300 hover:border-[#6B8F71] hover:text-[#6B8F71] hover:translate-x-0.5"
                >
                  <ArrowRight size={17} strokeWidth={1.8} />
                </button>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div
            ref={trackRef}
            className="flex gap-7 overflow-x-auto pb-4 pl-[2px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ scrollSnapType: "x mandatory", cursor: "grab" }}
          >
            {EVENTS.map((event, index) => (
              <div key={event.num} style={{ scrollSnapAlign: "start" }}>
                <EventCard
                  event={event}
                  index={index}
                  total={EVENTS.length}
                  trackProgress={scrollXProgress}
                  onFocus={setActiveIndex}
                />
              </div>
            ))}
            {/* trailing spacer so last card can center */}
            <div className="shrink-0" style={{ width: 1 }} />
          </div>
        </FadeUp>

        {/* progress / index rail */}
        <FadeUp delay={0.14}>
          <div className="mt-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              {EVENTS.map((event, index) => (
                <button
                  key={event.num}
                  type="button"
                  onClick={() => scrollToIndex(index)}
                  aria-label={`Go to ${event.name}`}
                  className="group flex items-center gap-2"
                >
                  <span
                    className={`block h-[3px] rounded-full transition-all duration-500 ${
                      activeIndex === index
                        ? "w-10 bg-[#6B8F71]"
                        : "w-5 bg-[#D8D1C4] group-hover:bg-[#A09689]"
                    }`}
                  />
                </button>
              ))}
            </div>
            <p className="font-['Playfair_Display'] text-xl italic text-[#8A8174]">
              0{activeIndex + 1} / 0{EVENTS.length}
            </p>
          </div>
        </FadeUp>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#DDD8CE]" />
    </section>
  );
}