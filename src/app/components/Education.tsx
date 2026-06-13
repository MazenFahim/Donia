import {
  BadgeCheck,
  BookOpen,
  GraduationCap,
  Landmark,
  Layers,
  PenLine,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { FadeUp } from "./FadeUp";
import { T } from "./tokens";

const EDUCATION_ITEMS = [
  {
    icon: GraduationCap,
    badge: "Academic Degree",
    title: "M.Sc. in Education",
    institution: "Helwan University",
    description:
      "A strong academic foundation in education, teaching methods, curriculum development, and learner-centered training.",
    meta: [
      { icon: Landmark, label: "University", value: "Helwan University" },
      { icon: BookOpen, label: "Field", value: "Education" },
    ],
    chips: ["Teaching Methods", "Curriculum Development", "Learner-Centered Education"],
  },
  {
    icon: Sparkles,
    badge: "Academic Focus",
    title: "Education-Led Training Approach",
    institution: "From academic knowledge to real-world learning impact",
    description:
      "Her educational background supports the way she designs practical sessions, builds clear learning journeys, and helps students develop confidence for the job market.",
    meta: [
      { icon: Layers, label: "Approach", value: "Structured Learning" },
      { icon: UserCheck, label: "Impact", value: "Student Development" },
    ],
    chips: ["Clear Delivery", "Learning Design", "Career Readiness"],
  },
];

const FOCUS_ITEMS = [
  {
    icon: BookOpen,
    title: "Teaching Methods",
    text: "Clear and engaging ways to deliver knowledge.",
  },
  {
    icon: Layers,
    title: "Curriculum Design",
    text: "Structured learning journeys with purpose.",
  },
  {
    icon: UserCheck,
    title: "Learner Development",
    text: "Helping learners build confidence and readiness.",
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-24 text-[#1C1C1C] md:py-28"
      style={{ background: T.bgPage }}
    >
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: T.border }} />

      <div
        className="pointer-events-none absolute -right-20 top-16 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "rgba(107,143,113,0.11)" }}
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-10 h-64 w-64 rounded-full blur-3xl"
        style={{ background: "rgba(214,229,216,0.38)" }}
      />

      <div className="relative mx-auto max-w-[1120px] px-6 md:px-12">
        <FadeUp>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9" style={{ background: T.blue }} />
                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: T.blue }}
                >
                  Education
                </span>
              </div>

              <h2 className="font-['Playfair_Display'] text-[clamp(38px,5vw,62px)] font-semibold leading-[1.02] tracking-[-0.05em]">
                Academic Background
              </h2>

              <p className="mt-6 max-w-2xl text-[16px] leading-8" style={{ color: T.textSecondary }}>
                Donia’s academic background in education supports her practical training approach,
                helping her design learning experiences that are structured, clear, and connected
                to real-world development.
              </p>
            </div>

            <div
              className="w-full rounded-[24px] border p-5 shadow-[0_16px_45px_rgba(28,28,28,0.05)] lg:max-w-[330px]"
              style={{ background: "rgba(255,255,255,0.45)", borderColor: T.border }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                  style={{ background: T.gold, color: T.blue }}
                >
                  <BadgeCheck size={23} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.16em]" style={{ color: T.blue }}>
                    Academic Base
                  </p>
                  <p className="mt-2 text-sm leading-6" style={{ color: T.textSecondary }}>
                    Built on education, applied through training, mentoring, and learner development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        <div className="relative mt-14">
          <div
            className="absolute left-[25px] top-8 hidden h-[calc(100%-64px)] w-px sm:block"
            style={{ background: "linear-gradient(to bottom, rgba(107,143,113,0.18), rgba(107,143,113,0.62), rgba(107,143,113,0.18))" }}
          />

          <div className="space-y-6">
            {EDUCATION_ITEMS.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeUp key={item.title} delay={index * 0.06}>
                  <div className="relative sm:pl-[78px]">
                    <div
                      className="absolute left-0 top-8 hidden h-[52px] w-[52px] items-center justify-center rounded-full border sm:flex"
                      style={{
                        background: index === 0 ? T.gold : "rgba(255,255,255,0.58)",
                        borderColor: "rgba(107,143,113,0.28)",
                        color: T.blue,
                        boxShadow: "0 12px 26px rgba(107,143,113,0.14)",
                      }}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <article
                      className="relative overflow-hidden rounded-[28px] border p-6 shadow-[0_18px_55px_rgba(28,28,28,0.06)] md:p-7"
                      style={{ background: "rgba(255,255,255,0.56)", borderColor: T.border }}
                    >
                      <div
                        className="absolute inset-x-0 top-0 h-[4px]"
                        style={{ background: index === 0 ? T.blue : "rgba(107,143,113,0.28)" }}
                      />

                      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                        <div className="flex gap-4">
                          <div
                            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl sm:hidden"
                            style={{ background: T.gold, color: T.blue }}
                          >
                            <Icon size={25} strokeWidth={1.8} />
                          </div>

                          <div>
                            <span
                              className="inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em]"
                              style={{ background: "rgba(107,143,113,0.11)", color: T.blue }}
                            >
                              {item.badge}
                            </span>

                            <h3 className="mt-4 text-[24px] font-extrabold leading-tight tracking-[-0.03em] md:text-[30px]">
                              {item.title}
                            </h3>

                            <p className="mt-2 text-[15px] font-semibold" style={{ color: T.blue }}>
                              {item.institution}
                            </p>
                          </div>
                        </div>

                        <div
                          className="flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[12px] font-bold uppercase tracking-[0.14em]"
                          style={{ background: T.bgCard, color: T.navy }}
                        >
                          <PenLine size={14} strokeWidth={1.9} />
                          {index === 0 ? "Master’s Degree" : "Applied Learning"}
                        </div>
                      </div>

                      <p className="mt-5 max-w-3xl text-[15.5px] leading-8" style={{ color: T.textSecondary }}>
                        {item.description}
                      </p>

                      <div className="mt-6 grid gap-3 md:grid-cols-2">
                        {item.meta.map((metaItem) => {
                          const MetaIcon = metaItem.icon;
                          return (
                            <div
                              key={metaItem.label}
                              className="flex items-center gap-3 rounded-[18px] border p-4"
                              style={{ background: T.bgPage, borderColor: T.border }}
                            >
                              <span
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                                style={{ background: T.gold, color: T.blue }}
                              >
                                <MetaIcon size={18} strokeWidth={1.8} />
                              </span>
                              <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: "#8A8174" }}>
                                  {metaItem.label}
                                </p>
                                <p className="mt-1 text-sm font-semibold" style={{ color: T.navy }}>
                                  {metaItem.value}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.chips.map((chip) => (
                          <span
                            key={chip}
                            className="rounded-full border px-4 py-2 text-[12px] font-semibold"
                            style={{ background: "rgba(238,233,223,0.62)", borderColor: T.border, color: T.navy }}
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </article>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>

        <FadeUp delay={0.16}>
          <div className="mt-7 grid gap-3 md:grid-cols-3">
            {FOCUS_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[22px] border p-5 shadow-[0_14px_38px_rgba(28,28,28,0.04)]"
                  style={{ background: "rgba(255,255,255,0.48)", borderColor: T.border }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
                      style={{ background: T.gold, color: T.blue }}
                    >
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "#8A8174" }}>
                        0{index + 1}
                      </p>
                      <h4 className="mt-1 text-[15px] font-bold" style={{ color: T.navy }}>
                        {item.title}
                      </h4>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6" style={{ color: T.textSecondary }}>
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeUp>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: T.border }} />
    </section>
  );
}
