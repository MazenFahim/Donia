import { useEffect, useState } from "react";
import { T } from "./tokens";

const NAV_ITEMS = ["About", "Education", "Programs", "Contact"];

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const getScrollOffset = () => {
  const navbar = document.querySelector("[data-site-navbar]") as HTMLElement | null;
  return (navbar?.offsetHeight ?? 82) + 18;
};

const smoothScrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (!section) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const startY = window.scrollY;
  const targetY = Math.max(
    section.getBoundingClientRect().top + window.scrollY - getScrollOffset(),
    0
  );

  // Remove the hash from the URL. This stops the browser from auto-jumping again
  // when images/components re-render after the manual scroll finishes.
  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);

  if (prefersReducedMotion) {
    window.scrollTo(0, targetY);
    return;
  }

  const duration = 900;
  const startTime = performance.now();

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startY + (targetY - startY) * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  return isMobile;
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener("resize", closeMenuOnResize);
    return () => window.removeEventListener("resize", closeMenuOnResize);
  }, []);

  useEffect(() => {
    // If the page was left at /#contact or /#programs, clear the hash once.
    // This prevents repeated browser hash-jumps while the page layout is changing.
    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    smoothScrollToSection(id);
  };

  const renderNavLink = (item: string) => {
    const id = item.toLowerCase();

    return (
      <button
        key={item}
        type="button"
        onClick={() => handleNavClick(id)}
        style={{
          background: "transparent",
          border: "none",
          padding: 0,
          fontSize: 13,
          fontWeight: 500,
          color: T.textSecondary,
          fontFamily: "Poppins, sans-serif",
          textDecoration: "none",
          letterSpacing: "0.04em",
          transition: "color 0.15s",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = T.navy)}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = T.textSecondary)}
      >
        {item}
      </button>
    );
  };

  const bookButtonStyles = {
    background: T.blue,
    color: T.white,
    border: "none",
    height: 40,
    padding: "0 22px",
    fontSize: 13,
    fontWeight: 600,
    fontFamily: "Poppins, sans-serif",
    cursor: "pointer",
    letterSpacing: "0.04em",
    borderRadius: 10,
    transition: "background 0.15s, box-shadow 0.15s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as const;

  return (
    <div
      data-site-navbar
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(247,248,252,0.92)" : T.bgPage,
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${T.border}` : "1px solid transparent",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div
        style={{
          height: 3,
          background: `linear-gradient(90deg, ${T.navy} 0%, ${T.blue} 60%, ${T.gold} 100%)`,
        }}
      />

      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
        }}
      >
        <button
          type="button"
          onClick={() => smoothScrollToSection("about")}
          style={{
            background: "transparent",
            border: "none",
            padding: 0,
            fontSize: 14,
            fontWeight: 700,
            color: T.navy,
            fontFamily: "Poppins, sans-serif",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Donia Essam
        </button>

        {/* Desktop navigation */}
        <div
          className="desktop-nav-links"
          style={{
            display: isMobile ? "none" : "flex",
            gap: 32,
            alignItems: "center",
          }}
        >
          {NAV_ITEMS.map(renderNavLink)}

          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            style={bookButtonStyles}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#2a45e8";
              el.style.boxShadow = "0 4px 16px rgba(61,90,254,0.35)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = T.blue;
              el.style.boxShadow = "none";
            }}
          >
            Book Session
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="mobile-menu-button"
          onClick={() => setMenuOpen((current) => !current)}
          style={{
            display: isMobile ? "flex" : "none",
            width: 42,
            height: 42,
            alignItems: "center",
            justifyContent: "center",
            background: T.bgCard,
            border: `1px solid ${T.border}`,
            borderRadius: 10,
            color: T.navy,
            fontSize: 22,
            lineHeight: 1,
            cursor: "pointer",
          }}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div
          className="mobile-nav-panel"
          style={{
            display: isMobile ? "block" : "none",
            padding: "4px 24px 22px",
            borderTop: `1px solid ${T.border}`,
            background: scrolled ? "rgba(247,248,252,0.98)" : T.bgPage,
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {NAV_ITEMS.map(renderNavLink)}
            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              style={{
                ...bookButtonStyles,
                width: "100%",
                height: 44,
              }}
            >
              Book Session
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
