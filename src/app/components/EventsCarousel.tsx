import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useScroll, useTransform, useSpring, useInView } from "motion/react";
import { ArrowUpRight, ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

// ✅ استيراد صور TFT Event
import tftSlide1 from "@/imports/TFT1.jpeg";
import tftSlide2 from "@/imports/TFT2.jpeg";
import tftSlide3 from "@/imports/TFT3.jpeg";

// ✅ استيراد صور مؤتمر جامعة عين شمس
import asSlide1 from "@/imports/AS1.jpg";
import asSlide2 from "@/imports/AS2.jpeg";

// ✅ استيراد صور ICC Event
import iccSlide2 from "@/imports/ICC2.jpeg";
import iccSlide3 from "@/imports/ICC3.jpeg";
import iccSlide4 from "@/imports/ICC4.jpeg";
import iccSlide5 from "@/imports/ICC5.jpeg";
import iccSlide6 from "@/imports/ICC6.jpeg";

// ✅ استيراد صور TMC
import tmcSlide1 from "@/imports/TMC1.jpeg";
import tmcSlide2 from "@/imports/TMC2.jpeg";
import tmcSlide3 from "@/imports/TMC3.jpeg";
import tmcSlide4 from "@/imports/TMC4.jpeg";
import tmcSlide5 from "@/imports/TMC5.jpeg";
import tmcSlide6 from "@/imports/TMC6.jpeg";
import tmcSlide7 from "@/imports/TMC7.jpeg";

// ✅ استيراد صور Path Finder Event
import pfSlide1 from "@/imports/PathFinder1.jpeg";
import pfSlide2 from "@/imports/PathFinder2.jpeg";
import pfSlide3 from "@/imports/PathFinder3.jpeg";
import pfSlide4 from "@/imports/PathFinder4.jpeg";
import pfSlide5 from "@/imports/PathFinder5.jpeg";
import pfSlide6 from "@/imports/PathFinder6.jpeg";
import pfSlide7 from "@/imports/PathFinder7.jpeg";
import pfSlide8 from "@/imports/PathFinder8.jpeg";

// ✅ استيراد صور Ramadan Majlis Event
import rmSlide1 from "@/imports/Ramadan1.jpeg";
import rmSlide2 from "@/imports/Ramadan2.jpeg";
import rmSlide3 from "@/imports/Ramadan3.jpeg";

// ✅ استيراد صور HR Expert Club Event
import hrSlide1 from "@/imports/HR1.jpeg";
import hrSlide2 from "@/imports/HR2.jpeg";
import hrSlide3 from "@/imports/HR3.jpeg";
import hrSlide4 from "@/imports/HR4.jpeg";
import hrSlide5 from "@/imports/HR5.jpeg";

import { FadeUp } from "./FadeUp";

const EVENTS = [
  {
    num: "01",
    type: "Tech Tournament",
    name: "TFT event",
    description: "A competitive Teamfight Tactics tournament bringing together strategic players for intense matches and community engagement.",
    meta: "1st Edition / BVU Academy",
    impact: "Esports community building and strategic gaming",
    photos: [
      { src: tftSlide1, crop: "center center", alt: "TFT Tournament Highlights 1" },
      { src: tftSlide2, crop: "center center", alt: "TFT Tournament Highlights 2" },
      { src: tftSlide3, crop: "center center", alt: "TFT Tournament Highlights 3" },
    ],
    photo: tftSlide1, 
    alt: "Strategic Teamfight Tactics tournament matches at TFT Event",
    crop: "center center",
  },
  {
    num: "02",
    type: "Academic Conference",
    name: "The 20th Annual Conference of the Adult Education Center - Ain Shams University",
    description: "An influential academic conference focusing on the modern trends, challenges, and strategic developments in adult education and community empowerment.",
    meta: "20th Edition / Ain Shams University",
    impact: "Adult education strategies and academic research alignment",
    photos: [
      { src: asSlide1, crop: "center 15%", alt: "Ain Shams University Conference Highlights 1" },
      { src: asSlide2, crop: "center center", alt: "Ain Shams University Conference Highlights 2" },
    ],
    photo: asSlide1, 
    alt: "Donia Essam Mohamed Amin at Ain Shams University for the Annual Conference",
    crop: "center 15%",
  },
  {
    num: "03",
    type: "Development Program",
    name: "TMC",
    description: "A competitive training and development program empowering youth with practical market skills.",
    meta: "1st & 2nd Editions / BVU Academy",
    impact: "Practical market skills for youth",
    photos: [
      { src: tmcSlide1, crop: "center 20%", alt: "TMC Highlights 1" }, 
      { src: tmcSlide2, crop: "center center", alt: "TMC Highlights 2" }, 
      { src: tmcSlide3, crop: "center center", alt: "TMC Highlights 3" }, 
      { src: tmcSlide4, crop: "center center", alt: "TMC Highlights 4" }, 
      { src: tmcSlide5, crop: "center center", alt: "TMC Highlights 5" },
      { src: tmcSlide6, crop: "center center", alt: "TMC Highlights 6" },
      { src: tmcSlide7, crop: "center center", alt: "TMC Highlights 7 Graduation", contain: true }, 
    ],
    photo: tmcSlide1, 
    alt: "TMC training program — group of participants with certificates",
    crop: "center 20%",
  },
  {
    num: "04",
    type: "International Case Competition",
    name: "ICC event",
    description: "An intensive global case competition challenging ambitious minds to solve real-world business cases and pitch strategic solutions.",
    meta: "Global Edition / Corporate Sponsored",
    impact: "Business strategy, analytical thinking, and global networking",
    photos: [
      { src: iccSlide2, crop: "center center", alt: "ICC Event Highlights 2" },
      { src: iccSlide3, crop: "center center", alt: "ICC Event Highlights 3" },
      { src: iccSlide4, crop: "center center", alt: "ICC Event Highlights 4" },
      { src: iccSlide5, crop: "center center", alt: "ICC Event Highlights 5" },
      { src: iccSlide6, crop: "center center", alt: "ICC Event Highlights 6" },
    ],
    photo: iccSlide2, 
    alt: "Global case solving and networking at the ICC Event",
    crop: "center 18%",
  },
  {
    num: "05",
    type: "Public Youth Event",
    name: "Path Finder Event",
    description: "A large-scale youth qualification event organized in collaboration with Al-Asmarat Youth & Sports City.",
    meta: "Ministry of Youth & Sports / Al-Asmarat Youth City",
    impact: "Large-scale youth career development",
    photos: [
      { src: pfSlide1, crop: "center 18%", alt: "Path Finder Event Highlights 1" },
      { src: pfSlide2, crop: "center center", alt: "Path Finder Event Highlights 2" },
      { src: pfSlide3, crop: "center center", alt: "Path Finder Event Highlights 3" },
      { src: pfSlide4, crop: "center center", alt: "Path Finder Event Highlights 4" },
      { src: pfSlide5, crop: "center center", alt: "Path Finder Event Highlights 5" },
      { src: pfSlide6, crop: "center center", alt: "Path Finder Event Highlights 6" },
      { src: pfSlide7, crop: "center center", alt: "Path Finder Event Highlights 7" },
      { src: pfSlide8, crop: "center center", alt: "Path Finder Event Highlights 8" },
    ],
    photo: pfSlide1, 
    alt: "Donia Essam on stage with microphone at the Path Finder Event",
    crop: "center 18%",
  },
  {
    num: "06",
    type: "Cultural Community Gathering",
    name: "Ramadan Majlis Event",
    description: "A special traditional and networking majlis bringing professionals together during the holy month to discuss community development and cultural values.",
    meta: "Annual Edition / Community Network",
    impact: "Cultural exchange, leadership networking, and social synergy",
    photos: [
      { src: rmSlide1, crop: "center center", alt: "Ramadan Majlis Event Highlights 1" },
      { src: rmSlide2, crop: "center center", alt: "Ramadan Majlis Event Highlights 2" },
      { src: rmSlide3, crop: "center center", alt: "Ramadan Majlis Event Highlights 3" },
    ],
    photo: rmSlide1, 
    alt: "Atmosphere and networking at the Ramadan Majlis Event",
    crop: "center center",
  },
  {
    num: "07",
    type: "Professional Corporate Forum",
    name: "HR Expert Club Event",
    description: "An exclusive gathering for human resource professionals focusing on talent acquisition strategies, corporate culture modern shifts, and workforce optimization.",
    meta: "Expert Edition / Corporate Network",
    impact: "Strategic workforce insights and industry leadership connection",
    photos: [
      { src: hrSlide1, crop: "center center", alt: "HR Expert Club Highlights 1" },
      { src: hrSlide2, crop: "center center", alt: "HR Expert Club Highlights 2" },
      { src: hrSlide3, crop: "center center", alt: "HR Expert Club Highlights 3" },
      { src: hrSlide4, crop: "center center", alt: "HR Expert Club Highlights 4" },
      { src: hrSlide5, crop: "center center", alt: "HR Expert Club Highlights 5" },
    ],
    photo: hrSlide1, 
    alt: "Keynote presentation and panels at the HR Expert Club Event",
    crop: "center center",
  },
];

const CARD_WIDTH = 460; 
const CARD_GAP = 28; 

// ✅ تم تعديل هذا المكون ليغطي الكارد بالكامل وتختفي المساحة الرمادية
function EventCard({
  event,
  index,
  total,
  trackProgress,
  onFocus,
  onOpen,
}: {
  event: (typeof EVENTS)[number];
  index: number;
  total: number;
  trackProgress: ReturnType<typeof useMotionValue<number>>;
  onFocus: (index: number) => void;
  onOpen: (index: number) => void;
}) {
  const centerFraction = (index + 0.5) / total;

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

  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, margin: "0px -15% 0px -15%" });
  const [mobilePeek, setMobilePeek] = useState(false);
  const isTouchDevice = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

  useEffect(() => {
    if (!isTouchDevice) return;
    if (!isInView) return;

    const openTimer = setTimeout(() => setMobilePeek(true), 420);
    const closeTimer = setTimeout(() => setMobilePeek(false), 420 + 2000);
    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, [isInView, isTouchDevice]);

  const panelOpen = hovered || mobilePeek;

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
      ref={cardRef}
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
        onClick={() => onOpen(index)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen(index);
          }
        }}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformPerspective: 1000,
        }}
        className="group relative aspect-[3.5/4.3] cursor-pointer overflow-hidden rounded-[30px] bg-[#1C1C1C] shadow-[0_20px_60px_rgba(28,28,28,0.10)] ring-1 ring-[#DDD8CE] transition-shadow duration-500 hover:shadow-[0_30px_80px_rgba(28,28,28,0.20)]"
      >
        <div className="absolute inset-0 w-full h-full z-0">
          <motion.div style={{ y: smoothImageY }} className="h-full w-full">
            <ImageWithFallback
              src={event.photo}
              alt={event.alt}
              className="h-full w-full scale-[1.08] object-cover grayscale-[14%] saturate-[.86] transition-transform duration-700 group-hover:scale-[1.16]"
              style={{ objectPosition: event.crop }}
            />
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[#6B8F71]/8 mix-blend-multiply z-10" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171717]/90 via-[#171717]/40 to-transparent z-10" />

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: panelOpen ? 0.16 : 0.08, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pointer-events-none absolute right-5 top-5 font-['Playfair_Display'] text-[120px] italic leading-none text-[#F8F5EF] z-10"
        >
          {event.num}
        </motion.span>

        <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 z-20">
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

          <motion.div
            initial={false}
            animate={{
              height: panelOpen ? "auto" : 0,
              opacity: panelOpen ? 1 : 0,
              marginTop: panelOpen ? 14 : 0,
            }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-[14px] leading-6 text-[#F1EDE3]/85 line-clamp-2">
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

        <motion.span
          initial={{ scale: 0.9, opacity: 0.7 }}
          animate={{
            scale: panelOpen ? 1.1 : 0.9,
            opacity: 1,
            rotate: panelOpen ? 45 : 0,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#F8F5EF]/30 bg-[#1C1C1C]/30 text-[#F8F5EF] backdrop-blur-sm z-20"
        >
          <ArrowUpRight size={15} strokeWidth={1.8} />
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

function EventModal({
  event,
  onClose,
  onPrev,
  onNext,
}: {
  event: (typeof EVENTS)[number];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (event.photos) {
        if (e.key === "ArrowLeft") prevInternalPhoto();
        if (e.key === "ArrowRight") nextInternalPhoto();
      } else {
        if (e.key === "ArrowLeft") onPrev();
        if (e.key === "ArrowRight") onNext();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext, currentPhotoIndex]);

  const nextInternalPhoto = () => {
    if (event.photos) {
      setCurrentPhotoIndex((prev) => (prev + 1) % event.photos.length);
    }
  };

  const prevInternalPhoto = () => {
    if (event.photos) {
      setCurrentPhotoIndex((prev) => (prev - 1 + event.photos.length) % event.photos.length);
    }
  };

  const isSlider = !!event.photos;
  const displayPhoto = isSlider ? event.photos[currentPhotoIndex].src : event.photo;
  const currentCrop = isSlider ? event.photos[currentPhotoIndex].crop : event.crop;
  const currentAlt = isSlider ? event.photos[currentPhotoIndex].alt : event.alt;
  
  const isContain = isSlider && event.photos[currentPhotoIndex].contain;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C1C1C]/70 p-4 backdrop-blur-sm md:p-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative grid h-auto max-h-[90vh] min-h-[520px] w-full max-w-[1040px] overflow-hidden rounded-[28px] bg-[#F8F5EF] shadow-[0_40px_100px_rgba(0,0,0,0.35)] grid-rows-[auto_1fr] md:grid-rows-1 md:grid-cols-[1.15fr_1fr]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#1C1C1C]/60 text-[#F8F5EF] backdrop-blur-md shadow-md transition-all duration-300 hover:bg-[#1C1C1C]/80 hover:rotate-90"
        >
          <X size={20} strokeWidth={2} />
        </button>

        <div className="relative h-[320px] sm:h-[400px] md:h-full w-full bg-[#1F1B16] overflow-hidden flex-shrink-0 group/slider">
          <div className="absolute inset-0 w-full h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhotoIndex + (event.name)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 w-full h-full flex items-center justify-center"
              >
                <ImageWithFallback
                  src={displayPhoto}
                  alt={currentAlt}
                  className={`w-full h-full grayscale-[14%] saturate-[.86] ${isContain ? 'object-contain' : 'object-cover'}`}
                  style={{ objectPosition: currentCrop }} 
                />
              </motion.div>
            </AnimatePresence>
          </div>
          
          {!isContain && (
            <>
              <div className="pointer-events-none absolute inset-0 bg-[#6B8F71]/12 mix-blend-multiply" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171717]/60 via-transparent to-transparent md:bg-gradient-to-r" />
            </>
          )}
          
          <span className="absolute left-6 top-6 font-['Playfair_Display'] text-5xl italic leading-none text-[#F8F5EF] drop-shadow-md">
            {event.num}
          </span>

          {event.photos && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prevInternalPhoto(); }}
                aria-label="Previous Photo"
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-[#1C1C1C]/75 text-[#F8F5EF] backdrop-blur-md shadow-lg border border-[#F8F5EF]/20 transition-all duration-200 hover:bg-[#1C1C1C]/90 hover:scale-105 active:scale-95 z-20"
              >
                <ChevronLeft size={26} strokeWidth={2.5} />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); nextInternalPhoto(); }}
                aria-label="Next Photo"
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-[#1C1C1C]/75 text-[#F8F5EF] backdrop-blur-md shadow-lg border border-[#F8F5EF]/20 transition-all duration-200 hover:bg-[#1C1C1C]/90 hover:scale-105 active:scale-95 z-20"
              >
                <ChevronRight size={26} strokeWidth={2.5} />
              </button>

              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-[#1C1C1C]/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                {event.photos.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setCurrentPhotoIndex(i); }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentPhotoIndex === i ? "w-5 bg-[#F8F5EF]" : "w-2 bg-[#F8F5EF]/45 hover:bg-[#F8F5EF]/70"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col overflow-y-auto p-7 md:p-10 h-full justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B8F71]">
              <span className="h-px w-8 bg-[#6B8F71]" />
              <span>{event.type}</span>
            </div>
            <h3 className="font-['Playfair_Display'] text-[clamp(26px,3.5vw,36px)] font-semibold leading-[1.1] tracking-[-0.045em] text-[#1C1C1C]">
              {event.name}
            </h3>
            <p className="mt-5 text-[16px] leading-8 text-[#3F3B35]">
              {event.description}
            </p>

            <div className="mt-7 grid gap-5 border-t border-[#DDD8CE] pt-6 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#847B6E]">
                  Impact focus
                </p>
                <p className="text-sm font-semibold leading-6 text-[#1C1C1C]">
                  {event.impact}
                </p>
              </div>
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#847B6E]">
                  Recognition
                </p>
                <p className="text-sm font-semibold leading-6 text-[#1C1C1C]">
                  {event.meta}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-[#DDD8CE] pt-6 mt-8">
            <button
              type="button"
              onClick={onPrev}
              className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#7A7267] transition-colors duration-300 hover:text-[#6B8F71]"
            >
              <ArrowLeft size={15} strokeWidth={1.8} />
              Previous Event
            </button>
            <button
              type="button"
              onClick={onNext}
              className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#7A7267] transition-colors duration-300 hover:text-[#6B8F71]"
            >
              Next Event
              <ArrowRight size={15} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function EventsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
                  onOpen={setOpenIndex}
                />
              </div>
            ))}
            <div className="shrink-0" style={{ width: 1 }} />
          </div>
        </FadeUp>

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

      <AnimatePresence>
        {openIndex !== null && (
          <EventModal
            event={EVENTS[openIndex]}
            onClose={() => setOpenIndex(null)}
            onPrev={() => setOpenIndex((prev) => (prev === null ? 0 : (prev - 1 + EVENTS.length) % EVENTS.length))}
            onNext={() => setOpenIndex((prev) => (prev === null ? 0 : (prev + 1) % EVENTS.length))}
          />
        )}
      </AnimatePresence>
    </section>
  );
}