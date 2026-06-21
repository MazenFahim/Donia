import { Play, Facebook } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { FadeUp } from "./FadeUp";
import { T } from "./tokens";
import reelThumbOne from "@/imports/5791871838450290271.jpg";
import reelThumbTwo from "@/imports/5791871838450290275.jpg";
import reelThumbThree from "@/imports/5791871838450290275-1.jpg";

const TRAINING_VIDEOS = [
  {
    title: "Public speaking tips",
    badge: "Reel",
    platform: "Facebook",
    url: "https://web.facebook.com/reel/1211200914104090",
    thumbnail: reelThumbOne,
    alt: "Portrait thumbnail from a training video about public speaking tips",
  },
  {
    title: "Confidence on stage",
    badge: "Reel",
    platform: "Facebook",
    url: "https://web.facebook.com/reel/1377818246898486",
    thumbnail: reelThumbTwo,
    alt: "Portrait thumbnail from a training video about confidence on stage",
  },
  {
    title: "Career-ready communication",
    badge: "Reel",
    platform: "Facebook",
    url: "https://web.facebook.com/watch/?v=605099809230138",
    thumbnail: reelThumbThree,
    alt: "Portrait thumbnail from a training video about career-ready communication",
  },
];

export function TrainingVideos() {
  return (
    <section id="training-videos" style={{ background: "#F8F5EF", borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "112px 48px 120px" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(34px, 4vw, 52px)", fontWeight: 700, color: T.navy, margin: "0 0 14px", letterSpacing: "-0.04em", lineHeight: 1.1, fontFamily: "Playfair Display, serif" }}>
              Training Videos
            </h2>
            <p style={{ fontSize: 16, color: T.textSecondary, margin: 0, lineHeight: 1.7, fontFamily: "Poppins, sans-serif" }}>
              Tap a video to watch on Instagram or Facebook
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRAINING_VIDEOS.map((video, index) => (
            <FadeUp key={video.url} delay={index * 90}>
              <a
                href={video.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Watch ${video.title} on ${video.platform}`}
                className="group block transition-transform duration-300 ease-out hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4"
                style={{ color: T.navy, borderRadius: 36, outlineColor: T.blue }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
                  <div
                    style={{
                      width: "min(100%, 286px)",
                      aspectRatio: "393 / 852",
                      borderRadius: 46,
                      padding: 7,
                      position: "relative",
                      background: "linear-gradient(145deg, #3B3B3D 0%, #090909 34%, #242426 68%, #050505 100%)",
                      boxShadow: "0 24px 48px rgba(28,28,28,0.16), 0 8px 18px rgba(28,28,28,0.10), inset 0 0 0 1px rgba(255,255,255,0.12)",
                    }}
                  >
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        inset: 2,
                        borderRadius: 44,
                        border: "1px solid rgba(255,255,255,0.16)",
                        pointerEvents: "none",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        borderRadius: 39,
                        overflow: "hidden",
                        background: T.navy,
                        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06), inset 0 0 22px rgba(0,0,0,0.42)",
                      }}
                    >
                      <div
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          top: 13,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 90,
                          height: 28,
                          borderRadius: 999,
                          background: "#050505",
                          boxShadow: "0 1px 2px rgba(255,255,255,0.08), inset 0 0 0 1px rgba(255,255,255,0.04)",
                          zIndex: 5,
                        }}
                      />

                      <ImageWithFallback
                        src={video.thumbnail}
                        alt={video.alt}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: 39, background: T.bgCard }}
                      />

                      <div
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          inset: 0,
                          borderRadius: 39,
                          background: "linear-gradient(180deg, rgba(28,28,28,0.10) 0%, transparent 34%, rgba(28,28,28,0.24) 100%)",
                          boxShadow: "inset 0 0 20px rgba(0,0,0,0.28)",
                        }}
                      />

                      <div
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: 44,
                          height: 44,
                          borderRadius: 999,
                          background: "rgba(28,28,28,0.56)",
                          backdropFilter: "blur(4px)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Play size={18} fill="white" color="white" strokeWidth={1.5} style={{ marginLeft: 3 }} />
                      </div>

                      <div
                        style={{
                          position: "absolute",
                          left: 14,
                          bottom: 14,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "7px 10px",
                          borderRadius: 999,
                          background: "rgba(28,28,28,0.58)",
                          color: T.white,
                          backdropFilter: "blur(5px)",
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: "0.03em",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        <Facebook size={12} fill="white" color="white" strokeWidth={1.8} />
                        <span>{video.badge}</span>
                      </div>
                    </div>
                  </div>

                  <h3 style={{ margin: "6px 0 0", textAlign: "center", fontSize: "clamp(18px, 1.7vw, 21px)", fontWeight: 700, lineHeight: 1.35, color: T.navy, fontFamily: "Poppins, sans-serif" }}>
                    {video.title}
                  </h3>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
